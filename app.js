//Calculate Tip
function tipCalculation() {

    //variables
    var billPrice = document.getElementById("billPrice").value;
    var tipAmount = document.getElementById("tipAmount").value;
    var people = document.getElementById("people").value;


    //Check to see if this input is empty or less than or equal to 1
    if (people === "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //invalid input message
    if (billPrice === "" || tipAmount == 0) {
        alert("Please enter the correct values!");
        return;
    }


    //tip calculation, ex, 100 * 0,10 / 2
    var total = (billPrice * tipAmount) / people;

    //after decimal point, displaying only 2 numbers
    total = total.toFixed(2);

    //tip display 
    document.getElementById("finalTip").style.display = "block";
    document.getElementById("tipDisplay").innerHTML = total;

}

//hiding total amount on load
document.getElementById("finalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//calling function on click
document.getElementById("calculate").onclick = function () {
    tipCalculation();

};
