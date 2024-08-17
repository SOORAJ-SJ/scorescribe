import { writable } from "svelte/store";

export const isAuthenticated = writable(!!sessionStorage.getItem('user'));

/**
 * changes the auth state
 * @param {boolean} isLoggedIn 
 */
export function changeAuthState(isLoggedIn) {
    isAuthenticated.set(isLoggedIn);
}
