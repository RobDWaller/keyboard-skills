const app = document.getElementById("app");

let words = [];
let currentIndex = 0;
let letters = [];
let nextIndex = 0;
let currentWord = null;
let wordElement = null;
let imageContainerElement = null;
let imageElement = null;
let nextLinkElement = null;
let messageTimer = null;

const COMPLETION_MESSAGE = "Well done!";
const COMPLETION_MESSAGE_DURATION = 3000;

function renderWord(index) {
  // Clear previous elements
  app.innerHTML = "";

  letters = [];
  nextIndex = 0;
  nextLinkElement = null;
  imageContainerElement = null;

  currentWord = words[index];
  if (!currentWord) {
    return;
  }

  wordElement = document.createElement("h1");
  wordElement.className = "word";

  letters = currentWord.word.split("").map((character, letterIndex) => {
    const letter = document.createElement("span");
    letter.className = "word__letter";
    letter.dataset.index = letterIndex;
    letter.textContent = character;
    wordElement.append(letter);
    return letter;
  });

  imageElement = document.createElement("img");
  imageElement.src = currentWord.image;
  imageElement.alt = currentWord.word;
  imageElement.className = "word__image word__image--hidden";

  imageContainerElement = document.createElement("div");
  imageContainerElement.className = "word__image-container";
  imageContainerElement.append(imageElement);

  app.append(wordElement, imageContainerElement);
}

function showCompletion() {
  const message = document.createElement("p");
  message.className = "word__message";
  message.setAttribute("role", "status");
  message.textContent = COMPLETION_MESSAGE;
  imageContainerElement.append(message);

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.className = "restart-button";
  restartButton.textContent = "restart";
  app.insertBefore(restartButton, imageContainerElement);

  messageTimer = window.setTimeout(() => {
    message.remove();
    messageTimer = null;
  }, COMPLETION_MESSAGE_DURATION);
}

document.addEventListener("keydown", (event) => {
  if (event.key.length !== 1) {
    return;
  }

  if (!currentWord) {
    return;
  }

  const expected = currentWord.word[nextIndex];
  if (!expected) {
    return;
  }

  if (event.key.toLowerCase() === expected.toLowerCase()) {
    letters[nextIndex].classList.add("word__letter--typed");
    nextIndex += 1;

    if (nextIndex === currentWord.word.length) {
      // Reveal image
      if (imageElement) {
        imageElement.classList.remove("word__image--hidden");
      }

      // The last word ends the sequence with the completion state
      if (currentIndex === words.length - 1) {
        showCompletion();
        return;
      }

      // Show next link above image
      if (!nextLinkElement) {
        nextLinkElement = document.createElement("a");
        nextLinkElement.className = "next-link";
        nextLinkElement.textContent = "next";
        nextLinkElement.href = "#";
        nextLinkElement.addEventListener("click", (e) => {
          e.preventDefault();
          currentIndex = currentIndex + 1;
          renderWord(currentIndex);
        });
        // Insert just above the image
        app.insertBefore(nextLinkElement, imageContainerElement);
      }
    }
  }
});

fetch("assets/data/test.json")
  .then((response) => response.json())
  .then((data) => {
    words = data;
    currentIndex = 0;
    renderWord(currentIndex);
  })
  .catch((error) => {
    console.error("Failed to load data:", error);
  });
