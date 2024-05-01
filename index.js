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

for (let i=0; i<6; i++){
    const btnArrays=["btn16", "btn8", "rainbow", "grey", "erase", "reset"];
    const objArrays = Object.assign({},btnArrays);
    const btnTextArrays=["Grid 16x16", "Grid 8x8", "Rainbow", "Grey", "Erase", "Reset"];
    btnArrays[i]= document.createElement("button");
    btnArrays[i].innerText=`"`+btnTextArrays[i]+`"`;
    btnArrays[i].setAttribute("id", objArrays[i]);
    btnContainer.appendChild(btnArrays[i])
    }