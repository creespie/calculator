//pseudocode:
// create an array storing the current number and the old number as strings
//need a function related to all numbers on the calculator to add them on the current number
//a function related to operators to shift the current number to the older number and save the operator selected
//a function for the equal to complete the operation with the operator selected, return the result as the new number and delete the old number
//things to care about: the dot can be present once in every number, 
//using an operator while having one selected should execute the operation and store the result as the old number


let array =[0];
array[0] = "0";
let operator = "";


function addNumber(id){
    
if(array[0] === "0"){
    array[0] = id;
}else{
    array[0] += "" + id + ""; 
}
};

function add(){
    array[0] = Number(array[0]);
    array[1] = Number(array[1]);
    array[2] = array[0];
    array[0] = (array[1] + array[2]).toString();
    array.pop();
    array.pop();
    operator = "";
};

function subtract(){
    
    array[0] = Number(array[0]);
    array[2] = array[0];
    array[0] = (array[1] - array[2]).toString();
    array.pop();
    array.pop();
    operator = "";
};

function multiply(){
    
    array[0] = Number(array[0]);
    array[2] = array[0];
    array[0] = (array[2] * array[1]).toString();
    array.pop();
    array.pop();
    operator = "";
};

function stopThere(){
    alert("Stop right there criminal scum! That's illegal!");
};

function divide(){
    // if(array[0] == "0"){
    //     stopThere();
    //     operator = "";
    // }else{
    array[0] = Number(array[0]);
    array[2] = array[0];
    array[0] = (array[1] / array[2]).toString();
    array.pop();
    array.pop();
    operator = "";
};

function sign(){
    if((array[0].split("").includes("-"))){
        array[0] = array[0].slice(1);
    }else{
        array[0] = "-" + array[0];
        
    }; 
};

function deleteLast(){
    if(array[0] === "0"){return};
    if(array[0].length == 1){
        array[0] = "0";
    }else{
        array[0] = array[0].substring(0, array[0].length - 1);
    };
};

function eraser(){
    array[0] = "0";
    array[1] = "";
};

function addDot(){
    let tempArray = array[0].toString();
    if(tempArray.includes(".")){
        return
    }else{
    array[0] += "."};
};

function equal(){
    switch(operator){
    case "add":
        add();
        break;
    case "subtract": 
        subtract();
        break;
   case "divide":
        if(array[0] == "0"){
            stopThere();
            operator = "";
            break;
        }else{
        divide();
        break;}
    case "multiply":
        multiply();
        break;
    default:
        return;
    }  
   
};



//DOM manipulation
const zero = document.getElementById("0");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const operatorsAlpha = document.querySelectorAll(".operatorAlpha");
const dot = document.querySelector(".dot");

const oldNumber = document.querySelector(".oldNumber");
const newNumber = document.querySelector(".newNumber");
//decide the operator
function determiner(id){
    if(id === "add"){
        if(operator != ""){
            equal();
            array[1] = array[0];
            array[0] = "0";
            operator = "add";
        }else{
            if(array[1] == "" || array[1] == null){
                array[1] = array[0];
                array[0] = "0";
            };
            if(array[0] != "0"){
                array[1] = array[0];
                array[0] = "0";
            };
            operator = "add";
        };
        
        
    }else if(id === "subtract"){
        if(operator != ""){
            equal();
            array[1] = array[0];
            array[0] = "0";
            operator = "subtract";
        }else{
            if(array[1] == "" || array[1] == null){
                array[1] = array[0];
                array[0] = "0";
            };  
            if(array[0] != "0"){
                array[1] = array[0];
                array[0] = "0";
            };
            operator = "subtract";
        };
        
    }else if(id === "multiply"){
        if(operator != ""){
            equal();
            array[1] = array[0];
            array[0] = "0";
            operator = "multiply";
        }else{
            if(array[1] == "" || array[1] == null){
                array[1] = array[0];
                array[0] = "0";
            };  
            if(array[0] != "0"){
                array[1] = array[0];
                array[0] = "0";
            };
            operator = "multiply";
        };
    }else if(id === "divide"){
        if(operator != ""){
            equal();
            array[1] = array[0];
            array[0] = "0";
            operator = "divide";
        }else{
            if(array[1] == "" || array[1] == null){
                array[1] = array[0];
                array[0] = "0";
            };  
            if(array[0] != "0"){
                array[1] = array[0];
                array[0] = "0";
            };
            operator = "divide";
        };
    }else if(id === "equal"){
        equal();
        array[1] = array[0];
        array[0] = "0";
    }else if(id === "cancel"){
        deleteLast();
    }else if(id === "eraser"){
        eraser();
    }else if(id === "sign"){
        sign();
    }else if(id === "addDot"){
        addDot();
    }
    newNumber.textContent = array[0];
    oldNumber.textContent = array[1];
}
 
zero.addEventListener("click", () => {
    addNumber(0);
    
    newNumber.textContent = array[0];
});

numbers.forEach((number) => {
    number.addEventListener("click", () => {
      addNumber(number.id);
      
      newNumber.textContent = array[0];
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      determiner(operator.id);
    });
});

operatorsAlpha.forEach((operator) => {
    operator.addEventListener("click", () => {
      determiner(operator.id);
    });
});


dot.addEventListener("click", () => {
    determiner("addDot")
});

const numbersKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

function getKeyboardOperator() {
    document.addEventListener("keydown", e => {
        let keyName = e.key;
        if (numbersKeys.includes(keyName)) {
            addNumber(keyName)
            newNumber.textContent = array[0];
        }
    })
};

getKeyboardOperator();