let cost;

const normalizedCountry = prompt("Введите страну доставки").toLowerCase();
const optimizedCountry = normalizedCountry[0].toUpperCase() + normalizedCountry.slice(1);

switch (normalizedCountry) {
    case "китай":
        cost = 100;
        console.log(`Доставка в ${optimizedCountry} будет стоить ${cost} кредитов`);
        break;

    case "чили":
        cost = 250;
        console.log(`Доставка в ${optimizedCountry} будет стоить ${cost} кредитов`);
        break;

    case "австралия":
        cost = 170;
        console.log(`Доставка в ${optimizedCountry} будет стоить ${cost} кредитов`);
        break;

    case "индия":
        cost = 80;
        console.log(`Доставка в ${optimizedCountry} будет стоить ${cost} кредитов`);
        break;

    case "ямайка":
        cost = 120;
        console.log(`Доставка в ${optimizedCountry} будет стоить ${cost} кредитов`);
        break;

    default:
        alert('В вашей стране доставка не доступна');
}