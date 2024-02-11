const hour = 12;
const isName= 'bhawna';
if (hour>=6 && hour <=12){
    console.log(`gd mrng ${isName}`);
} 
else if(hour>=13 && hour <=17){
    console.log('gd afternoon');
}
else {
    console.log('gd nyt');
}

const age= 5;
const isHoliday = true;
if(isHoliday != true && age<=6 || age>=65){
    console.log('dis');
}
else{
    console.log('no dis');
}

/*const isRandom = Math.random();
console.log(isRandom); */

const guess= 'heads';
const isRandom = Math.random();
if(isRandom<0.5){
console.log('You win');
}
else{ 
console.log('You lose');
}

function greet(name){
    console.log(`hello ${name}`);
}

greet('simon');


function greet(name){
    console.log(`hello ${name}`);
    if(!name){
        console.log('Hi there');
    }
}

greet();


function toFar(number){
const Faren = (number*9/5)+32;
console.log(Faren);
}

toFar(25);

function toCel(number){
    const Celcius = (number-32)*5/9;
    console.log(Celcius);
    }
    
toCel(86);


function toTemp(C, F){
       const Faren = (C*9/5)+32;
        const Celcius = (F-32)*5/9;
        console.log(Faren);
        console.log(Celcius);
 }
        
toTemp(25, 86);










    






