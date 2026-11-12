# Set Default Font And Grey Image Placeholder

## Scope

This iteration makes two look-and-feel changes to the Keyboard Skills Viewer.

### Default font

Arial becomes the default font for the whole site. It is set once on the document body and inherited everywhere, including headings, the word lines, the completion message, and buttons (buttons already use `font: inherit`). A generic `sans-serif` fallback is included for machines without Arial. No web fonts are downloaded.

### Grey placeholder before the reward reveal

Currently the word image is rendered with `display: none` until the word is typed correctly, so nothing occupies the image area while the child is typing. This iteration introduces a grey placeholder box in that space:

- The grey box appears as soon as a word is displayed and is replaced by the real image when the word is completed.
- The placeholder uses a fixed 4:3 aspect ratio and the same width rules as the real image (full width on mobile, capped at 600 pixels on desktop), so it is visible on every screen size without collapsing.
- The placeholder is purely presentational and adds no text, so it does not interfere with the typing, `next`, completion message, or `restart` behaviour.

Existing behaviour is unchanged: letters must be typed in order, comparison is case-insensitive, correct keys highlight both case lines, completing a word reveals its image, and the `next`, completion message, and `restart` states continue to work as before.

Out of scope for this iteration: other typography changes, choosing an image-specific aspect ratio per word, animation or fade transitions, a broken-image/error state for failed image URLs, and alt-text or accessibility changes beyond what already exists.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add a document-level default font in `assets/css/styles.css` by setting `font-family: Arial, Helvetica, sans-serif;` on `body`. Confirm the word lines, completion message, and buttons all render in Arial. Commit the stylesheet change.

### Step 2

Add the grey placeholder for the hidden image in `assets/css/styles.css`:

- Keep the existing `.word__image--hidden { display: none; }` rule so the real image is not shown early.
- Target the container while it holds a hidden image, e.g. `.word__image-container:has(.word__image--hidden)`, and give it a grey background (`#d1d5db`), a rounded corner matching the existing message styling, `aspect-ratio: 4 / 3`, and `width: min(100%, 600px)` so it respects the existing mobile/desktop sizing rules.
- When the word is completed the hidden class is removed, the container rule stops applying, and the real image takes over the same space.

If the target browsers do not support `:has()`, fall back to toggling a placeholder modifier class on `imageContainerElement` in `assets/js/main.js` when the word is rendered and when the image is revealed. Commit the stylesheet (or stylesheet plus JavaScript) change.

### Step 3

Verify manually with `npm run dev`:

- Text across the home screen, word screen, completion message, and buttons renders in Arial.
- Before typing, a grey 4:3 box occupies the image area; it does not collapse and stays within the existing width limits on desktop (600 pixels) and mobile (viewport width).
- Completing a word replaces the grey box with the real image, and the completion message still overlays it.
- `next`, completion, and `restart` flows still work, and no layout jump breaks the word or buttons.

Commit any fixes required.
