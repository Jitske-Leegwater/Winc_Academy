const paintWall = function(direction, color) {
    console.log('The ' + direction + ' wall has been painted ' + color)
};

paintWall('north', 'green');

//When we call the function without an argument, then the argument is replaced with undefined in the output.

//When you switch the arguments while calling the function, then you get a mixedup sentence which doesn't make sense.
//When you also switch it in the function definition, then you get the normal sentence.