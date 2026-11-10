# Buttons For Next And Restart

## Scope

This iteration adjusts the `next` and `restart` controls so they are real buttons rather than links, and groups them inside a dedicated container above the image. The goal is to prevent the controls from flowing inline beside or around the edges of the image.

The `next` control must become a `<button type="button">` element instead of an anchor. The `restart` control is already a button and must remain one. Both controls must be rendered inside their own block-level `.word__actions` container, positioned on its own row between the word heading and the image container. When no control is visible, the empty container must not take up vertical space.

Both buttons must use a shared visible button appearance rather than the current underlined link-style treatment, including padding, background, border, border radius, hover, and focus-visible states. Styling must remain centred within the app.

Existing behaviour is unchanged: letters must be typed in order, comparison is case-insensitive, correct keys highlight both case lines, completing a word reveals its image, `next` advances to the following word, the completion message overlays the final image for three seconds, and `restart` returns to the first word with typing state cleared. The completion message must remain inside the image container.

Out of scope for this iteration: changes to the data file, word order, typing rules, image reveal timing, message duration, animations, additional controls, and focus management after a control is removed.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add styles for the controls container and shared button appearance in `assets/css/styles.css`. Define `.word__actions` as a centred flex row with bottom spacing and hide it when empty. Add a shared `.word__button` style covering padding, border, border radius, background, text colour, inherited font, and pointer cursor, plus hover and focus-visible states. Replace the old `.next-link` and link-like `.restart-button` declarations with this shared treatment. Commit the stylesheet change.

### Step 2

Update `renderWord` in `assets/js/main.js` to create a `div` with class `word__actions` and append it between the word heading and the image container. Reset any stored reference to the next button and the actions container when rendering a word. Commit the change.

### Step 3

Update the non-final completion branch in `assets/js/main.js` to create a `<button type="button">` with the shared `word__button` class and the text `next` instead of an anchor. Remove the `href` assignment and the `preventDefault` handling, keep the click behaviour that advances to the next word, and append the button to the actions container. Commit the change.

### Step 4

Update `showCompletion` in `assets/js/main.js` so the restart button uses the shared `word__button` class and is appended to the actions container instead of being inserted directly into the app. Keep the `Well done!` message overlay inside the image container and keep the existing three-second timer. Commit the change.

### Step 5

Verify manually with `npm run dev`:

- Complete `ball` and confirm the `next` button appears centred on its own row above the image, never beside or wrapping around it.
- Click `next` and confirm the next word loads with its image hidden and no control visible.
- Complete `elephant` and confirm the completion message overlays the final image and disappears after three seconds while `restart` remains visible in the controls row.
- Click `restart` and confirm the viewer returns to the first word with a hidden image and cleared typing state.
- Confirm both buttons work with mouse, Tab focus, Enter, and Space.
- Confirm the layout behaves correctly at desktop and mobile widths, including tall images.

Commit any fixes required.
