const add = function() {
    console.log(2 + 3);
  };

  add();

  function runTwice(fun) {
    fun();
    fun();
  }

  runTwice(function() {
    console.log('12b');
  });
  
  runTwice(add);

  document.querySelector('.js-button')
  .addEventListener('click',()=>{
    const button=document.quertySelector('.js-button');

    setTimeout(() => {
      button.innerHTML = 'Finished!';
    }, 1000);
  });
  

  let timeoutId;

  function displayButton() {
    const btn = document.querySelector('.js-message');
     btn.innerHTML = 'Added';
     clearTimeout(timeoutId);

        timeoutId = setTimeout(function() {
          messageElement.innerHTML = '';
        }, 2000);
      }

      setInterval(function() {
        if (document.title === 'App') {
          document.title = '(2) New messages';
        } else {
          document.title = 'App';
        }
      }, 1000);

      const mul=(a,b)=> a*b;

      console.log(mul(2,5));

      function countPositive(nums){
       let positive=0;
       nums.forEach((num) => {
        if(num>0){
            positive++;
        }
    });

    return positive;
}

 console.log(countPositive([1,2,34,-8]));       

 function addNum(arr,num){
    return arr.map((value) => value + num);
 }
 console.log(addNum([1, 2, 3], 2));

 function removeEgg(foods){
    return foods.filter((food) => food !== 'egg');
 }

 console.log(removeEgg(['add','qwef','egg']));


