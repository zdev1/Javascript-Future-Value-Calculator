/*eslint-env browser*/

//GLOBAL VARIABLES
var monthlyRate;
var months;
var futureValue;
var monthlyInterest;
var i;
var investment;
var years;
var output;
var calculate;
var rate;

//GET DOM ELEMENTS
output      = window.document.getElementById("futurevalue");
calculate   = window.document.getElementById("calculate");

//CALCULATE THE FUTURE VALUE
function calculateInvestment(investment, rate, years) {
    "use strict";
    monthlyRate = rate /12 / 100;
    months      = years * 12;
    futureValue = investment;
    
    for (i = 1; i < months; i+= 1) {
        monthlyInterest = futureValue * monthlyRate;
        futureValue += monthlyInterest;
    }
    return futureValue;
}


//GET THE VALUES OF THE DOM ELEMENTS
calculate.addEventListener("click", function () {
    "use strict";
     investment  = parseFloat(window.document.getElementById("investment").value);
     rate        = parseFloat(window.document.getElementById("interest").value);
     years       = parseFloat(window.document.getElementById("years").value, 10);


    futureValue = calculateInvestment(investment, rate, years);
    output.innerHTML = "Future value: $" + Math.round(futureValue) + ".00";
    
});








