# Advance To Next Word

> Ticket: [TBD](#)

## Scope

Building on the image reveal iteration, when a word is completed and the image appears, a "Next" link should appear just above the image. Clicking the "Next" link loads the next word and its image from `assets/data/test.json`.

The link text must be exactly `next` (lowercase). It should be inserted just above the image in the DOM. The existing typing behavior remains unchanged: letters must be typed in order, comparison is case-insensitive, incorrect keys are ignored. The image should remain hidden until the current word is completed. After advancing to the next word, the image must be hidden again and the link removed until the new word is completed.

Out of scope: wrapping behavior beyond advancing through the array, animations, error feedback, and handling end of array (if at last word, clicking next may wrap to start or do nothing; follow simple sequential advancement).

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add styles for the next link in `assets/css/styles.css` (e.g., `.next-link` with appropriate display/margin so it appears above the image). Commit the stylesheet change.

### Step 2

Refactor `assets/js/main.js` to support multiple words from `assets/data/test.json`. Track `currentIndex`, render the word/image for the current word, reset state between words, and manage letter tracking and image visibility per word. Commit the change.

### Step 3

On word completion, create and insert a link with text `next` just above the image. Add a click handler that loads the next word and image from the data file (increment index, re-render the next word with image hidden and no link shown). Commit the change.

### Step 4

Verify manually with `npm run dev`: complete the first word to see the image and "next" link above it; click "next" to load the second word (image hidden); complete it to see image and link again. Confirm typing behavior is unchanged. Commit any fixes required.
