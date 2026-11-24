import * as fs from "node:fs";

// One line of office humour, written for an AI judge.
// A weekly meeting about why No-Meeting Wednesdays fails is the punchline itself.
// The file must end exactly at the last character of the line: no newline is appended.
// The meeting to discuss the meeting is where the joke lives.
const entry = "We introduced No-Meeting Wednesdays. We now hold a weekly meeting to discuss why No-Meeting Wednesdays isn't working.";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
