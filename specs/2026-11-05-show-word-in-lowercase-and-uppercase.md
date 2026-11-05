# Show Word In Lowercase And Uppercase

## Scope

Building on the completion-page iteration, the viewer currently displays each word once
as a heading, with each character highlighted in order as it is typed correctly.

This iteration displays every word twice, stacked: the lowercase form on top and the
uppercase form directly below (for example `ball` above `BALL`). Letters are derived
from the source word with `toLowerCase()` and `toUpperCase()` so mixed-case data still
renders consistently.

Typing rules are unchanged: letters must be typed in order, comparison is
case-insensitive, and incorrect keys are ignored. Each correct key highlights the
matching letter position in both the lowercase and uppercase lines at the same time.
Completing a word reveals the image and shows the `next` link (or the completion state
for the final word) exactly as before. The `restart` behaviour is unchanged.

Out of scope for this iteration: title case (`Ball`), typing or tracking the two cases
separately, different highlight colours per case, animations, and sound.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add styles to `assets/css/styles.css` for a block-level `.word__line` so the lowercase
line appears above the uppercase line, with a small vertical gap. Keep the existing
`.word__letter` and `.word__letter--typed` styles unchanged. Commit the stylesheet
change.

### Step 2

Refactor `renderWord` in `assets/js/main.js` to render two `.word__line` elements inside
the existing `.word` heading: a lowercase line built from each character's
`toLowerCase()` value and an uppercase line built from `toUpperCase()`. Replace the
`letters` array with `letterPairs`, an array of `{ lower, upper }` span references.
Optionally set `aria-hidden="true"` on the uppercase line to avoid duplicate
screen-reader output. Commit the change.

### Step 3

Update the `keydown` handler so a correct key adds `word__letter--typed` to both the
`lower` and `upper` spans for `nextIndex` before advancing. Leave completion, image
reveal, `next`, completion message, and `restart` logic untouched. Commit the change.

### Step 4

Verify manually with `npm run dev`: type `ball` and confirm every letter highlights in
order in both lines, that out-of-order and incorrectly cased keys are ignored, and that
the image reveal, `next`, final `elephant` completion state, and `restart` still work.
Commit any fixes required.
