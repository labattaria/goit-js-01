const credits = 23580; 
const pricePerDroid = 3000;
let totalPrice;

let orderedDroids = prompt("Количество дроидов для покупки");

if (orderedDroids === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = pricePerDroid * orderedDroids;
}

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    let afterPurchase;
    afterPurchase = credits - totalPrice;
    console.log(`Вы купили ${orderedDroids} дроидов, на счету осталось ${afterPurchase} кредитов.`);
}