// ─────────────────────────────────────────────────────────────────────────────
// Daily Life Tracker — Google Apps Script
// Deploy as Web App: Execute as Me, Access: Anyone
// ─────────────────────────────────────────────────────────────────────────────

const SHEET_NAMES = ['tasks', 'expenses'];

// ── Headers for each sheet ───────────────────────────────────────────────────
const HEADERS = {
  tasks:    ['id', 'title', 'status', 'date'],
  expenses: ['id', 'name', 'amount', 'date'],
};

function getSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(HEADERS[name]);
  }
  return sheet;
}

// ── GET handler ───────────────────────────────────────────────────────────────
function doGet(e) {
  const sheetName = e.parameter.sheet;
  if (!SHEET_NAMES.includes(sheetName)) {
    return jsonResponse({ error: 'Invalid sheet' });
  }

  const sheet   = getSheet(sheetName);
  const headers = HEADERS[sheetName];
  const data    = sheet.getDataRange().getValues();
  const rows    = data.slice(1); // skip header row

  const result = rows
    .filter(row => row[0]) // skip empty rows
    .map(row => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = row[i]; });
      return obj;
    });

  return jsonResponse(result);
}

// ── POST handler ──────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    const payload    = JSON.parse(e.postData.contents);
    const { action, sheet: sheetName, data } = payload;

    if (!SHEET_NAMES.includes(sheetName)) {
      return jsonResponse({ error: 'Invalid sheet' });
    }

    const sheet   = getSheet(sheetName);
    const headers = HEADERS[sheetName];

    if (action === 'insert') {
      const row = headers.map(h => data[h] ?? '');
      sheet.appendRow(row);
      return jsonResponse({ success: true });
    }

    if (action === 'update') {
      const idCol = 1; // column A
      const allData = sheet.getDataRange().getValues();
      for (let i = 1; i < allData.length; i++) {
        if (String(allData[i][0]) === String(data.id)) {
          // Update each provided field
          headers.forEach((h, idx) => {
            if (data[h] !== undefined) {
              sheet.getRange(i + 1, idx + 1).setValue(data[h]);
            }
          });
          return jsonResponse({ success: true });
        }
      }
      return jsonResponse({ error: 'Not found' });
    }

    if (action === 'delete') {
      const allData = sheet.getDataRange().getValues();
      for (let i = 1; i < allData.length; i++) {
        if (String(allData[i][0]) === String(data.id)) {
          sheet.deleteRow(i + 1);
          return jsonResponse({ success: true });
        }
      }
      return jsonResponse({ error: 'Not found' });
    }

    return jsonResponse({ error: 'Unknown action' });
  } catch (err) {
    return jsonResponse({ error: err.message });
  }
}

function jsonResponse(data) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
