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
        console.log(result);
    }

    const division = (num1, num2) => {
        result = num1 / num2;
    }

    const average = (num1, num2) => {
        addition(num1, num2);
        result = result / 2;
        
    }

    console.log(addition());
    if (arg === "add")      addition(firstValue, secondValue);
    else if (arg === "sub") subtraction(firstValue, secondValue);
    else if (arg === "mul") multiplication(firstValue, secondValue);
    else if (arg === "div") division(firstValue, secondValue);
    else if (arg === "avg") average(firstValue, secondValue);

    document.getElementById("result").innerHTML = result;
}