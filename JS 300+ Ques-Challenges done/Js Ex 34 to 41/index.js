const nums = [10,20,30];
nums[2]=99;
console.log(nums);

function getLastValue(array){
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

console.log(getLastValue([1,34,64,3,5]));
console.log(getLastValue(['we','rt','ty']));

function arraySwap(array){
    const lastIndex = array.length - 1;
    const lastValue = array[lastIndex];
    const firstvalue = array[0];

    array[0]=lastValue;
    array[lastIndex]=firstvalue;

    return array;
}

console.log(arraySwap([2,4,64,3,32]));

for(let i=0;i<=10;i++){
   if (i%2==0){
    console.log(i);
   }
}

for(let i=5;i>=0;i--){
    console.log(i);
}

const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
 }

console.log(result);


function addOne(arr){
    const okay=[];
for(let i=0; i<arr.length; i++){
okay.push(arr[i]+1);
}
return okay;
}
console.log(addOne([1,2,3]));

function addNum(arr, num){
    const seat=[];
    for(i=0;i<arr.length;i++){
        seat[i]=(arr[i]+num);
    }
    return seat;
}
console.log(addNum([1,2,3],2));

function addArrays(arr1, arr2){
    const help=[];
    for(i=0;i<arr1.length;i++){
        help[i]=(arr1[i]+arr2[i]);
        }
    return help;
}
console.log(addArrays([1,1,2],[1,1,3]));

function countPositive(arr){
    const fast=[];
    for(i=0;i<arr.length;i++){
        fast[i]=(arr[i]>0)
    }
    return fast;
}
console.log(countPositive([1,3,-5]));


function countPositive(nums){
    let fast=0;
    for(i=0;i<nums.length;i++){
       if(nums[i]>0){
        fast++;
       }
    }
    return fast;
}
console.log(countPositive([1,3,-5,7,9,0]));

function minMax(nums){
    const result={
        min: null,
        max:null
    };
    for(let i=0;i<nums.length;i++){
        const value=nums[i];
        if(value<result.min || result.min===null){
            result.min=value;
        }
        if(value>result.max || result.max===null){
            result.max=value;
        }}
        return result;
    }
    console.log(minMax([1,-3,5]));
    console.log(minMax([]));


function countWords(words){
    const result={};
    for (let i=0;i<words.length;i++){
        const word=words[i];
    if(!result[word]){
        result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));

let words=['hello','hi','search','hey','search'];
let index=-1;
for(let i=0;i<words.length;i++){
    if(words[i]==='search'){
        index=i;
        break;
    }
}
console.log(index);

function findIndex(arr,word){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === word){
            return i;
        }}
        return -1;
}
console.log(findIndex(['war','quack','mole','red'],'red'));

function removeEgg(foods){
    let count=0;
    const result=[];
    const revFoods=foods.slice().reverse();
    for(let i=0;i<foods.length;i++){
        if(revFoods[i] === 'egg' && count<2){
            count++;
            continue;
        }
        result.push(revFoods[i]);
    }
    return result.reverse();
}
console.log(removeEgg(['was','egg','red','yet','egg','egg','hut']));

for(let i=1;i<=20;i++){
    if(i%3===0){
        console.log('fizz');
    }
    else if(i%5==0){
        console.log('buzz');
    }
    else if(i%3===0 && i%5===0){
        console.log('Fizzbuzz');
    }
    else{
        console.log(i);
    }
}