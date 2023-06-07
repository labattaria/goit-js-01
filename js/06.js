// 1. обьявить переменные
// 2. создать prompt для ввода чисел (введенное число хранится как строка)
// 5. сделать бесконечный цикл с помощью определённого условия выхода из цикла
// 6. проверить на то нажал ли пользователь cancel (если нажал, то в переменной которая хранит пользовательский ввод в виде строки будет храниться значение null)
// 3. преобразовать полученную промптом строку в намбер
// 4. прибавить к тоталу полученный намбер
// 7. алерт со строкой о прекращении работы (цикла)

let input;
let total = 0;

for (let i = 0; i < i + 1; i += 1) {
    input = prompt("Введите число:");

    if (input === null) {
        break;
    } else if (Number.isNaN(Number.parseInt(input))) {
        continue;
    }

    total += Number(input);
}

alert(`Общая сумма чисел равна ${total}`);



// let input;
// let total = 0;

// while (true) {
//     input = prompt("Введите число:");

//     if (input === null) {
//         break;
//     } else if (Number.isNaN(Number.parseInt(input))) {
//         continue;
//     }
    
//     total += Number(input);
// }

// alert(`Общая сумма чисел равна ${total}`);