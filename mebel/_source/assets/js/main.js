// const playBtn = document.querySelector('.play-video');

// playBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     const parent = playBtn.parentElement;
//     const src = playBtn.getAttribute('href');
//     const iframe = document.createElement('iframe');
//     parent.removeChild(playBtn);
//     parent.appendChild(iframe);
//     iframe.setAttribute('src', src + '?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1');
//     iframe.setAttribute('frameborder', '0');
//     iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
//     iframe.setAttribute('allowfullscreen', null);
// });

var inputTel = document.getElementById('inputTel');
// var maskOptions = {
//   mask: '+{7}(000)000-00-00',
//   lazy: false
// };
// var mask = IMask(inputTel, maskOptions);

inputTel.addEventListener('mouseover', function () {
    mask = IMask(this, {
        mask: '+{7} (000) 000 00 00',
        overwrite: true,
        lazy: false,
        autofix: true
    });
});
inputTel.addEventListener('mouseleave', function () {
    if (mask.masked.unmaskedValue.length <= 1) {
        mask.masked.reset();
        this.value = '';
    }
});


function sendForm(form, onSuccess) {
    onSuccess = onSuccess || function(){};
    event.preventDefault();
    if (validateForm(form)) {
        var xhr = new XMLHttpRequest();
        var body = serialize(form);
        xhr.open('POST', './mail.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                form.reset();
                // showSuccessWindow();
                onSuccess();
                alert('Данные отправлены');
                // setTimeout(function() {
                //     window.location.href = '/thanks.html';
                // }, 1500);
            }
        };
        xhr.send(body);
    } else {
        alert('Введите корректные данные');
        // form.reset();
    }
}
function validateForm(form) {
	var regTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	var inputTel = form.querySelector('input[name="tel"]');
    var inputName = form.querySelector('input[name="name"]');
    if (inputTel.value.match(regTel) && inputName.value.length > 2) return true;
    else return false;
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