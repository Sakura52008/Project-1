function filterNumbers() {
    // Получаем строку с числами из input
    const numbersInput = document.getElementById('numbersInput');
    const numbersString = numbersInput.value;

    // Разбиваем строку на отдельные числа
    const numbersArray = numbersString.split(',').map(Number);

    // Функция для фильтрации нечетных чисел
    const isOdd = (num) => num % 2 !== 0;

    // Фильтруем массив и получаем массив нечетных чисел
    const oddNumbers = numbersArray.filter(isOdd);

    // Выводим результат на страницу
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Нечетные числа: ${oddNumbers}`;
