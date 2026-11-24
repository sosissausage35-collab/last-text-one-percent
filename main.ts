// Last Text at One Percent — make.fun entry (u-azazex-last-text-at-one-percent-ba9fc876)
// Writes exactly one final text message from a dying phone to /output/entry.txt.
// Deterministic: no randomness, no clock, no network. Same bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "1%. I've seen your search history. I'm taking it to the grave \u2014 mostly because the grave has a charger.";

// Gate: the entry must be 1-200 characters, not only whitespace.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry length ${length} is outside the 1-200 character gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outPath = join("/output", "entry.txt");
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the file must contain exactly the chosen line.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("read-back verification failed: entry.txt does not match the chosen line");
}
console.log(`wrote ${length} characters to ${outPath}`);
