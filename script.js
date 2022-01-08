// selecting the html tag
const container = document.getElementById("container");

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
// button to create 
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
        container.removeChild(creatGridButton);
    }
});
container.appendChild(creatGridButton);


