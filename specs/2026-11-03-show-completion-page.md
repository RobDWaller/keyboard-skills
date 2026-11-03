# Show Completion Page

## Scope

Building on the advance-to-next-word iteration, the viewer currently cycles through `assets/data/test.json` using a `next` link that wraps from the last word back to the first. This iteration ends the sequence with a completion state instead of wrapping around.

When the final letter of the final word (`elephant`) is typed, the image is revealed as usual and a completion message overlays that image. The message reads exactly `Well done!` and stays visible for 3 seconds before it disappears, leaving the final image in place.

A restart button reading exactly `restart` (lowercase) appears at the same time as the completion message and remains after the message has disappeared. It is placed where the `next` link would normally appear, just above the image. Clicking it returns the viewer to the first word with the image hidden and all typing progress cleared, so the sequence can be played again.

All earlier words keep their existing behavior: completing a word reveals its image and shows the `next` link, which advances to the following word. The wrap-around from the last word to the first is removed. Typing rules are unchanged: letters must be typed in order, comparison is case-insensitive, and incorrect keys are ignored.

Out of scope for this iteration: scoring, confetti or other celebration animations, sound, persistence, automatic restarting, and a fade transition for the message.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add styles to `assets/css/styles.css` for a positioned image container (`.word__image-container` with `position: relative`), a completion message overlay (absolutely positioned over the image, centered, with a readable background), a hidden modifier for the message, and a restart button matching the existing `next` link treatment. Commit the stylesheet change.

### Step 2

Refactor `renderWord` in `assets/js/main.js` to append the image inside the `.word__image-container` wrapper. Keep the `next` link insertion just above the image so existing behavior is unchanged. Commit the change.

### Step 3

Update the `keydown` completion branch so that when the final word is completed and `currentIndex` is the last item, the viewer reveals the image and renders the `Well done!` message inside the image container plus the `restart` button above the image, instead of the `next` link. Start a 3-second timer that removes the message, leaving the restart button in place. Commit the change.

### Step 4

Add the restart button click handler. Clear any pending message timer, reset `currentIndex` to `0`, and call `renderWord(0)` so the first word is shown with its image hidden, no message and no restart button. Commit the change.

### Step 5

Verify manually with `npm run dev`: complete `ball` and `car` to confirm the `next` link still works, complete `elephant` to confirm the message overlays the final image and disappears after 3 seconds while `restart` remains, then click `restart` and confirm the viewer returns to a hidden `ball` image with typing state cleared. Commit any fixes required.
