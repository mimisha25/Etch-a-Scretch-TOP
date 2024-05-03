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

    function colorized(name){
        const array = [rainbow, grey, erase];
        for (let i=0; i<3; i++){
            function color(){
                const r= Math.floor(Math.random()*256);
                const g= Math.floor(Math.random()*256);
                const b= Math.floor(Math.random()*256);
                return `rgb(${r}, ${g}, ${b})`;}
        
            const clr = {0:color(), 1:"grey", 2:"white"};
            array[i].addEventListener("click", function(){
                name.addEventListener("mouseover",function(){
                    this.style.backgroundColor = clr[i];})})
        }}   

        btn16.addEventListener("click", function create16to16grid(){
            const divFor8grid = document.querySelectorAll("div");
            divFor8grid.forEach((cel8)=>cel8.classList.remove("cells8"));
            for (let i=0; i<256; i++){
            const cellsFor16grid = document.createElement("div");
            cellsFor16grid.classList.add("cells16");
            container.appendChild(cellsFor16grid);
            colorized(cellsFor16grid);
            } 
            section.appendChild(container);
        });
        
