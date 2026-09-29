# Highlight Typed Letters In Order

## Scope

Building on the previous iterations, the app loads `assets/data/test.json` and displays the first word and its image. This iteration introduces the typing mechanism: the displayed word is broken into individually addressable letters, and typing the expected letter highlights it in a different colour.

Letters must be typed in the correct order. A pointer tracks the index of the next expected character and only advances when that exact character is typed. Any key that does not match the expected character is ignored entirely: no highlight is applied, no progress is lost, and the word is not reset.

Comparison is case-insensitive, so a child is not penalised for the state of the Shift key or Caps Lock while they are still learning keyboard technique.

Out of scope for this iteration: detecting word completion, revealing or playing the image as a reward, advancing to the next word, and any error feedback such as a shake or sound. Each of these becomes a later spec.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Create `assets/css/styles.css` with a base `.word__letter` style and a `.word__letter--typed` modifier that applies the highlight colour.

### Step 2

Link `assets/css/styles.css` from `index.html`.

### Step 3

Update `main.js` to render the word as one `<span>` per character inside a word container, each span carrying its character index.

### Step 4

Add a `keydown` listener to `main.js` that lowercases the pressed key, ignores non-character keys, and compares it against the letter at the current expected index. On a match, apply the highlight class to that letter and advance the index.

### Step 5

Verify manually with `npm run dev`: type `ball` one letter at a time and confirm each letter highlights in order. Confirm that out-of-order keys, mis-cased keys and modifier keys leave the word unchanged.

### Step 6

Commit the stylesheet and JavaScript changes.
