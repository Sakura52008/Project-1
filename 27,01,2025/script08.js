const checkEven = () => {
    const numberInput = document.getElementById('numberInput');
    const number = Number(numberInput.value);
  
    const isEven = num => num % 2 === 0 ? "четное" : "нечетное";
  
    const result = isEven(number);
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Число ${number} - ${result}`;
  };
