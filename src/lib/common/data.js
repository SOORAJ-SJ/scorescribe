import { changeAuthState } from "$lib/stores/auth.store";
import { SHEETS_API_METADATA } from "./constants";
import { getToken } from "./functions";

/**
 * 
 * @param {Response} fetchResponse 
 */
async function _validateFetchResponse(fetchResponse) {
    if ([401, 403].includes(fetchResponse.status)) {
        sessionStorage.clear();
        changeAuthState(false);
    }
    const data = await fetchResponse.json();
    return data;
}

export async function _getSpreadsheetId() {
    const spreadsheetId = sessionStorage.getItem('spreadsheetId');
    console.log(spreadsheetId, 'sid')
    if (spreadsheetId) return spreadsheetId;
    const response = await fetch(
        'https://www.googleapis.com/drive/v3/files',
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }
    );
    /**
     * @type {DriveFileList}
     */
    const data = await _validateFetchResponse(response);
    const spreadsheet = data.files.find(file => file.mimeType == 'application/vnd.google-apps.spreadsheet');
    if (spreadsheet) {
        sessionStorage.setItem('spreadsheetId', spreadsheet.id);
        return spreadsheet.id;
    } else {
        throw new Error('no spreadsheet');
    }
}

export async function getSheets() {
    const spreadsheetId = await _getSpreadsheetId();
    const url = new URL(`${SHEETS_API_METADATA.sheetsAPIUrl}/${spreadsheetId}`);
    url.searchParams.append('fields', 'spreadsheetId,sheets.properties(sheetId,title)')
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return await _validateFetchResponse(response);
}

/**
 * 
 * @param {string} sheet 
 */
export async function getSheet(sheet) {
    const spreadsheetId = await _getSpreadsheetId();
    const url = new URL(`${SHEETS_API_METADATA.sheetsAPIUrl}/${spreadsheetId}`);
    url.searchParams.append('ranges', `${sheet}!A1:B`);
    url.searchParams.append('fields', `spreadsheetId,sheets.properties(sheetId,title,sheetType,gridProperties),sheets.data(rowData.values(formattedValue))`);
    url.searchParams.append('includeGridData', 'true');
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return await _validateFetchResponse(response);
}