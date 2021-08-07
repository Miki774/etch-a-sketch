const grid = document.querySelector('.grid');
const container = document.querySelector('.container');
let columns, rows, n=16;
const resetbtn = document.querySelector('.reset');
const blackbtn = document.querySelector('.black');
const colors = document.querySelector('.colors');
const rainbow = document.querySelector('.rainbow');
const gridSize = document.querySelector('.gridSize');
const eraser = document.querySelector('.eraser');
let color = 'darkcyan'

function createGrid(n){
    let squareWidth = grid.clientWidth / n + 'px';
    let squareHeight = grid.clientWidth / n + 'px';
    for(let i=0;i<n;i++){
        rows = document.createElement('div');
        rows.classList.add('rows');
        grid.appendChild(rows);
        for(let j=0;j<n;j++){
            columns = document.createElement('div');
            columns.classList.add('columns');
            const widthHeight = document.createAttribute('style');
            widthHeight.value = `width: ${squareWidth}; height: ${squareHeight};`; 
            columns.setAttributeNode(widthHeight);
            rows.appendChild(columns);
        }
    }
}

function rainbowColor(){
    let random = Math.floor(Math.random() * 7);
        if(random==1){
            color = 'red'
        }
        else if(random==2){
            color = 'orange'
        }
        else if(random==3){
            color = 'yellow'
        }
        else if(random==4){
            color = 'green'
        }
        else if(random==5){
            color = 'blue'
        }
        else if(random==6){
            color = 'indigo'
        }
        else if(random==7){
            color = 'violet'
        }
}


function reset(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    createGrid(n);
}

createGrid(n);

grid.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = color;
    grid.style.backgroundColor = 'white';
})

colors.addEventListener('input', function(){
    grid.removeEventListener('mouseover', rainbowColor);
    color = colors.value;
})

resetbtn.addEventListener('click', reset);

gridSize.addEventListener('input', function(){
    n = gridSize.value;
    reset();
})

blackbtn.addEventListener('click', function(){
    grid.removeEventListener('mouseover', rainbowColor);
    color = 'black';
})

eraser.addEventListener('click', function(){
    grid.removeEventListener('mouseover', rainbowColor);
    color = 'white';
})

rainbow.addEventListener('click', function(){
    grid.addEventListener('mouseover', rainbowColor);
});

