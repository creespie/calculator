//pseudocode:
// create an array storing the current number and the old number as strings
//need a function related to all numbers on the calculator to add them on the current number
//a function related to operators to shift the current number to the older number and save the operator selected
//a function for the equal to complete the operation with the operator selected, return the result as the new number and delete the old number
//things to care about: the dot can be present once in every number, 
//using an operator while having one selected should execute the operation and store the result as the old number


let array =[0];
let operator = "";


function addNumber(id){
    array[0] = Number(array[0]);
if(array[0] == 0){
    array[0] = id;
}else{
    array[0] = array[0].toString();
    array[0] += "" + id + "";
    
}
};

function add(){
    if(operator === ""){return;
    }else if (operator === "add") {
        operator = "";
        add();
    } else if (operator === "subtract") {
        operator = "";
        subtract();
    } else if (operator === "divide") {
        operator = "";
        divide();
    } else if (operator === "multiply") {
        operator = "";
        multiply();
    };

    array[0] = Number(array[0]);
    array[2] = array[0];
    array[0] = array[2] + array[1];
    delete array[1];
    delete array[2];
    let operator = "";
};

function subtract(){
    if (operator === "add") {
        operator = "";
        add();
    } else if (operator === "subtract") {
        operator = "";
        subtract();
    } else if (operator === "divide") {
        operator = "";
        divide();
    } else if (operator === "multiply") {
        operator = "";
        multiply();
    };
    array[0] = Number(array[0]);
    array[2] = array[0];
    array[0] = array[1] - array[2];
    delete array[1];
    delete array[2];
    let operator = "";
};

function multiply(){
    if (operator === "add") {
        operator = "";
        add();
    } else if (operator === "subtract") {
        operator = "";
        subtract();
    } else if (operator === "divide") {
        operator = "";
        divide();
    } else if (operator === "multiply") {
        operator = "";
        multiply();
    };
    array[0] = Number(array[0]);
    array[2] = array[0];
    array[0] = array[2] * array[1];
    delete array[1];
    delete array[2];
    let operator = "";
};

function divide(){
    if (operator === "add") {
        operator = "";
        add();
    } else if (operator === "subtract") {
        operator = "";
        subtract();
    } else if (operator === "divide") {
        operator = "";
        divide();
    } else if (operator === "multiply") {
        operator = "";
        multiply();
    };
    array[0] = Number(array[0]);
    array[2] = array[0];
    array[0] = array[1] / array[2];
    delete array[1];
    delete array[2];
    let operator = "";
};

function sign(){
    array[0] = Number(array[0]);
    let tempNumber = array[0];
    if(tempNumber == 0){return};
    let tempArray = array[0].toString().split("");
    if((tempArray.includes("-"))){
        array[0] = array[0].toString().slice(1);
    }else{
        array[0] = array[0].toString();
        array[0] = "-" + array[0];
        
    }; 
};

function deleteLast(){
    array[0] = Number(array[0]);
    if(array[0] === 0){return};
    if(array[0].length == 1){
        array[0] = 0;
    }else{
        array[0] = array[0].toString();
        array[0] = array[0].substring(0, array[0].length - 1);
        
    };
};

function eraser(){
    array[0] = 0;
};

function addDot(){
    array[0] = array[0].toString();
    if(array[0].includes(".")){return};
    array[0] += ".";
};

function equal(){
    if (operator === "add") {
        operator = "";
        add();
    } else if (operator === "subtract") {
        operator = "";
        subtract();
    } else if (operator === "divide") {
        operator = "";
        divide();
    } else if (operator === "multiply") {
        operator = "";
        multiply();
    }
    
};

function operators(id){
    let operator = id;
    array[1] = array[0];
    array[0] = 0;
};

