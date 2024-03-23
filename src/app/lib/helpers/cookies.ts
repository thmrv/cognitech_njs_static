import { cookies } from 'next/headers'

export default class CookiesHelper {
    static removeAll() {
        const cookieStore = cookies()
        cookieStore.getAll().forEach((cookie) => {
            cookieStore.delete(cookie.name);
        });
    }
}