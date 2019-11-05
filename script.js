// function writeCookie (key, value, hours) {
//     var date = new Date();
//
//     // Get unix milliseconds at current time plus number of hours
//     date.setTime(+ date + (hours * 60 * 60 * 1000)); //60 * 60 * 1000
//
//     window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";
//
//     return value;
// }
//
// writeCookie ("myCookie", "12345", 0.001);

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match
}

console.log(getCookie('time'));

const btn = document.querySelector('button');
const modal = document.querySelector('.promotion');

btn.addEventListener('click', () => {
    document.cookie = "time=3600; max-age=3600";
    modal.style.display = 'none';
    location.reload()
});

// function setCookie(name,value,hours) {
//     var maxAge = "";
//     if (hours) {
//         var date = new Date();
//         date.setTime(date.getTime() + (hours*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }

if (getCookie('time')) {
    modal.style.display = 'none';
} else {
    modal.style.display = 'block';
}


