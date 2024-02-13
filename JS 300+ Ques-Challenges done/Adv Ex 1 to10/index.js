function sum(a,b){
    return a+b;
}
console.log(sum(2,7));

function lang(string){
    return string.length;
}
console.log(lang('was'));
/*
const a=12;
const b=2;
    const sum=a+b;
    const diff=a-b;
    const mul=a*b;
    const div=a/b;

console.log(`Sum: ${sum}`); */

function large(a,b){
    if(a>b){
        return a;
    }
    else if(b>a){
        return b;
    }
}
console.log(large(12,34));

function reverse(str){
    const rev=str.split("").reverse().join("");
    return rev;
}
console.log(reverse('bhawna'));

function table(num){
    for(let i=1;i<=10;i++){
        let result=num*i;
        console.log(`${result}`);
    }
}
console.log(table(7));


function summ(num){
    for(let i=1;i<=num;i++){
        let add=num+i;
        console.log(add);
    }
}
console.log(summ(5));


function vowel(str){
    const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
return count;
}
console.log(vowel('bhawna'));

function vowel(str){
    const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
return count;
}
console.log(vowel('bhawna'));

function greet(user){
    return ('hello'+ " "+ user);
}
console.log(greet('bhawna'));

function Square(num){
    return num*num;
}
console.log(Square(2));

function Letter(str){
    let count=0;
    for(let i=1;i<=str.length;i++){
        count=count+1;
        return count;
    }
}
console.log(Letter('bhawna'));