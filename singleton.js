
class singleTon {
    constructor() {
        if (typeof singleTon.instance === 'object') {
            return singleTon.instance
        }

        singleTon.instance = this;
        return this;

    }

    cookies = {};

    getCookieName(name) {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    // getAndWriteCookies(name) {
    //     if (this.cookies[name]) {
    //         return this.cookies[name]
    //     }
    //         const cookieName = this.getCookieName(name);
    //         console.log(cookieName)
    //         return this.cookies[cookieName];
    // }
    setCookie(name, value, props) {
        props = props || {}

        var exp = props.expires

        if (typeof exp == "number" && exp) {

            var d = new Date()

            d.setTime(d.getTime() + exp * 1000)

            exp = props.expires = d

        }

        if (exp && exp.toUTCString) {
            props.expires = exp.toUTCString()
        }

        value = encodeURIComponent(value)

        var updatedCookie = name + "=" + value

        for (var propName in props) {

            updatedCookie += "; " + propName

            var propValue = props[propName]

            if (propValue !== true) {
                updatedCookie += "=" + propValue
            }
        }
        this.cookies[name] = value;
        document.cookie = updatedCookie

    }


    deleteCookie(name) {
        this.setCookie(name, null, {expires: -1})
    }
}


export default singleTon