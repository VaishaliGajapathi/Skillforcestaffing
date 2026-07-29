/**
 * SkillForce Staffing — Lead Capture Endpoint
 * ------------------------------------------------------------------
 * 1. Create a Google Sheet (e.g. "SkillForce Leads").
 * 2. Extensions > Apps Script, paste this file, save.
 * 3. Deploy > New deployment > Web app
 *      Execute as:      Me
 *      Who has access:  Anyone
 * 4. Copy the /exec URL into the site's .env as VITE_GOOGLE_SHEETS_URL.
 * 5. (Optional) Set NOTIFY_EMAIL below to receive an email per lead.
 */

var SHEET_NAME = 'Leads';
var NOTIFY_EMAIL = 'skillforcestaffing@gmail.com'; // set to '' to disable email alerts

var HEADERS = [
  'Timestamp',
  'Lead Type',
  'Name',
  'Email',
  'Phone',
  'Company',
  'Job / Req',
  'Role',
  'Skills',
  'Experience',
  'Work Authorization',
  'Location',
  'Hiring Need',
  'Resume Link',
  'Message',
  'Source',
  'Page URL'
];

function doPost(e) {
  try {
    var params = (e && e.parameter) || {};
    var sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      params.leadType || '',
      params.name || '',
      params.email || '',
      params.phone || '',
      params.company || '',
      params.jobTitle || '',
      params.role || '',
      params.skills || '',
      params.experience || '',
      params.workAuth || '',
      params.location || '',
      params.hiringNeed || '',
      params.resumeLink || '',
      params.message || '',
      params.source || '',
      params.pageUrl || ''
    ]);

    notify_(params);

    return json_({ result: 'success' });
  } catch (err) {
    return json_({ result: 'error', message: String(err) });
  }
}

function doGet() {
  return json_({ status: 'SkillForce lead endpoint is live' });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#122040')
      .setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notify_(params) {
  if (!NOTIFY_EMAIL) return;

  var subject = 'New ' + (params.leadType || 'website') + ' lead: ' + (params.name || 'Unknown');
  var lines = Object.keys(params).map(function (key) {
    return key + ': ' + params[key];
  });

  MailApp.sendEmail(NOTIFY_EMAIL, subject, lines.join('\n'));
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
