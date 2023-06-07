// 1. пользователь 5 раз вводит 2 числа через промпт
// 2. эти 2 числа умножить и записать в тотал сумму умножения
// 3. записать сумму всех результатов умножения

let total = 0;
let firstNumber;
let secondNumber;


for (let i = 0; i < 5; i += 1) {
    firstNumber = prompt("Введите первое число:");
    secondNumber = prompt("Введите второе число:");

    if (firstNumber === null) {
        break;
    }

    total += Number(firstNumber) * Number(secondNumber);
    
    console.log(total);
}

console.log(total);




// просим пользователя ввести число (пока он не нажмёт кнопку отмена), узнаём это чётное или нечётное число
// например, выводим строку "Вы ввели число ТАКОЕ-ТО. Оно чётное"

let userInput;

for (let i = 0; i < i + 1; i += 1) {
    userInput = prompt("Введите число:");

    if (userInput === null) {
        break;
    } else if (Number(userInput) % 2 === 0) {
        console.log(`Вы ввели число ${userInput}. Оно чётное`);
    } else {
        console.log(`Вы ввели число ${userInput}. Оно нечётное`);
    }
}
