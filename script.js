import singleTon from './singleton.js'

const inpSetName = document.querySelector('.setName');
const inpSetValue = document.querySelector('.setValue');
const inpGet = document.querySelector('.inpGet');
const inpDel = document.querySelector('.inpDelete')
const btnSetCookie = document.querySelector('.set')
const btnGetCookie = document.querySelector('.get')
const btnDeleteCookie = document.querySelector('.delete')
const wrapper = document.querySelector('.getCookie');

const myCookie = new singleTon();

btnSetCookie.addEventListener('click', () => {
    const name = inpSetName.value;
    const value = inpSetValue.value;

    if (name && value) {
        myCookie.setCookie(name,value)
    }
})

btnDeleteCookie.addEventListener('click', () => {
    const name = inpDel.value
    myCookie.deleteCookie(name);
})

btnGetCookie.addEventListener('click', () => {
    const name = inpGet.value
    const li = document.createElement('li');
    li.innerHTML = `name: ${name} , value: ${myCookie.getCookieName(name)}`;
    wrapper.appendChild(li);

})