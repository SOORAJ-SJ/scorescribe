export function randomString() {
    return btoa(String.fromCharCode(...window.crypto.getRandomValues(new Uint8Array(16))));
}

/**
 * Parse jwt and return the payload as json
 * @param {string} jwt 
 * @returns {Record<string, any>} parsed payload
 */
export function parseJWT(jwt) {
    const [header, payload, sign] = jwt.split('.');
    return JSON.parse(atob(payload));
}

/**
 * function to get the user object
 * @returns user object or empty string
 */
export function getUser() {
    return JSON.parse(sessionStorage.getItem('user') || '');
}

/**
 * function to get the access token
 * @returns {string | null} access token
 */
export function getToken() {
    return sessionStorage.getItem('access_token');
}