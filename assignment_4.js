// Problem-01

function seerToMon(seer) {
    // Input type check
    if (typeof seer != "number") {
        return "Please! give a number";
    }
    // Negative input check
    if (seer < 40) {
        return "Please! give a number greater than 40 or equal to 40";
    }
    let mon = seer / 40;
    return mon;
}

const result = seerToMon(800);
console.log(result);

// Problem-02

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // Input type check
    if (typeof shirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoeQuantity != "number") {
        return "Please! give all product quantity number.If you don't purchase any quantity of an item, give the value 0";
    }
    // Negative input check
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "Negative quantity is not acceptable";
    }
    // Per product price
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    // Every item total cost calculation
    const totalShirtPrice = perShirtPrice * shirtQuantity;
    const totalPantPrice = perPantPrice * pantQuantity;
    const totalShoePrice = perShoePrice * shoeQuantity;

    // All item total cost calculation
    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice
}

//Product quantity
let shirt = 1;
let pant = 3;
let shoe = 2;

const total = totalSales(shirt, pant, shoe);
console.log(total);




