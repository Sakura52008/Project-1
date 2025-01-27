function calculateArea() {
    // Получаем значение радиуса из input поля
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);
  
    // Проверяем, что введено число
    if (isNaN(radius)) {
      alert('Пожалуйста, введите числовое значение для радиуса.');
      return;
    }
  
    // Вычисляем площадь по формуле
    const pi = Math.PI;
    const area = pi * radius * radius;
  
    // Выводим результат на страницу
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Площадь круга: ${area}`;
  }
