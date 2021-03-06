'use strict';
const pageNames = {
    product: 'product',
    catalog: 'catalog',
    index: 'index'
};

function markActivePage() {
    const path = window.location.pathname;
    const navMenuLinks = document.querySelectorAll('.nav-list .nav-list__item a');
    navMenuLinks.forEach(function(el) {
        const href = el.getAttribute('href');
        path.match(href) ? el.closest('.nav-list__item').classList.add('current') : void (0);
        if ((path === '' || path === '/') && (href.indexOf('index') > -1)) {el.closest('.nav-list__item').classList.add('current')}
    });
}

function nodeExist(selector) {
    return document.querySelector(selector) !== null;
}
function getNewNode({tag = 'div', classList = '', attrs = {}, html, text}) {
    const elem = document.createElement(tag);
    elem.classList = classList;
    for (let key in attrs) {
        elem.setAttribute(key, attrs[key]);
    }
    if (html) {elem.innerHTML = html}
    if (text) {elem.innerText = text}
    return elem;
}

function setLabelUp() {
    const elems = document.querySelectorAll('.label-up');
    elems.forEach(el => {
        const input = el.querySelector('input');
        input.setAttribute('placeholder', ' ');
    });
}

function serialize(form) {
	if (!form || form.nodeName !== "FORM") {
		return false;
	}
	var i, j, q = [];
	for (i = form.elements.length - 1; i >= 0; i = i - 1) {
		if (form.elements[i].name === "") {
			continue;
		}
		switch (form.elements[i].nodeName) {
			case 'INPUT':
				switch (form.elements[i].type) {
					case 'text':
					case 'tel':
					case 'email':
					case 'hidden':
					case 'password':
					case 'button':
					case 'reset':
					case 'submit':
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						break;
					case 'checkbox':
						writeCommaCheckbox(form, i, q);
						break;
					case 'radio':
						if (form.elements[i].checked) {
							q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						}
						break;
				}
				break;
			case 'file':
				break;
			case 'TEXTAREA':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'SELECT':
				switch (form.elements[i].type) {
					case 'select-one':
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						break;
					case 'select-multiple':
						for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
							if (form.elements[i].options[j].selected) {
								q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
							}
						}
						break;
				}
				break;
			case 'BUTTON':
				switch (form.elements[i].type) {
					case 'reset':
					case 'submit':
					case 'button':
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
						break;
				}
				break;
		}
	}
	return q.join("&");
}

function validateForm(form) {
	var regTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	var inputTel = form.querySelector('input[name="tel"]');
    var inputName = form.querySelector('input[name="name"]');
    return (!!inputTel.value.match(regTel) && inputName.value.length >= 2);
}

class Tabs {
    constructor({tabsSelector, tabSelector, onInit, withContent, initialTab}) {
        this.selector = tabsSelector || '.tabs';
        this.tabSelector = tabSelector || '.tabs__item';
        // this.tabsWrapperSelector = tabsWrapperSelector;
        this.tabs = document.querySelectorAll(this.selector + ' ' + this.tabSelector);
        this.inputs = document.querySelectorAll(this.selector + ' input');
        this.initialTab = initialTab || 0;
        this.contents = null;
        this.withContent = withContent || false;
        this.data = {
            activeIdx: null,
            activeValue: null
        };
        this.isInit = false;
        this.onInit = onInit ? onInit.bind(this) : function(){return false};
        this.setup();
    }
    resetTabs() {
        this.tabs.forEach(function(el) {
            el.classList.remove('active');
        });
    }
    _onInit() {
        if (this.onInit()) {
            this.onInit();
        }
    }
    setupContent() {
        if (this.withContent) {
            this.contents = document.querySelectorAll('[data-content-for-tab]');
        }
    }
    resetContents() {
        this.inputs.forEach(function(el) {
            const name = el.getAttribute('value');
            const content = document.querySelector('[data-content-for-tab="'+ name +'"]');
            content.classList.remove('active');
        });
    }
    setContent(name) {
        this.resetContents();
        const content = document.querySelector('[data-content-for-tab="'+ name +'"]');
        content.classList.add('active');
    }
    setup() {
        if (document.querySelector(this.selector) !== null) {
            this.inputs.forEach((el, idx) => {
                el.addEventListener('change', (e) => {
                    this.data = {activeIdx:idx, activeValue:el.value};
                    this.resetTabs();
                    this.tabs[idx].classList.add('active');
                    if (this.withContent) {
                        this.setContent(el.getAttribute('value'));
                    }
                });
            });
            this.tabs[this.initialTab].classList.add('active');
            this.inputs[this.initialTab].checked = true;
            if (this.withContent) {this.setContent(this.inputs[this.initialTab].getAttribute('value'))}
            this.isInit = true;
            this._onInit();
        }
    }
}

