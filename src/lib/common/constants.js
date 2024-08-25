export const AUTH_CONFIG = {
    baseURI: 'https://accounts.google.com/o/oauth2/v2/auth',
    redirectURI: window.location.origin + '/callback',
    clientId: '99224761062-lbikq49p1fjolctjc65etcallm1nu3pv.apps.googleusercontent.com',
    scope: 'openid profile email https://www.googleapis.com/auth/drive.file'
};

export const SHEETS_API_METADATA = {
    driveId: '119Tv4ENnbQM6uI-SQiRrdQ2HurMhmF8V',
    sheetsAPIUrl: 'https://sheets.googleapis.com/v4/spreadsheets'
}