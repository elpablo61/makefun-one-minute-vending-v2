// One Line, One Minute — The Vending Machine Pickup Line Contest
// u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// Writes a single vending-machine pickup line (1-200 chars, one line)
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The chocolate in coil three has been stuck since Tuesday, holding on for someone worth dropping for. You walked past. It fell.";

// Gate guard: the sealed scorer requires 1-200 chars, one line, non-blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`entry.txt: ${LINE.length} chars, 1 line`);