class MenuCatalog {
    constructor({menuSelector}) {
        this.menuSelector = menuSelector;
        this.menuRoot = document.querySelector(menuSelector);
        this.menuBtn = this.menuRoot.querySelector('a');
        this.setup();
    }
    setup() {
        if (this.menuRoot !== null) {
            const root = this.menuRoot;
            const btn = this.menuBtn;
            const selector = this.menuSelector;

            root.addEventListener('click', function(e) {
                e.preventDefault();
                if (e.target.closest('a') === btn) {
                    root.classList.contains('active') ?
                        root.classList.remove('active') :
                        root.classList.add('active');
                }

            });
            document.addEventListener('click', function(e) {
                if (e.target.closest(selector) !== root) {
                    root.classList.remove('active');
                }
            });
        }
    }
}

class ProductCards {
    constructor({cardSelector}) {
        this.cardSelector = cardSelector;
        this.cardElems = document.querySelectorAll(this.cardSelector);
        if (this.cardElems.length > 0) {
            this.setup();
        }
    }
    addToCartHandler() {

    }
    _setupSaleLabels() {
        this.cardElems.forEach(el => {
            if (el.classList.contains('sale')) {
                const label = getNewNode({
                    classList: 'product-card__sale-label',
                    attrs: {
                        'data-tooltip': 'Товар со скидкой',
                        'data-side': 'right',
                    }
                });
                el.appendChild(label);
            }
        });
    }
    _setupAddBtnAction() {
        this.cardElems.forEach((el, idx) => {
            const addBtn = el.querySelector(this.cardSelector + '__add');
            addBtn.onclick = () => {el.classList.toggle('in-cart')};
        });
    }
    setup() {
        this._setupAddBtnAction();
        this._setupSaleLabels();
    }
}

class SearchField {
    constructor({formSelector}) {
        this.formSelector = formSelector;
        this.form = document.querySelector(formSelector);
        this.input = document.querySelector(formSelector + ' input');
        this.btn = document.querySelector(formSelector + ' button');
        this.isInit = false;
        this.state = null;
        this.inputPlaceholder = null;
        this.text = '';
        this.setup();
    }
    openForm() {
        this.form.classList.remove('close');
        this.form.classList.add('open');
    }
    closeForm() {
        this.form.classList.remove('open');
        this.form.classList.add('close');
    }
    btnHandler(e) {
        if (!this.text) {
            e.preventDefault();
            if (this.state === 'open') {
                this.state = 'close';
                this.closeForm();
            } else if (this.state === 'close') {
                this.state = 'open';
                this.openForm();
            }
        } else {
            alert('Имитация поиска товара по запросу: ' + this.text);
            this.form.submit();
        }
    }
    inputHandler(e) {
        this.text = e.target.value;
        // if (!this.text && e.key === 'Enter') {
        //     e.preventDefault();
        // } else if (this.text && e.key === 'Enter') {
        //     alert('Имитация поиска товара по запросу: ' + this.text);
        // }
    }
    setup() {
        if (this.form && this.input && this.btn) {
            this.state = 'close';
            this.inputPlaceholder = this.input.getAttribute('placeholder');
            const btnHandler = this.btnHandler.bind(this);
            const inputHandler = this.inputHandler.bind(this);
            // const formHandler = this.formHandler.bind(this);
            this.btn.addEventListener('click', function(e) {btnHandler(e)});
            this.input.addEventListener('input', function(e) {inputHandler(e)});
            this.form.addEventListener('submit', (e) => {
                if (!this.text) {
                    e.preventDefault();
                } else {
                    alert('Имитация поиска товара по запросу: ' + this.text);
                }
            });

            this.isInit = true;
        } else {
            console.error('SearchField not inited. Some of elements not found');
        }
    }
}

