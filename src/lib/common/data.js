import { changeAuthState } from "$lib/stores/auth.store";
import { SHEETS_API_METADATA } from "./constants";
import { getToken } from "./functions";

export async function getSheets() {
    const url = new URL(`${SHEETS_API_METADATA.sheetsAPIUrl}/${SHEETS_API_METADATA.spreadsheetId}`);
    url.searchParams.append('fields', 'spreadsheetId,sheets.properties(sheetId,title)')
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    if ([401, 403].includes(response.status)) {
        sessionStorage.clear();
        changeAuthState(false);
    }
    const data = await response.json();
    return data;
}