const app = document.getElementById("app");

fetch("assets/data/test.json")
  .then((response) => response.json())
  .then((data) => {
    const first = data[0];
    const word = document.createElement("h1");
    word.textContent = first.word;
    const image = document.createElement("img");
    image.src = first.image;
    image.alt = first.word;
    app.append(word, image);
  })
  .catch((error) => {
    console.error("Failed to load data:", error);
  });
