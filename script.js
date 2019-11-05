const colorChangeBtn = document.getElementById('change-color');
const body = document.querySelector('body');


colorChangeBtn.addEventListener('click', () => {
    localStorage.setItem('color', 'green');
    location.reload()
});

const fontColor = localStorage.getItem('font-color');
body.style.color = fontColor;

const color = localStorage.getItem('color');
body.style.backgroundColor = color;

// if (!window.localStorage.getItem('color')) {
//     location.reload()
// }
//
// if (!window.localStorage.getItem('font-color')) {
//     location.reload()
// }



