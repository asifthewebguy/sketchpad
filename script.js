const container = document.getElementById("container");
const nav = document.getElementById("nav");
let ccolor = '#000000';
let gridelement = [];
const rainbow = ['#9400D3','#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00','#FF0000'];
// function to creat element by tagname and add a class
function createElement(tagname = 'div', classNames = null){
    let element = document.createElement(tagname);
    if (classNames != null){
        for(let i = 0; i < classNames.length; i++){
            element.classList.add(classNames[i]);
        }
    }
    return element;
}
// function to create grid with col and row
function createGrid(containerElement, rows, cloumns){
    for(let r = 0; r < rows; r++){
        crow = "row-"+r;
        for(let c = 0; c < cloumns; c++){
            ccol = "column-"+c;
            container.appendChild(createElement('div', ['gride', ccol, crow ]));
        }
    }
}

// set grid element background color
function geChangeColor(color){
    for (let e = 0; e < gridelement.length; e++) {
        if(typeof color == 'object'){
            gridelement[e].addEventListener('mouseenter', (event)=>{
                let rand = Math.floor(Math.random() * (color.length - 1))  + 1;
                gridelement[e].style.backgroundColor = color[rand];
            });
        }else{
            gridelement[e].addEventListener('mouseenter', (event)=>{
                gridelement[e].style.backgroundColor = color;
            });            
        }      
    }
}

function setColor(color){
   geChangeColor(color);
}
// button to create grid
const creatGridButton = createElement("button",['creategrid']);
creatGridButton.innerText = "Click Me to create grid";
creatGridButton.addEventListener('click', ()=>{
    let x = prompt('how many rows and columns do you want?','100');
    let y = x;
    if(x > 100){
        alert("100 is the higest Limit please use a lower number.");
    }else{
        createGrid(container, x, y);
        let gridtemplatecolumns = `repeat(${y}, minmax(calc(var(--width)/${y}), 1fr))`;
        container.style.gridTemplateColumns = gridtemplatecolumns;
        gridelement = document.getElementsByClassName("gride");
        container.removeChild(creatGridButton);
        setColor('#000000');
        // setColor(rainbow);
        nav.appendChild(rainbowColor);
        nav.appendChild(clearAllButton);
    }
});
container.appendChild(creatGridButton);

// create button to activate rainbow color
const rainbowColor = createElement("button", ['rainbowcolor']);
rainbowColor.innerText = "Rainbow";
rainbowColor.addEventListener('click',()=>{
    if(ccolor == 'rainbow'){
        setColor(rainbow);
        ccolor = '#000000';
        rainbowColor.innerText = 'back to previous color';
    }else{
        setColor(ccolor);
        rainbowColor.innerText = 'Rainbow';
        ccolor = 'rainbow';
    }
});

const clearAllButton = createElement("button", ['clearall']);
clearAllButton.innerText = "Clear Canvas!";
function clearAll(){
    for (let i = 0; i < gridelement.length; i++) {
        gridelement[i].style.backgroundColor = '';
    }
}
clearAllButton.addEventListener("click", ()=>{
    clearAll();
});