const runOnClick = function (arg)  {
    
    const firstValue = parseFloat(document.getElementById("num1").value);
    const secondValue = parseFloat(document.getElementById("num2").value);
    
    switch(arg) {
        
        case "add":
            addition(firstValue, secondValue);
            break;

        case "sub":
            subtraction(firstValue, secondValue);
            break;
        
        case "mul":
            multiplication(firstValue, secondValue);
            break;

        case "div":
            division(firstValue, secondValue);
            break;

        case "avg":
            average(firstValue, secondValue);
    }
    
    document.getElementById("result").innerHTML = result.toFixed(4);
}

const addition = (num1, num2) => {
    return result = num1 + num2;
}

const subtraction = (num1, num2) => {
    return result = num1 - num2;
}

const multiplication = (num1, num2) => {
    return result = num1 * num2;
}

const division = (num1, num2) => {
    return result = num1 / num2;
}

const average = (num1, num2) => {
    return result = division( addition(num1, num2), 2);   
}