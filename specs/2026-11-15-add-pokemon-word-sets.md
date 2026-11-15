# Add Pokémon Word Sets

## Scope

This iteration adds two new word sets to the Keyboard Skills Viewer, both themed around Pokémon, and makes them selectable from the home screen. It is a data-only change: no typing, navigation, completion, theming, or layout behaviour is modified.

### Item 1 — Pokémon beginners set

A new data file, `assets/data/pokemon.json`, containing exactly ten Pokémon whose names are five letters or fewer. Each entry follows the existing shape:

```json
{ "word": "name", "image": "https://..." }
```

The ten Pokémon are fixed as follows:

| Word | Letters | Image URL |
| --- | --- | --- |
| `mew` | 3 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png` |
| `abra` | 4 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png` |
| `onix` | 4 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png` |
| `eevee` | 5 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png` |
| `zubat` | 5 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png` |
| `ekans` | 5 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png` |
| `ditto` | 5 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png` |
| `pichu` | 5 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png` |
| `aipom` | 5 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png` |
| `lugia` | 5 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png` |

### Item 2 — Pokémon advanced set

A second new data file, `assets/data/pokemon-advanced.json`, containing exactly ten Pokémon whose names are six letters or longer, with no upper limit. It uses the same entry shape and image source. The ten Pokémon are fixed as follows:

| Word | Letters | Image URL |
| --- | --- | --- |
| `bulbasaur` | 9 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png` |
| `charmander` | 10 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png` |
| `squirtle` | 8 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png` |
| `butterfree` | 10 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png` |
| `pikachu` | 7 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png` |
| `gengar` | 6 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png` |
| `snorlax` | 7 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png` |
| `dragonite` | 9 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png` |
| `gyarados` | 8 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png` |
| `tyranitar` | 9 | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png` |

### Item 3 — Image source

All twenty images come from the PokeAPI sprites repository, served from `raw.githubusercontent.com` on the `master` branch:

`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{national-dex-number}.png`

These are transparent 475×475 PNGs of the official artwork, so they sit cleanly on the black theme. The URLs above were checked and each returns `200` with content type `image/png`. The national dex numbers in the paths match the Pokémon named in each row. No image is reused.

### Item 4 — Name requirements

Both files must work with the existing typing engine, so:

- Names contain only the letters A–Z. Names with spaces, hyphens, apostrophes, full stops, or accented characters (for example `Mr. Mime`, `Farfetch'd`, or `Nidoran♀`) are excluded, because the typing comparison relies on a plain sequence of single letters.
- All chosen names are at most ten letters, so each word fits the existing word lines without layout changes.
- Names are stored in lowercase, matching the existing data files. The site already renders lowercase and uppercase lines.
- No Pokémon and no image URL is repeated across the two new files.

### Item 5 — Config registration

`assets/data/config.json` is updated so both new sets appear on the home screen as selectable buttons, alongside the existing `First Words` and `Animals` sets. Both entries use the existing `title`/`file` shape and point at the new files. The existing entries keep their current titles, files, and order.

The titles are `Pokémon Beginners` and `Pokémon Advanced`. They appear verbatim as the button labels, so check they fit the home screen layout on a narrow viewport.

Out of scope for this iteration: changing the typing or completion logic, downloading images locally or introducing an asset pipeline, difficulty labels or progress tracking, changes to the logo or dark theme, attribution or credits UI for the artwork, and any reordering or renaming of the existing `First Words`, `Animals`, or `test.json` sets.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1

Create `assets/data/pokemon.json` with the ten beginners entries listed in Item 1, in that order, using the exact words and image URLs given. Keep words lowercase and letters A–Z only. Validate that the file parses as JSON, that it has ten entries, that every name is five letters or fewer, that no image is reused, and that each URL returns an image. Commit the new data file.

### Step 2

Create `assets/data/pokemon-advanced.json` with the ten advanced entries listed in Item 2, in that order, using the exact words and image URLs given. Validate that the file parses as JSON, that it has ten entries, that every name is at least six letters, that no image is reused, that no name or image repeats one from `pokemon.json`, and that each URL returns an image. Commit the new data file.

### Step 3

Update `assets/data/config.json` to register both new sets, appended after the existing `First Words` and `Animals` entries, using the `title`/`file` shape already in the file:

- `{ "title": "Pokémon Beginners", "file": "assets/data/pokemon.json" }`
- `{ "title": "Pokémon Advanced", "file": "assets/data/pokemon-advanced.json" }`

Confirm the existing entries are unchanged. Commit the config change.

### Step 4

Verify manually with `npm run dev`:

- `Pokémon Beginners` and `Pokémon Advanced` both appear as buttons on the home screen and do not overflow the layout on a narrow viewport.
- Selecting each set loads the correct ten words, in the order listed in the spec, with no console errors about failed fetches.
- Every word can be typed from start to finish, highlighting both case lines in purple, and every word reveals the correct Pokémon artwork.
- The `next`, `restart`, completion message, and `home` flows keep working, including ending on the completion state for the tenth word.
- Return to the home screen mid-set and confirm both Pokémon sets can be re-entered cleanly.

Commit any fixes required.
