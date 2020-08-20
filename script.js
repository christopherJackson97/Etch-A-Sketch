const container = document.querySelector(".container");
const reset = document.getElementById("reset");
const resize = document.getElementById("size");
let canvasSize = 16;
createCanvas(canvasSize, canvasSize);

function createCanvas(rows, cols){
    erase();
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(let i=0; i < rows * cols; i++){
        let pixel = document.createElement("div");
        
        pixel.id = i + 1;
        pixel.addEventListener("mouseover", function() {
            let blue = getRandomNumber();
            let red = getRandomNumber();
            let green = getRandomNumber();
        
            const element = document.getElementById(pixel.id);
            element.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            
        });        
        container.appendChild(pixel).className = "pixel";
    }
}

function erase(){
    container.innerHTML = "";
}

function resetCanvas(){
    erase();
    createCanvas(canvasSize, canvasSize);
}
function resizeCanvas(){
    canvasSize = prompt("Please Enter The Size You Would Like.", "16");
    resetCanvas();
    createCanvas(canvasSize, canvasSize);
}




resize.addEventListener("mouseup", resizeCanvas);
reset.addEventListener("mouseup", resetCanvas);






function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}

