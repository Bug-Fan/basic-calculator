const runOnClick = function (arg)  {
    
    let Value1 = document.getElementById("num1");
    let Value2 = document.getElementById("num2");
    
    const firstValue = parseFloat(Value1.value);
    const secondValue = parseFloat(Value2.value);

    const addition = (num1, num2) => {
        result = num1 + num2;
    }

    const subtraction = (num1, num2) => {
        result = num1 - num2;
    }

    const multiplication = (num1, num2) => {
        result = num1 * num2;
    }

    const division = (num1, num2) => {
        result = num1 / num2;
    }

    const average = (num1, num2) => {
        addition(num1, num2);
        result = result / 2;
        
    }

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
    
    document.getElementById("result").innerHTML = result;
}