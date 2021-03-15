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