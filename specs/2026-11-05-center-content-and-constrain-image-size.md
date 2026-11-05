# Center Content And Constrain Image Size

## Scope

This iteration makes look-and-feel changes only. All content is centred horizontally
within the app: the lowercase and uppercase word lines, the `next` link, the `restart`
button, and the word image.

On desktop, no image may exceed 600 pixels wide. On mobile, no image may exceed 600
pixels high. Images keep their aspect ratio when scaled and remain within the viewport
width.

Existing behaviour is unchanged: letters must be typed in order, comparison is
case-insensitive, correct keys highlight both case lines, completing a word reveals its
image, and the `next`, completion message, and `restart` states continue to work as
before.

Out of scope for this iteration: typography, colours, spacing beyond alignment,
animations, lightbox or zoom behaviour, portrait-specific desktop rules, and additional
breakpoints.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add centring styles in `assets/css/styles.css` using `#app { text-align: center; }` so
the heading, links, buttons, and the inline-block image container are centred
horizontally. Commit the stylesheet change.

### Step 2

Constrain image sizing in `assets/css/styles.css` with mobile-first media queries:

- Mobile (`max-width: 767px`): add `max-height: 600px` to `.word__image` alongside the
  existing `max-width: 100%` and `height: auto`.
- Desktop (`min-width: 768px`): set `.word__image` to `max-width: 600px`.

This keeps the width cap off mobile and the height cap off desktop. Commit the
stylesheet change.

### Step 3

Verify manually with `npm run dev` using responsive devtools:

- Desktop (e.g. 1280x800): word, link, and image are centred; a wide image stops at
  600 pixels wide.
- Mobile (e.g. 375x667): a tall image stops at 600 pixels high and stays within the
  screen width.
- Image aspect ratio is preserved, the completion message still overlays the image, and
  typing, `next`, and `restart` still work.

Commit any fixes required.
