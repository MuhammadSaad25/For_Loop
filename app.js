
function printTable() {
    let number;
    let result = "";
    let number1;

    number = Number(document.getElementById("number").value);
    number1 = Number(document.getElementById("number1").value);
    for (let i = 1; i <= number1; i++) {

        result = (`${result}    <p>    ${number}   x   ${i}   =   ${number * i}    </p>`);
    }

    document.getElementById("result").innerHTML = result;
}