class Filter {
    constructor(selector, {classnames}) {
        this.selector = selector;
        this.el = document.querySelector(this.selector);
        this.cn = classnames;
        if (this.el) {
            this.titles = this.el.querySelectorAll(this.cn.titles);
            this.cats = this.el.querySelectorAll(this.cn.cats);
            this.catsNames = [];
            this.cats.forEach(cat => {this.catsNames.push(cat.getAttribute('data-filter-cat'))});
            // this.priceInputs = this.el.querySelectorAll('input[name^=price]');
            // this.widthInputs = this.el.querySelectorAll('input[name^=width]');
            // this.depthInputs = this.el.querySelectorAll('input[name^=depth]');
            this.btnsReset = this.el.querySelectorAll('button[name=reset]');
        }
        if (this.el && nodeExist('.btn-up a[href="#' + this.el.getAttribute('id') + '"]')) {
            this.btnUp = document.querySelector('.btn-up');
        }
        this.btnUpIsShown = false;
        /* данные */
        this.brands = new Set();
        this.brands.reset = function() {this.clear()}
        /* ====== */

        if (this.el) {
            this.setup();
        }
    }
    checkClosestLi(child) {
        child.closest('li').classList.add('checked');
    }
    uncheckClosestLi(child) {
        child.closest('li').classList.remove('checked');
    }
    checkCollapsable(child) {
        const parent = child.closest('li.collapsable');
        if (!parent) return;
        const input = parent.querySelector('input[type="checkbox"]');
        if (!input.checked) {
            input.checked = true;
            parent.classList.add('checked');
        }
    }
    uncheckCollapsable(child) {
        const parent = child.closest('li.collapsable');
        if (!parent) return;
        const input = parent.querySelector('input[type="checkbox"]');

        const sublistInputs = parent.querySelectorAll('.filter__sublist input[type="checkbox"]');
        let checkedCount = 0;
        sublistInputs.forEach(inp => {
            if (inp.checked) checkedCount++;
        });
        if (checkedCount == 0) {
            input.checked = false;
            parent.classList.remove('checked');
        }
    }
    uncheckCurrentCollapsable(child) {
        const li = child.closest('li.collapsable');
        const isSublist = !!child.closest('.filter__sublist');
        if (!li || isSublist) return;
        const catName = li.closest('[data-filter-cat]').getAttribute('data-filter-cat');

        let checkedCount = 0;
        const innerInputs = li.querySelectorAll('.filter__sublist input[type="checkbox"]');
        innerInputs.forEach(inp => {
            if (inp.checked) checkedCount++;
        });
        if (checkedCount > 0) {
            innerInputs.forEach(inp => {
                if (inp.checked) {
                    inp.checked = false;
                    this.uncheckClosestLi(inp);
                    this[catName].delete(inp.value);
                }
            });
        }
    }
    checkCurrentCollapsable(child) {
        const li = child.closest('li.collapsable');
        const isSublist = !!child.closest('.filter__sublist');
        if (!li || isSublist) return;
        const catName = li.closest('[data-filter-cat]').getAttribute('data-filter-cat');
        this[catName].delete(child.value);

        const innerInputs = li.querySelectorAll('.filter__sublist input[type="checkbox"]');
        child.checked = true;
        this.checkClosestLi(child);
        innerInputs.forEach(inp => {
            inp.checked = true;
            this.checkClosestLi(inp);
            this[catName].add(inp.value);
        });
    }
    toggleBtnReset(cat, show) {
        const btn = cat.querySelector('button[name=reset]');
        show ? btn.classList.add('shown') : btn.classList.remove('shown');
    }
    _validateDecimal(nodes) {
        /* валидация нажатой кнопки на соответствие цифре или кнопке управления (напр. tab или стрелка) */
        const validCodes = [
            8,9,
            37,38,39,40,
            48,49,50,51,52,53,54,55,56,57,
            96,97,98,99,100,101,102,103,104,105
        ];
        nodes.forEach(el => {
            el.addEventListener('keydown', e => {
                if (!validCodes.includes(e.keyCode)) {
                    e.preventDefault();
                }
            });
        });
    }
    _setupRangeFields(catName) {
        /* сохранение введенных данных в массиве */
        this[catName] = [0, 0];
        this[catName].reset = function() {
            this[0] = 0;
            this[1] = 0;
        };
        const inputs = this.el.querySelectorAll('input[name^=' + catName + ']');
        
        inputs.forEach(input => {
            input.addEventListener('input', e => {
                const t = e.target;
                if (parseInt(t.value) === 0) {t.value = '0'}
                const name = t.getAttribute('name');
                switch (name) {
                    case (catName + '-from'):
                        this[catName][0] = +t.value;
                        break;
                    case (catName + '-to'):
                        this[catName][1] = +t.value;
                        break;
                    default:
                        break;
                }
                const willShowBtn = (this[catName][0] || this[catName][1]);
                this.toggleBtnReset(input.closest('.filter__cat'), willShowBtn);
            });
        });
    }
    _setupTitles() {
        this.titles.forEach((el, idx) => {
            el.addEventListener('click', e => {
                if (e.target === el || e.target === el.querySelector('span')) {
                    this.cats[idx].classList.toggle('hidden');
                }
            });
        });
    }
    _setupListTitles() {
        const listItems = this.el.querySelectorAll('.filter__list > li');
        listItems.forEach(li => {
            if (li.querySelector('.filter__sublist')) {
                const arrow = document.createElement('div');
                arrow.classList.add('filter__list-arrow');
                li.classList.add('collapsable');
                li.append(arrow);
            }
        });
        const arrows = this.el.querySelectorAll('.filter__list-arrow');
        arrows.forEach(ar => {
            ar.addEventListener('click', e => {
                ar.closest('li.collapsable').querySelector('.filter__sublist').classList.toggle('hidden');
            });
        });
    }
    resetInputs(inputs) {
        inputs.forEach(input => {
            const type = input.getAttribute('type');
            switch (type) {
                case 'text':
                case 'number':
                case 'search':
                    input.value = '';
                    break;
                case 'checkbox':
                case 'radio':
                    if (input.getAttribute('name') === 'brands') {
                        this.deleteAllBrands();
                    } else {
                        input.checked = false;
                    }
                    this.uncheckClosestLi(input);
                    this.showClosestLi(input);
                default:
                    break;
            }
        });
    }
    _setupBtnsReset() {
        this.btnsReset.forEach(btn => {
            btn.addEventListener('click', e => {
                const catName = e.target.getAttribute('value');
                let inputs;
                e.preventDefault();
                if (catName === 'all') {
                    inputs = this.el.querySelectorAll('input');
                    this.cats.forEach(cat => {
                        const name = cat.getAttribute('data-filter-cat');
                        this[name].reset();
                        this.toggleBtnReset(cat, false);
                    });
                } else {
                    inputs = this.el.querySelectorAll('.filter__cat[data-filter-cat=' + catName + '] input');
                    this[catName].reset();
                    this.toggleBtnReset(btn.closest('.filter__cat'), false);
                }
                this.resetInputs(inputs);
            });
        });
    }
    _setupOtherCats() {
        this.cats.forEach(cat => {
            const catName = cat.getAttribute('data-filter-cat');
            if (this[catName]) return;

            this[catName] = new Set();
            this[catName].reset = function() {this.clear()};
            
            const inputs = cat.querySelectorAll('input');
            if (inputs[0].getAttribute('type') === 'checkbox') {
                this._setupOtherInputsCb(inputs, catName);
            }
        });
    }
    _setupOtherInputsCb(inputs, catName) {
        inputs.forEach(input => {
            input.addEventListener('change', e => {
                if (input.checked) {
                    this[catName].add(input.value);
                    this.checkClosestLi(input);
                    this.checkCollapsable(input);
                    this.checkCurrentCollapsable(input);
                } else {
                    this[catName].delete(input.value);
                    this.uncheckClosestLi(input);
                    this.uncheckCollapsable(input);
                    this.uncheckCurrentCollapsable(input);
                }
                // input.checked ?
                //     this[catName].add(input.value) :
                //     this[catName].delete(input.value);
                const willShowBtn = this[catName].size > 0;
                this.toggleBtnReset(input.closest('.filter__cat'), willShowBtn);
            });
        });
    }
    showClosestLi(child) {
        child.closest('li').classList.remove('hidden');
    }
    hideClosestLi(child) {
        child.closest('li').classList.add('hidden');
    }
    _setupBrands() {
        const catElem = this.el.querySelector('[data-filter-cat=brands]');
        if (!catElem) return;
        const searchInput = catElem.querySelector('input[name=brand-search]');
        const checkboxes = catElem.querySelectorAll('input[type=checkbox]');
        // Поле поиска
        searchInput.addEventListener('input', e => {
            const t = e.target;
            const text = t.value;
            checkboxes.forEach(cb => {
                cb.getAttribute('value').toLowerCase().includes(text.toLowerCase()) ?
                    this.showClosestLi(cb) :
                    this.hideClosestLi(cb);
            });
        });

        // Обработка чекбоксов
        checkboxes.forEach(input => {
            input.addEventListener('change', e => {
                const val = input.getAttribute('value');
                if (input.checked) {
                    this.addBrand(val);
                    this.checkClosestLi(input);
                } else {
                    this.deleteBrand(val);
                    this.uncheckClosestLi(input);
                }
                // input.checked ? this.addBrand(val) : this.deleteBrand(val);
                const willShowBtn = this.brands.size > 0;
                this.toggleBtnReset(catElem, willShowBtn);

            });
        });
    }
    addBrand(val) {
        const tagsContainer = document.querySelector('.catalog__brand-tags');
        const tag = this._getBrandTag(val);
        tagsContainer.append(tag);
        this.brands.add(val);
    }
    deleteBrand(val) {
        const input = document.querySelector('[data-filter-cat=brands] input[value="' + val + '"]');
        const tag = document.querySelector('.catalog__brand-tag[data-brand="' + val + '"]');
        input.checked = false;
        this.uncheckClosestLi(input);
        tag.remove();
        this.brands.delete(val);
        if (this.brands.size === 0) {
            this.toggleBtnReset(input.closest('.filter__cat'), false);
        }
    }
    deleteAllBrands() {
        const brands = document.querySelectorAll('.catalog__brand-tag');
        brands.forEach(brand => {
            this.deleteBrand(brand.getAttribute('data-brand'));
        });
    }
    _getBrandTag(val) {
        const tag = getNewNode({
            classList: 'catalog__brand-tag',
            attrs: {'data-brand': val}
        });
        const btn = getNewNode({
            tag: 'button',
            classList: 'catalog__brand-delete',
            attrs: {'type': 'button'},
            html: '&#10006'
        });
        const span = getNewNode({
            tag: 'span',
            text: val,
        });
        tag.append(btn, span);
        btn.addEventListener('click', e => {
            this.deleteBrand(val);
        });
        return tag;
    }
    _showBtnUp() {
        this.btnUp.style.display = 'block';
        this.btnUp.classList.remove('hiding');
        this.btnUp.classList.add('showing');
        this.btnUpIsShown = true;
        clearTimeout(this.btnShowTimeout);
        this.btnShowTimeout = setTimeout(() => {
            this.btnUp.classList.remove('showing');
        }, 250);
    }
    _hideBtnUp() {
        this.btnUp.classList.remove('showing');
        this.btnUp.classList.add('hiding');
        this.btnUpIsShown = false;
        clearTimeout(this.btnShowTimeout);
        this.btnShowTimeout = setTimeout(() => {
            this.btnUp.style.display = '';
            this.btnUp.classList.remove('hiding');
        }, 250);
    }
    _setupBtnUp() {
        if (this.btnUp) {
            /* клик по кнопке "к фильтру" */
            const anchor = this.btnUp.querySelector('a[href="#filter"]');
            const path = anchor.getAttribute('href');
            anchor.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(path).scrollIntoView({block: "start", behavior: "smooth"});
            });
            /* плавное появление и скрытие кнопки "к фильтру" при скролле */
            const filterRect = this.el.getBoundingClientRect();
            const activePos = filterRect.bottom + pageYOffset;
            window.addEventListener('scroll', e => {
                if (pageYOffset >= activePos && !this.btnUpIsShown) {
                    this._showBtnUp();
                } else if (pageYOffset < activePos && this.btnUpIsShown) {
                    this._hideBtnUp();
                }
            });
        }
    }
    getData(set) {
        return Array.from(set);
    }
    getAllData() {
        const obj = {};
        this.catsNames.forEach(cat => {obj[cat] = this.getData(this[cat]);});
        return obj;
    }
    setup() {
        this._setupTitles();
        this._setupListTitles();
        this._setupRangeFields('price');
        this._setupRangeFields('width');
        this._setupRangeFields('depth');
        // this._setupPriceInputs();
        this._setupBrands();
        this._setupOtherCats();


        this._validateDecimal(this.el.querySelectorAll('input[name^=price]'));
        this._validateDecimal(this.el.querySelectorAll('input[name^=width]'));
        this._validateDecimal(this.el.querySelectorAll('input[name^=depth]'));
        this._setupBtnsReset();
        this._setupBtnUp();

        // this.checkBoxes.forEach(el => {
        //     el.addEventListener('change', e => {
        //         this.touch();
        //     });
        // });
        

    }
}

