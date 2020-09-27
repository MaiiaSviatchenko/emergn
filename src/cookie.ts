const fetch = require("node-fetch");
import { Request, Headers} from "request";

export class Cookie {
    async setCookie(s1: string, s2: string, s3: string) {
        let params = [
            `foo1=${s1}`,
            `foo2=${s2}`,
            `foo3=${s3}`
        ].join('&');

        const request = new Request(`https://postman-echo.com/cookies/set?${params}`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            });
        const data = await fetch(request).then(response => response.json())
        const json = JSON.stringify(data)
        return json
    }

    async getCookie() {
        const request = new Request(`https://postman-echo.com/cookies`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            });

        const data = await fetch(request).then(response => response.json())
        const json = JSON.stringify(data)
        return json
    }

    async deleteCookie(s1: string) {
        let params = [
            `foo1=${s1}`
        ].join('&');

        const request = new Request(`https://postman-echo.com/cookies/delete?${params}`,
            {
                method: "GET",
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            });
        const data = await fetch(request).then(response => response.json())
        const json = JSON.stringify(data)
        return json
    }
}

//const example = new Cookie();

//example.setCookie('bar1', 'bar2', 'bar3').then((data) => {
//   alert(data.name);
//});
