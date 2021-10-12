// Opdracht Hey kiddo
/*
const checkAge = function(age) {
    return age >= 18;
};

const checkAdult = function(age) {
    const checkedAge = checkAge(age);
    if (checkedAge == true) {
        return 'Hello there';
    } else {
        return 'Hey kiddo';
    };
};

console.log(checkAdult(20));
*/

//Opdracht VAT calculations exercise 1

const mathematicVat = function(vatPercentage) {
    const mathematicVat = (vatPercentage/100) + 1;
    return mathematicVat;
};

const priceIncludingVat  = function (basePrice, vatPercentage) {
    const totalPrice = basePrice * mathematicVat(vatPercentage);
    return totalPrice;
};
//console.log(priceIncludingVat(1000, 21));


//Opdracht VAT calculations exercise 2


const arrayBasePriceAndVat = function(priceIncludingVat, vatPercentage) {
    const basePrice = (priceIncludingVat) / mathematicVat(vatPercentage);
    const vatAmount = priceIncludingVat - basePrice;
    return [basePrice, vatAmount];
};

console.log(arrayBasePriceAndVat(1210,21));
console.log(arrayBasePriceAndVat(2.18,9));