const total = 100;
const ordered = 50;
let message;

// if (ordered > total) {
//     message = "На складе недостаточно товаров!";
// } else {
//     message = "Заказ оформлен, с вами свяжется менеджер";
// }

message = ordered > total ? "На складе недостаточно товаров!" : "Заказ оформлен, с вами свяжется менеджер";

console.log(message);