class Tooltips {
    constructor({offsetX, offsetY}) {
        this.elems = document.querySelectorAll('[data-tooltip]');
        this.offsetX = offsetX || 5;
        this.offsetY = offsetY || 15;
        if (this.elems.length > 0) {
            this.setup();
        }
    }
    getTooltip(parent) {
        const text = parent.getAttribute('data-tooltip');
        const side = parent.getAttribute('data-side');
        const tooltip = getNewNode({
            text: text,
            classList: 'tooltip',
        });
        if (side) {tooltip.classList.add('tooltip--' + side)}
        return tooltip;
    }
    getTooltipPosition(parent) {
        const rect = parent.getBoundingClientRect();
        const x = Math.round(rect.left);
        const y = Math.round(rect.top + window.scrollY + rect.height + this.offsetY);
        return {x, y};
    }
    setup() {
        this.elems.forEach(el => {
            let tooltip = this.getTooltip(el);
            el.addEventListener('mouseenter', e => {
                const {x, y} = {...this.getTooltipPosition(el)};
                tooltip.style.left = x + 'px';
                tooltip.style.top = y + 'px';
                document.body.appendChild(tooltip);
            });
            el.addEventListener('mouseleave', e => {
                document.body.removeChild(tooltip);
            });
        });
    }
}

