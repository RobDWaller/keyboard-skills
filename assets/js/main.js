const app = document.getElementById("app");

let words = [];
let currentIndex = 0;
let letterPairs = [];
let nextIndex = 0;
let currentWord = null;
let wordElement = null;
let imageContainerElement = null;
let imageElement = null;
let actionsElement = null;
let nextButtonElement = null;
let messageTimer = null;

const COMPLETION_MESSAGE = "Well done!";
const COMPLETION_MESSAGE_DURATION = 3000;

function renderWord(index) {
  // Clear previous elements
  app.innerHTML = "";

  letterPairs = [];
  nextIndex = 0;
  actionsElement = null;
  nextButtonElement = null;
  imageContainerElement = null;

  currentWord = words[index];
  if (!currentWord) {
    return;
  }

  wordElement = document.createElement("h1");
  wordElement.className = "word";

  const lowerLine = document.createElement("span");
  lowerLine.className = "word__line word__line--lowercase";

  const upperLine = document.createElement("span");
  upperLine.className = "word__line word__line--uppercase";
  upperLine.setAttribute("aria-hidden", "true");

  letterPairs = currentWord.word.split("").map((character, letterIndex) => {
    const lowerLetter = document.createElement("span");
    lowerLetter.className = "word__letter";
    lowerLetter.dataset.index = letterIndex;
    lowerLetter.textContent = character.toLowerCase();
    lowerLine.append(lowerLetter);

    const upperLetter = document.createElement("span");
    upperLetter.className = "word__letter";
    upperLetter.dataset.index = letterIndex;
    upperLetter.textContent = character.toUpperCase();
    upperLine.append(upperLetter);

    return { lower: lowerLetter, upper: upperLetter };
  });

  wordElement.append(lowerLine, upperLine);

  imageElement = document.createElement("img");
  imageElement.src = currentWord.image;
  imageElement.alt = currentWord.word;
  imageElement.className = "word__image word__image--hidden";

  imageContainerElement = document.createElement("div");
  imageContainerElement.className = "word__image-container";
  imageContainerElement.append(imageElement);

  actionsElement = document.createElement("div");
  actionsElement.className = "word__actions";

  app.append(wordElement, actionsElement, imageContainerElement);
}

function restart() {
  if (messageTimer !== null) {
    window.clearTimeout(messageTimer);
    messageTimer = null;
  }

  currentIndex = 0;
  renderWord(currentIndex);
}

function showCompletion() {
  const message = document.createElement("p");
  message.className = "word__message";
  message.setAttribute("role", "status");
  message.textContent = COMPLETION_MESSAGE;
  imageContainerElement.append(message);

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.className = "word__button";
  restartButton.textContent = "restart";
  restartButton.addEventListener("click", restart);
  actionsElement.append(restartButton);

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
    const { lower, upper } = letterPairs[nextIndex];
    lower.classList.add("word__letter--typed");
    upper.classList.add("word__letter--typed");
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

      // Show next button above image
      if (!nextButtonElement) {
        nextButtonElement = document.createElement("button");
        nextButtonElement.type = "button";
        nextButtonElement.className = "word__button";
        nextButtonElement.textContent = "next";
        nextButtonElement.addEventListener("click", () => {
          currentIndex = currentIndex + 1;
          renderWord(currentIndex);
        });
        actionsElement.append(nextButtonElement);
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
