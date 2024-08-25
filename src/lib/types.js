/**
 * @typedef rowValues
 * @property {string} formattedValue
 */

/**
 * @typedef rowData
 * @property {Array.<rowValues>} values
 */

/**
 * @typedef data
 * @property {Array.<rowData>} rowData
 */

/**
 * @typedef properties
 * @property {string} sheetId 
 * @property {string} title
 * 
 */

/**
 * @typedef property
 * @type {object}
 * @property {properties} properties
 * @property {Array.<data>} data
 * 
 */

/**
 * @typedef spreadsheet
 * @property {string} spreadsheetId 
 * @property {Array.<property>} sheets
 * @property {?any} error
 * 
 */

/**
 * @type {Record<string, any>}
 */

/**
 * @typedef userScore
 * @type {object}
 * @property {string} email
 * @property {number} score
 * @property {boolean} isMainPlayer
*/

/**
 * @typedef DriveFile
 * @property {string} kind
 * @property {string} mimeType
 * @property {string} id
 * @property {string} name
 * 
 */

/**
 * @typedef DriveFileList
 * @property {string} kind
 * @property {boolean} incompleteSearch
 * @property {Array.<DriveFile>} files
 */