class Modal {
    constructor(selector, {onFirstOpen, callSelector, withForm = false}) {
        this.selector = selector;
        this.el = document.querySelector(this.selector);
        if (this.el) {
            this.onFirstOpen = onFirstOpen || function(){};
            this.callSelector = callSelector || '.call-modal';
            this.triggers = document.querySelectorAll(this.callSelector + '[data-target="' + this.el.getAttribute('id') + '"]');
            this.closeBtn = this.el.querySelector('.modal__close');
            this.overlay = this.el.querySelector('.modal__overlay');
            this.opened = false;
            this.form = withForm ? this.el.querySelector('form') : null;
            this.setup();
            // console.log(this.form);
        }
    }
    showModal(disableAnimation = false) {
        if (disableAnimation) {
            this.el.classList.add('active');
        } else {
            this.el.classList.remove('hiding');
            this.el.classList.add('active');
            this.el.classList.add('showing');
            setTimeout(() => {
                this.el.classList.remove('showing');
            }, 250);
        }
        document.querySelector('.wrapper').classList.add('blured');
    }
    hideModal(disableAnimation = false) {
        if (disableAnimation) {
            this.el.classList.remove('active');
        } else {
            this.el.classList.remove('showing');
            this.el.classList.add('hiding');
            setTimeout(() => {
                this.el.classList.remove('active');
                this.el.classList.remove('hiding');
            }, 250);
        }
        document.querySelector('.wrapper').classList.remove('blured');
    }
    showingHandler() {
        this.el.classList.contains('active') ?
            this.hideModal() :
            this.showModal();
    }
    setup() {
        this.closeBtn.addEventListener('click', (e) => {
            this.hideModal();
        });
        this.overlay.addEventListener('mousedown', (e) => {
            if (e.target === this.overlay) {
                this.hideModal();
            }
        })
        this.triggers.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.showingHandler();
                if (!this.opened) {
                    this.onFirstOpen();
                    this.opened = true;
                }
            });
        });
    }
}

