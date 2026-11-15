# Dark Theme And Logo

## Scope

This iteration changes the overall look and feel of the Keyboard Skills Viewer to a dark theme and adds the project logo to the top of the page. No typing, navigation, or completion behaviour changes.

### Item 1 — Black background, white text

The page background becomes black (`#000000`) and the default text colour becomes white (`#ffffff`). The colours are set once at document level and inherited by every screen: the home screen with its set buttons, the word screen with both the lowercase and uppercase word lines, the completion message, and the action buttons.

### Item 2 — Purple letter highlight

The highlight applied to letters as they are typed changes from green to purple, using the required hex code `#6849b7`. Both the lowercase and uppercase lines keep highlighting together and in order, exactly as they do now.

### Item 3 — Purple buttons

All buttons — the home screen set buttons, plus the `home`, `next`, and `restart` buttons — change from blue to the same purple `#6849b7`, including their border. Hover and keyboard focus states must remain visible and clearly distinct from the resting state, using a shade derived from `#6849b7` rather than the current blue. Button text stays white.

### Item 4 — Logo at the top of the page

The logo stored at `assets/img/keyboard_skills.jpeg` (referenced as `/assets/img/keyboard_skills.jpeg`) is added to the top of the page, above the main content, so it is present on both the home screen and the word screen. The logo has descriptive alternative text and:

- is never wider than 240 pixels;
- scales down to fit smaller viewports rather than overflowing;
- keeps its natural aspect ratio;
- does not push the word, image, message, or buttons off screen or cause horizontal scrolling.

The logo is presentational only and adds no interaction.

### Item 5 — Contrast and consistency checks

The existing grey image placeholder and the dark completion-message overlay were designed against a light page. They must remain clearly visible and readable against the black background. The completion message text stays legible, and the word, placeholder, and buttons keep their existing spacing and layout rules.

Out of scope for this iteration: typography changes, layout restructuring, animation or transition changes, adding a colour theme toggle, per-word or per-set theming, changes to the logo asset itself, and a full accessibility audit beyond the contrast checks above.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Add the logo to the top of the page in `index.html`, above the `#app` container, with descriptive alt text and a dedicated class or id. Style it in `assets/css/styles.css` with a maximum width of 240 pixels, automatic height, and a width that shrinks on narrow viewports without overflowing or scrolling. Confirm the logo appears on both the home screen and the word screen and that the existing content still fits underneath it. Commit the change.

### Step 2

Apply the dark theme base colours in `assets/css/styles.css`: black background and white default text at document level, ensuring headings, word lines, messages, and buttons all inherit the white text. Check no element still relies on default black text. Commit the change.

### Step 3

Change the typed-letter highlight colour from the current green to `#6849b7`, keeping the existing transition and the behaviour that both case lines highlight together. Confirm the highlight is clearly readable on black. Commit the change.

### Step 4

Change every button from blue to `#6849b7`, including border colour, and replace the blue hover and focus-visible styles with derived purple shades that stay visibly distinct from the resting state. Confirm the set buttons and the `home`, `next`, and `restart` buttons all use the new colour and remain clearly focused when tabbing. Commit the change.

### Step 5

Review the grey image placeholder and the dark completion-message overlay against the black background, and adjust only if they are no longer visible or readable. Then verify manually with `npm run dev`: the black background and white text hold across home, word, completion, and restart flows; typed letters highlight purple; all buttons are purple with visible hover and focus states; the logo sits at the top at no more than 240 pixels wide and shrinks correctly on a narrow viewport; and no layout or horizontal scrolling regressions appear. Commit any fixes required.
