const h1 = document.createElement("h1");
h1.innerText="Etch-a-Sketch";
document.body.appendChild(h1);

const section = document.createElement("section");
document.body.appendChild(section);

const btnContainer = document.createElement("div");
btnContainer.classList.add("button-container");
section.appendChild(btnContainer);

const container = document.createElement("div");
container.classList.add("container");