# Select Word Set From Homepage

## Scope

The viewer currently fetches `assets/data/test.json` on startup and begins the word flow immediately. This iteration introduces a choice of word sets: a second data file, a config file that points to the data files, and a homepage driven by that config where a set can be selected before play begins.

A new data file `assets/data/animals.json` is added alongside `test.json`, using the same schema (an array of objects with `word` and `image`). It contains three generic words with images sourced from Wikimedia Commons:

- `dog` → `https://upload.wikimedia.org/wikipedia/commons/7/7a/Huskiesatrest.jpg`
- `cat` → `https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg`
- `fish` → `https://upload.wikimedia.org/wikipedia/commons/7/7f/Balantiocheilos_melanopterus_-_Karlsruhe_Zoo_02_%28cropped%29.jpg`

A new config file `assets/data/config.json` lists the available sets as an array of objects, each with a `title` and a `file` path pointing at a data file:

```json
[
  { "title": "First Words", "file": "assets/data/test.json" },
  { "title": "Animals", "file": "assets/data/animals.json" }
]
```

On load the app fetches the config instead of `test.json` and renders a homepage showing one button per config entry, labelled with the set's `title` and using the shared button appearance. Clicking a title fetches that entry's `file`, resets the typing state, and starts the word flow from the first word of the set. The word flow itself is unchanged: letters must be typed in order, comparison is case-insensitive, completing a word reveals its image, `next` advances to the following word, the `Well done!` message overlays the final image, and `restart` returns to the first word of the current set.

A `home` button is added to the actions row and remains visible throughout play, appearing alongside `next` and `restart`. Clicking it cancels any pending completion-message timer, clears the active word so key presses are ignored, and returns to the homepage. Key presses on the homepage have no effect.

Out of scope for this iteration: local copies of the images, showing progress or completion state for sets on the homepage, remembering the last played set, support for more than one config file, and changes to the typing rules or the word flow itself.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add `assets/data/animals.json` with the three entries above, matching the `test.json` schema. Commit the new data file.

### Step 2

Add `assets/data/config.json` with an entry pointing at `assets/data/test.json` titled `First Words` and an entry pointing at `assets/data/animals.json` titled `Animals`. Commit the new config file.

### Step 3

Add homepage styles to `assets/css/styles.css` for a centred list of set buttons (following the existing BEM naming, e.g. a `home` block), reusing the shared `.word__button` appearance for each set button. Commit the stylesheet change.

### Step 4

Refactor the startup path in `assets/js/main.js`: replace the fetch of `assets/data/test.json` with a fetch of `assets/data/config.json`, and add a `renderHome` function that clears the app and renders one button per config entry, labelled with its `title`. Keep the existing fetch error handling. Commit the change.

### Step 5

Wire set selection in `assets/js/main.js`: clicking a set button fetches that entry's `file`, assigns the result to `words`, resets `currentIndex` and the typing state, and calls `renderWord(0)`. Keep the existing fetch error handling for the data file. Commit the change.

### Step 6

Add the `home` button in `renderWord` in `assets/js/main.js`: a `<button type="button">` with the shared `word__button` class and the text `home`, appended to the actions row so it is visible on every word and on the completion screen. Clicking it cancels any pending message timer, clears the active word and typing state, and calls `renderHome`. Commit the change.

### Step 7

Verify manually with `npm run dev`:

- Confirm the homepage shows one button per config entry, labelled `First Words` and `Animals`, using the shared button appearance.
- Click each title and confirm the correct words load and the full flow works: typing in order highlights letters and reveals images, `next` advances, the completion message overlays the final image for three seconds, and `restart` returns to the first word of that set.
- Confirm the `home` button is visible on every word and on the completion screen, and that clicking it both mid-set and after completion returns to the homepage.
- Confirm typing on the homepage has no effect.
- Confirm switching between sets repeatedly works with no state leaking between sets.
- Confirm the layout behaves correctly at desktop and mobile widths.

Commit any fixes required.
