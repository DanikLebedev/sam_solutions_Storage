const inpName = document.getElementById('inpName');
const inpPhone = document.getElementById('inpPhone');
const btnInsert = document.getElementById('btnInsert');
const output = document.querySelector('.output');

btnInsert.addEventListener('click', () => {
    const name = inpName.value;
    const phone = inpPhone.value;

    if (name && phone) {
        localStorage.setItem(name, phone);
        location.reload();
    }

})


for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const phone = localStorage.getItem(name);

    output.innerHTML += `Имя: ${name} , Телефон: ${phone} <br>`
}
