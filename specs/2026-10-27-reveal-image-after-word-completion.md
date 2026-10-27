# Reveal Image After Word Completion

## Scope

Building on the typed-letter highlighting iteration, the app currently displays the word and its image immediately and highlights letters as they are typed. This iteration hides the image until the word has been completed.

The image is hidden by default when the page loads. The typing rules from the previous iteration remain unchanged: letters must be typed in order, comparison is case-insensitive, and incorrect keys are ignored. When the final expected character is typed, the image is revealed. Typing any character before that point must not reveal the image.

The image must also be constrained so it never renders wider than its container: `max-width: 100%` with `height: auto` preserves the aspect ratio and keeps it within the screen width.

Out of scope for this iteration: advancing to the next word, reveal animations, error feedback, and image loading states.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add a `.word__image` style to `assets/css/styles.css` with `max-width: 100%`, `height: auto`, and `display: block`, plus a `.word__image--hidden` modifier with `display: none`. Commit the stylesheet change.

### Step 2

Update `main.js` to apply the `word__image` class to the image and add the `word__image--hidden` modifier before it is appended to the page. Commit the change.

### Step 3

Update the `keydown` handler so that after a correct letter advances `nextIndex`, the hidden modifier is removed when `nextIndex` equals the word length. Commit the change.

### Step 4

Verify manually with `npm run dev`: confirm the image is hidden on load, stays hidden after incorrect or out-of-order keys, appears after typing `ball` completely, and remains within the viewport at a narrow width. Commit any fixes required.
