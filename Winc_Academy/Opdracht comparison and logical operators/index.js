const age = 32;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Abraham";
const totalAmount = 75;

if (age >= 18 ) {
    console.log("Welkom in de kroeg.");
} else {
    console.log("Helaas heb je nog niet de juiste leeftijd. BLijf aub buiten.");
}

if (isFemale) {
    console.log("Welkom op de ladiesnight");
} else {
    console.log("vandaag is enkel voor de dames. Morgen verwelkomen we je graag");
}

if (driverStatus == "bob") {
    console.log("Je bent bob en mag rijden");
} else {
    console.log("je bent geen bob en mag dus niet rijden");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Je betaalt de volle prijs");
}

if (firstName == "Abraham" || firstName == "Bram" || firstName == "Sarah") {
    console.log("Je krijgt een gratis biertje! Gefeliciteerd");
} else {
    console.log("Welkom in de kroeg");
}

if (totalAmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne");
} else if (totalAmount >= 50) {
    console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount >= 25) {
    console.log("Je krijgt een gratis portie (vega)bitterballen");
} else {
    console.log("helaas heb je niet genoeg uitgegeven voor een gratis traktatie"); 
}

