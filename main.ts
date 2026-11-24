import { mkdirSync, writeFileSync } from "node:fs";

// One line about office life.
// A meeting to discuss why No-Meeting Wednesdays isn't working is the punchline writing itself.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character.
const line = "We introduced No-Meeting Wednesdays. We now hold a weekly meeting to discuss why No-Meeting Wednesdays isn't working.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
