const numBiggerThan100 = function(number) {
    if (number > 100) {
        return true
    } else {
        return false
    }
};

console.log(numBiggerThan100(10));

//The function above produces a boolean. 


const enteringClubAproved = function(maxPeople, currentPeople, age) {
    if (age < 18) { 
        console.log("this is a club for adults")
    } else if (maxPeople <= currentPeople) {
        console.log("it's too busy now, come back later")
    } else {
        console.log("come in")
    }
};

enteringClubAproved(200,101,20);
enteringClubAproved(200,200,20);
enteringClubAproved(200,199,16);

//The function above does something. 


const totalAverage = function(number1, number2, number3, number4, number5) {
    const average = (number1 + number2 + number3 + number4 + number5)/5
    return Math.round(average)
};

console.log(totalAverage(5,6,7,8,9));
console.log(totalAverage(6,7,8,7,9));

//The function above produces an average