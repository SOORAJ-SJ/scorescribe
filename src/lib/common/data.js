import { SHEETS_API_METADATA } from "./constants";

export async function getSheets() {
    const url = new URL(`${SHEETS_API_METADATA.sheetsAPIUrl}/${SHEETS_API_METADATA.spreadsheetId}`);
    url.searchParams.append('fields', 'spreadsheetId,sheets.properties(sheetId,title)')
    const response = await fetch(url);
    const data = await response.json();
    return data;
}