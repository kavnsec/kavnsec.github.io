let counter = 0;
let forLoopResult = 0;
let revArray = [""];

function tickUp() {
    counter++;

    let counterDisplay = document.getElementById("counter");
    counterDisplay.textContent = counter;
}

function tickDown() {
    counter--;

    let counterDisplay = document.getElementById("counter");
    counterDisplay.textContent = counter;
}

function runForLoop() {    
    document.getElementById("forLoopResult").textContent = "";

    let forLoopResult = document.getElementById("forLoopResult");
    for(let i=0; i <= counter; i++) {
        forLoopResult.textContent += i;
        forLoopResult.textContent += " ";
    }
}

function showOddNumbers() {    
    document.getElementById("oddNumberResult").textContent = "";
    
    let oddNumberResult = document.getElementById("oddNumberResult");
    for(let i=0; i <= counter; i++) {
        if(i % 2 === 1) {
        oddNumberResult.textContent += i;
        }
        oddNumberResult.textContent += " ";
    }
}

function addMultiplesToArray() {
    let revArray = [];
    let i = counter;

    for(i; i % 5 != 0; i--);

    for(i; i > 0; i-=5){
        revArray.push(i);
    }

    console.log(revArray);
}

function Car(type, mpg, color) {
    this.cType = type;
    this.cMPG = mpg;
    this.cColor = color;
}

function printCarObject() {
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;

    const carObject = new Car(carType, carMPG, carColor);
    console.log(carObject);
}

function loadCar(carNum) {
    let car;
    switch (carNum) {
        case 1:
            car = carObject1;
            break;
        case 2:
            car = carObject2;
            break;
        case 3:
            car = carObject3;
            break;
        default:
            break;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNum) {

    let styleParagraph = document.getElementById("styleParagraph");

    switch (colorNum) {
        case 1:
            styleParagraph.style.color = "red";
            break;
        case 2:
            styleParagraph.style.color = "green";
            break;
        case 3:
            styleParagraph.style.color = "blue";
            break;
        default:
            break;
    }
}