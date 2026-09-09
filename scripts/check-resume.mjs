#!/usr/bin/env node
/**
 * Fails if the published resume PDF contains a phone number.
 *
 * This deliberately shells out to a real text extractor. The PDF stores its
 * text in FlateDecode streams with subsetted font encodings, so searching the
 * raw file bytes — or naively inflating the streams — finds nothing at all and
 * would pass no matter what the document says.
 *
 * The number itself is never written here: it would then live in this file, in
 * a public repository, which is the exact thing being guarded against.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC_DIR = 'public';
const PHONE = /\d{3}\D{0,3}\d{3}\D{0,3}\d{4}/;

function extractText(pdf) {
  try {
    return execFileSync('pdftotext', [pdf, '-'], { encoding: 'utf8' });
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

if (!existsSync(PUBLIC_DIR)) {
  console.error(`${PUBLIC_DIR}/ not found`);
  process.exit(1);
}

const pdfs = readdirSync(PUBLIC_DIR).filter((f) => f.toLowerCase().endsWith('.pdf'));
if (pdfs.length === 0) {
  console.log('No PDFs in public/ — nothing to check.');
  process.exit(0);
}

let failed = false;
for (const name of pdfs) {
  const text = extractText(join(PUBLIC_DIR, name));

  if (text === null) {
    const msg = `pdftotext not found; cannot verify ${name}`;
    if (process.env.CI) {
      console.error(`FAIL  ${msg} (install poppler-utils)`);
      process.exit(1);
    }
    console.warn(`SKIP  ${msg} (install poppler-utils to run this locally)`);
    continue;
  }

  if (!text.trim()) {
    console.error(`FAIL  ${name}: no text extracted — the check cannot verify this file`);
    failed = true;
    continue;
  }

  const hit = text.match(PHONE);
  if (hit) {
    // Print only a masked form, so a CI log never becomes the leak.
    console.error(`FAIL  ${name}: contains a phone number (${hit[0].slice(0, 3)}…)`);
    failed = true;
  } else {
    console.log(`OK    ${name}: no phone number found`);
  }
}

process.exit(failed ? 1 : 0);
