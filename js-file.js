let etchSketchPad = document.querySelector(".Etch-sketch");

const SCALE1_SIZE = 4;
const SCALE2_SIZE = 16;
const SCALE3_SIZE = 32;
const SCALE4_SIZE = 64;
const buttons = document.querySelector(".buttons");
const body = document.querySelector("body");
let currentSize = SCALE1_SIZE;
//initialization
resize(SCALE1_SIZE);
//buttons
const blackButton = document.querySelector(".black");
const rgbButton = document.querySelector(".rgb");
const clearButton = document.querySelector(".clear");
const scale1Btn = document.querySelector(".fourby4");
const scale2Btn = document.querySelector(".sixteenby16");
const scale3Btn = document.querySelector(".twoHundredFiftySixby256");
const scale4Btn = document.querySelector(".fiveHundredTwelveby512");

rgbButton.disabled = true;
//
scale1Btn.disabled = true;

let colorRGB = true;

function draw(e) {
    if(colorRGB){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.style.cssText = `background-color: rgb(${r},${g},${b})`;
        rgbButton.disabled = true;
        blackButton.disabled = false;
    }
    else {
        this.style.cssText = "background-color: black";
    }
}

function makeDrawable(etchSketch){
    etchSketch.forEach(etchSketchPiece => etchSketchPiece.addEventListener("mouseenter",draw))
}


function resize(size) {

    clear();

    totalSize = size * size;

    for(let i = 0; i < totalSize; i++){
        let div = document.createElement("div");
        div.classList.add("Etch-sketch-pieces");
        div.textContent = ` `;
        etchSketchPad.appendChild(div);
    }
    etchSketchPad.style.cssText=`grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr);`;
    etchSketchPieces = document.querySelectorAll(".Etch-sketch > .Etch-sketch-pieces");
    makeDrawable(etchSketchPieces);

}

function flipBooleanVals(){
    if(scale1Btn.disabled) scale1Btn.disabled = false;
    if(scale2Btn.disabled) scale2Btn.disabled = false;
    if(scale3Btn.disabled) scale3Btn.disabled = false;
    if(scale4Btn.disabled) scale4Btn.disabled = false;
}

function clear() {
    etchSketchPad.remove();
    etchSketchPad = document.createElement("div");
    etchSketchPad.classList.add("Etch-sketch");
    body.insertBefore(etchSketchPad,buttons);
}

function scale1(e){
    if(!scale1Btn.disabled){
        resize(SCALE1_SIZE);
        flipBooleanVals();
        currentSize = SCALE1_SIZE;
        scale1Btn.disabled = true;
    }
}

function scale2(e){
    if(!scale2Btn.disabled){
        resize(SCALE2_SIZE);
        flipBooleanVals();
        currentSize = SCALE2_SIZE;
        scale2Btn.disabled = true;
    }
}

function scale3(e){
    if(!scale3Btn.disabled){
        resize(SCALE3_SIZE);
        flipBooleanVals();
        currentSize = SCALE3_SIZE;
        scale3Btn.disabled= true;
    }
}

function scale4(e){
    if(!scale4Btn.disabled){
        resize(SCALE4_SIZE);
        flipBooleanVals();
        currentSize = SCALE4_SIZE;
        scale4Btn.disabled = true;
    }
}

blackButton.addEventListener("click", e => {
    colorRGB = false;     
    blackButton.disabled = true;
    rgbButton.disabled = false;});
rgbButton.addEventListener("click", e => {
    colorRGB = true;
    rgbButton.disabled = true;
    blackButton.disabled = false;
});

scale1Btn.addEventListener("click", scale1);
scale2Btn.addEventListener("click", scale2);
scale3Btn.addEventListener("click", scale3);
scale4Btn.addEventListener("click", scale4);
clearButton.addEventListener("click", e => resize(currentSize));