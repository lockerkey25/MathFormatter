/**
 * Math Formatter - Google Docs Add-on
 *
 * How Apps Script add-ons work:
 * - onOpen() runs when the document loads, adding our menu
 * - showSidebar() opens an HTML panel on the right side of the doc
 * - insertEquation() is called FROM the sidebar (via google.script.run)
 *   to place the rendered equation into the document
 */

function onOpen() {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem('Open Editor', 'showSidebar')
    .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

/**
 * Opens the MathQuill editor sidebar.
 * HtmlService.createHtmlOutputFromFile() loads our Sidebar.html file
 * and serves it in a 300px-wide panel inside Google Docs.
 */
function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Math Formatter');
  DocumentApp.getUi().showSidebar(html);
}

/**
 * Inserts a rendered equation into the document at the cursor.
 *
 * Google Docs has NO native LaTeX rendering, so we use:
 * Render via the public CodeCogs API which returns a PNG for any LaTeX string.
 *
 * @param {string} latex - The LaTeX string from MathQuill
 */
function insertEquation(latex) {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();

  if (!cursor) {
    DocumentApp.getUi().alert('Place your cursor in the document first.');
    return;
  }

  // CodeCogs renders LaTeX to PNG via URL
  var encodedLatex = encodeURIComponent('\\dpi{150} \\large ' + latex);
  var imageUrl = 'https://latex.codecogs.com/png.latex?' + encodedLatex;

  try {
    var response = UrlFetchApp.fetch(imageUrl);
    var blob = response.getBlob();
    var element = cursor.insertInlineImage(blob);

    // Set alt text for accessibility - screen readers will read the LaTeX source
    element.setAltDescription('LaTeX: ' + latex);
    element.setAltTitle('Equation');
  } catch (e) {
    DocumentApp.getUi().alert('Failed to render equation: ' + e.message);
  }
}

/**
 * Insert raw LaTeX text (useful for documents that will be
 * processed by a LaTeX pipeline later, e.g. Overleaf import).
 */
function insertLatexSource(latex) {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();

  if (!cursor) {
    DocumentApp.getUi().alert('Place your cursor in the document first.');
    return;
  }

  cursor.insertText('$' + latex + '$');
}