const modalCallMe = new Modal('#callMe', {
    callSelector: '.call-modal',
    withForm: true
});
const modalSignIn = new Modal('#signIn', {
    callSelector: '.call-modal',
    withForm: true
});

const catalogFilter = new Filter('#filter', {
    classnames: {
        cats: '.filter__cat',
        titles: '.filter__cat-title',
    }
});

setLabelUp();

const pagePath = window.location.pathname;
markActivePage();
if (pagePath === '' || pagePath === '/') {
    document.body.classList.add('index-page')
} else {
    for (let key in pageNames) {
        const res = pagePath.match(pageNames[key]);
        if (res) {document.body.classList.add(res[0] + '-page')}
    }
}

const headerSearchField = new SearchField({
    formSelector: '.header .actions__search'
});

const productsTabs = new Tabs({
    tabsSelector: '.products__category-tabs',
    tabSelector: '.products__category-tab',
});
const productsGridTabs = new Tabs({
    tabsSelector: '.products__type-tabs',
    tabSelector: '.products__type-tab',
});

const productCardInfoTabs = new Tabs({
    tabsSelector: '.product__info-tabs',
    withContent: true,
    // contentBoxSelector: '.product__info-content-box'
});
const deliveryTabs = new Tabs({
    tabsSelector: '.delivery__info-tabs',
    withContent: true,
    // contentBoxSelector: '.product__info-content-box'
});

const headerCatalog = new MenuCatalog({
    menuSelector: '.header__menu'
});

const productCards = new ProductCards({
    cardSelector: '.product-card'
});

const tooltips = new Tooltips({});




if (nodeExist('.brands__slider.splide')) {
    const brandsSlider = new Splide('.brands__slider.splide', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        pagination: false
    }).mount();
}

if (nodeExist('.banner-slider.splide')) {
    const bannerSlider = new Splide('.banner-slider.splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        gap: 40,
        autoplay: true,
        interval: 3000,
        drag: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    }).mount();
}



if (nodeExist('.product__view-slider.splide')) {
    const productCardThumbs = new Splide( '.product__view-slider.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        height: 380,
        gap         : 8,
        cover       : false,
        isNavigation: true,
        pagination: false,
        focus       : 'center',
        direction: 'ttb',
    }).mount();
    const productCardPrimary = new Splide( '.product__view-img-wrapper', {
        type       : 'fade',
        pagination : false,
        arrows     : false,
        cover      : false,
        drag: false,
    });
    productCardPrimary.sync( productCardThumbs ).mount();
}
