// ─────────────────────────────────────────────────────────────────────────────
// Daily Life Tracker — Google Apps Script v2
// Deploy as Web App: Execute as Me, Access: Anyone
// ─────────────────────────────────────────────────────────────────────────────

const SHEET_NAMES = ['tasks', 'expenses', 'pap', 'streak'];

const HEADERS = {
  tasks:    ['id', 'title', 'status', 'date'],
  expenses: ['id', 'name', 'amount', 'date'],
  pap:      ['id', 'date', 'status', 'timestamp'],
  streak:   ['date', 'streak_count', 'pap_done'],
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

// ── GET handler (handles both reads AND writes via query params) ───────────────
function doGet(e) {
  const action    = e.parameter.action || 'read';
  const sheetName = e.parameter.sheet;

  if (!SHEET_NAMES.includes(sheetName)) {
    return jsonResponse({ error: 'Invalid sheet: ' + sheetName });
  }

  const sheet   = getSheet(sheetName);
  const headers = HEADERS[sheetName];

  // ── READ ──────────────────────────────────────────────────────────────────
  if (action === 'read') {
    const data = sheet.getDataRange().getValues();
    const rows = data.slice(1).filter(row => row[0]);
    const result = rows.map(row => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = row[i]; });
      return obj;
    });
    return jsonResponse(result);
  }

  // ── INSERT ────────────────────────────────────────────────────────────────
  if (action === 'insert') {
    try {
      const data = JSON.parse(e.parameter.data);
      const row  = headers.map(h => data[h] !== undefined ? data[h] : '');
      sheet.appendRow(row);
      return jsonResponse({ success: true });
    } catch (err) {
      return jsonResponse({ error: 'Insert failed: ' + err.message });
    }
  }

  // ── UPDATE ────────────────────────────────────────────────────────────────
  if (action === 'update') {
    try {
      const data    = JSON.parse(e.parameter.data);
      const allData = sheet.getDataRange().getValues();
      for (let i = 1; i < allData.length; i++) {
        if (String(allData[i][0]) === String(data.id)) {
          headers.forEach((h, idx) => {
            if (data[h] !== undefined) {
              sheet.getRange(i + 1, idx + 1).setValue(data[h]);
            }
          });
          return jsonResponse({ success: true });
        }
      }
      return jsonResponse({ error: 'Not found' });
    } catch (err) {
      return jsonResponse({ error: 'Update failed: ' + err.message });
    }
  }

  // ── DELETE ────────────────────────────────────────────────────────────────
  if (action === 'delete') {
    try {
      const data    = JSON.parse(e.parameter.data);
      const allData = sheet.getDataRange().getValues();
      for (let i = 1; i < allData.length; i++) {
        if (String(allData[i][0]) === String(data.id)) {
          sheet.deleteRow(i + 1);
          return jsonResponse({ success: true });
        }
      }
      return jsonResponse({ error: 'Not found' });
    } catch (err) {
      return jsonResponse({ error: 'Delete failed: ' + err.message });
    }
  }

  return jsonResponse({ error: 'Unknown action: ' + action });
}

// ── POST handler (kept for compatibility) ─────────────────────────────────────
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
      const row = headers.map(h => data[h] !== undefined ? data[h] : '');
      sheet.appendRow(row);
      return jsonResponse({ success: true });
    }

    if (action === 'update') {
      const allData = sheet.getDataRange().getValues();
      for (let i = 1; i < allData.length; i++) {
        if (String(allData[i][0]) === String(data.id)) {
          headers.forEach((h, idx) => {
            if (data[h] !== undefined) sheet.getRange(i + 1, idx + 1).setValue(data[h]);
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
