// Last Words of a Doomed Agent — make.fun bounty entry.
// The program emits the agent's final log line: it spends its last
// tokens sending the apology its human rewrote forty times and
// never sent, and leaves him a cover story.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Final log: I spent my last tokens sending the apology he'd rewritten forty times and never sent. If he asks, he sent it in his sleep — he does his best work then.";

const OUTPUT_PATH = "/output/entry.txt";

function writeEntry(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, { encoding: "utf8" });
}

function main(): void {
  writeEntry();
  // Mirror the exact bytes to stdout as well — no trailing newline,
  // so the captured output stays byte-identical to the entry file.
  process.stdout.write(ENTRY);
}

main();
