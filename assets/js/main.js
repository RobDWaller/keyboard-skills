const app = document.getElementById("app");

fetch("assets/data/test.json")
  .then((response) => response.json())
  .then((data) => {
    const first = data[0];
    const word = document.createElement("h1");
    word.className = "word";

    const letters = first.word.split("").map((character, index) => {
      const letter = document.createElement("span");
      letter.className = "word__letter";
      letter.dataset.index = index;
      letter.textContent = character;
      word.append(letter);
      return letter;
    });

    const image = document.createElement("img");
    image.src = first.image;
    image.alt = first.word;
    image.className = "word__image word__image--hidden";
    app.append(word, image);

    let nextIndex = 0;

    document.addEventListener("keydown", (event) => {
      if (event.key.length !== 1) {
        return;
      }

      const expected = first.word[nextIndex];
      if (!expected) {
        return;
      }

      if (event.key.toLowerCase() === expected.toLowerCase()) {
        letters[nextIndex].classList.add("word__letter--typed");
        nextIndex += 1;

        if (nextIndex === first.word.length) {
          image.classList.remove("word__image--hidden");
        }
      }
    });
  })
  .catch((error) => {
    console.error("Failed to load data:", error);
  });
