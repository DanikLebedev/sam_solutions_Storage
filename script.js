const colorChangeBtn = document.getElementById('change-color');
const title = document.querySelector('h1');

colorChangeBtn.addEventListener('click', () => {
    localStorage.setItem('color','green');
    title.style.backgroundColor = `${localStorage.color}`;
});
