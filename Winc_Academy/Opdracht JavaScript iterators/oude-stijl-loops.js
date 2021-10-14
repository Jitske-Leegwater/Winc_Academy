let colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++;
};

console.log(' ');

for (i = 0; i < colors.length; i++) { 
    console.log(colors[i]);
};

console.log(' ');

colors.forEach(element => console.log(element));

console.log(' ');

//1. De whileloop neemt 4 regels in beslag. De forloop neemt 3 regels in beslag.
//2. De array method neemt 1 regel in beslag.
//3. Bij de for en while loop moet je een variabele aanmaken die niet duidelijk leesbaar is. Dit maakt de code ook minder leesbaar. 
//4. Met de for...in-method moet dit lukken.

const object = { a: 'java', b: 'script', c: 'html', d: 'css', e: 'leren' };

for (const property in object) {
    console.log(property + ' : ' + object[property] );
};

// Ja, ik ben nog steeds aan het itereren. 