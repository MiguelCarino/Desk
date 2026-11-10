// The case sheet preview's file (node --test tests/*.test.mjs): the options
// keep Copy Markdown and the .txt log, the foot is Print then one primary
// Download (PDF | HTML, carino-pdf.js), and every new string is in es, pt-BR,
// ja and ru. Desk has no other automated tests: check the rest by hand.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const ROOT = new URL('..', import.meta.url);
const read = (rel) => readFileSync(new URL(rel, ROOT), 'utf8');
const html = read('index.html');

const side = (() => {
  const at = html.indexOf('<aside class="rpv-side">', html.indexOf('id="sheet-modal"'));
  return html.slice(at, html.indexOf('</aside>', at));
})();

test('markup: secondary outputs in the options, Print then Download at the foot', () => {
  const opts = side.slice(side.indexOf('<div class="rpv-opts">'), side.indexOf('id="sheet-name"'));
  assert.match(opts, /id="sheet-include-notes"/);
  assert.match(opts, /<button type="button" class="btn" id="sheet-copy">Copy Markdown<\/button>/);
  assert.match(opts, /<button type="button" class="btn" id="sheet-txt">Download \.txt<\/button>/);
  const foot = side.slice(side.indexOf('<div class="rpv-actions">'));
  const buttons = [...foot.matchAll(/<button\b[^>]*>/g)].map((m) => m[0]);
  assert.equal(buttons.length, 2);
  assert.match(buttons[0], /class="btn" id="sheet-print"/);
  assert.match(buttons[1], /class="btn btn-primary" id="sheet-download" disabled/);
  assert.match(html, /<script src="carino-pdf\.js" defer><\/script>/);
});

test('script: the switch goes in above the name; Download saves the previewed sheet', () => {
  assert.match(html, /CarinoPdf\.formatSwitch\(\{ onChange: labelSheetFile \}\)/);
  assert.match(html, /insertBefore\(sheetFormat\.el, nameEl\)/);
  assert.match(html, /CarinoPdf\.download\(\{ html: sheetPv\.doc, name: sheetPv\.name, format: f,/);
  assert.match(html, /chromeT\("Creating the PDF…"\)/);
  assert.match(html, /getElementById\("sheet-txt"\)\.addEventListener\("click"/);
  // Ctrl+Enter still copies the Markdown
  assert.match(html, /isLayerOpen\("sheet-modal"\)\) return void document\.getElementById\("sheet-copy"\)\.click\(\)/);
});

test('i18n: every report-file string in es, pt-BR, ja and ru', () => {
  const src = read('i18n.js');
  const a = src.indexOf('const I18N = {');
  const block = src.slice(a, src.indexOf('\n};\n', a) + 3);
  const ctx = vm.createContext({});
  vm.runInContext(block + ';this.I = I18N;', ctx);
  const keys = ['File', 'PDF', 'HTML', 'Download PDF', 'Download HTML', 'Creating the PDF…',
    'Could not create the PDF.', 'Could not create the HTML file.'];
  for (const loc of ['es', 'pt-BR', 'ja', 'ru'])
    for (const k of keys) assert.ok(ctx.I[loc][k], loc + ': ' + k);
});
