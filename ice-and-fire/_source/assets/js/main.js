function nodeExist(selector) {
    return document.querySelector(selector) !== null;
}

class Tabs {
    constructor({tabSelector, onInit, withContent, initialTab}) {
        this.selector = tabSelector;
        this.tabs = document.querySelectorAll(tabSelector);
        this.inputs = document.querySelectorAll(tabSelector + ' input');
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
        this.setup();
    }
    addToCartHandler() {

    }
    setup() {
        if (this.cardElems.length > 0) {
            this.cardElems.forEach((el, idx) => {
                const addBtn = el.querySelector(this.cardSelector + '__add');
                addBtn.onclick = () => {el.classList.toggle('in-cart')};
            });
        }
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




document.addEventListener('DOMContentLoaded', function() {
    const navMenuLinks = document.querySelectorAll('.nav-list .nav-list__item a');
    navMenuLinks.forEach(function(el) {
        if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
            el.closest('.nav-list__item').classList.add('current');
            // document.body.classList.add('index-page');  // FIXME !!!!!!!!!!!!REMOVE ON PROD!!!!!!!!!!!!!!! 
        } 
        if ((window.location.pathname === '' || window.location.pathname === '/' || window.location.pathname === '/index.html') && el.getAttribute('href').indexOf('index') > -1) {
            el.closest('.nav-list__item').classList.add('current');
            document.body.classList.add('index-page');  // FIXME !!!!!!!!!!!!REMOVE ON PROD!!!!!!!!!!!!!!! 
        } 
        if (window.location.pathname === '/catalog.html') {
            document.body.classList.add('catalog-page');  // FIXME !!!!!!!!!!!!REMOVE ON PROD!!!!!!!!!!!!!!! 
        }
    });

    const headerSearchField = new SearchField({
        formSelector: '.header .actions__search'
    });

    const productsTabs = new Tabs({
        tabSelector: '.products__category-tab',
    });
    const productsGridTabs = new Tabs({tabSelector: '.products__type-tab'});

    const productCardInfoTabs = new Tabs({
        tabSelector: '.product__info-tab',
        withContent: true,
        // contentBoxSelector: '.product__info-content-box'
    });
    
    const headerCatalog = new MenuCatalog({
        menuSelector: '.header__menu'
    });

    const productCards = new ProductCards({
        cardSelector: '.product-card'
    });
    
    if (nodeExist('.brands__slider.splide')) {
        const brandsSlider = new Splide('.brands__slider.splide', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            pagination: false
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
});
