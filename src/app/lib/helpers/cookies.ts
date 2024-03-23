'use client';

import { useCookies } from 'next-client-cookies';

//clientside

export default class CookiesHelper {
    static getAllClient() {
        return document.cookie.split(";").reduce( (ac, cv, i) => Object.assign(ac, {[cv.split('=')[0].trim()]: cv.split('=')[1]}), {});
    }
    static removeAllClient() {
        const cookieClientStore = useCookies();
        const cookieClientList = this.getAllClient();
        Object.entries(cookieClientList).forEach((cookie) => {
            cookieClientStore.remove(cookie[0]);
        });
    }
}