// arrow funqciebi
1
const add = (a, b) => a + b;
console.log(add(15,1));
3
const even = (num) => num % 2 === 0;
console.log(even(54));
5
const positive = (num) => num >= 0;
console.log(positive(-12));
8
const isDivisibleByThree = (num) => num % 3 === 0;
console.log(isDivisibleByThree(72))
10
const cube = (num) => num * num * num;
console.log(cube(5))
12
const isGreaterThanZero = (num) => num > 0;
console.log(isGreaterThanZero(-59)    )
15
const square = (num) => num * num
console.log(square(12))

// anonimuri funqcia/ callback funqcia
2
const gamokleba = function(num1,num2) {
  return num1 - num2; 
};
console.log(gamokleba(1122,1))

4

 function multiplication( num1 , num2, callback){
    return callback(num1, num2);
 }
 function gamrvaleba(a, b) {
    return a * b; 
 }
 const result = multiplication( 31, 6, gamrvaleba);
 console.log(result);

6

  const gaormageba = function(n) {
    return n * 2;
  };
  console.log(gaormageba(5)); 

7

  function doubleNumber(number, callback) {
    const result = number * 2;
    callback(result);
  }
  function shedegi(result) {
    console.log(result);
  }
  doubleNumber(5, shedegi);
9

  function checkifodd( number, callback) {
  const result = number % 2 === 0;
  callback(result);
}
function shedegi(result) {
  console.log(result);
}
{checkifodd(7, shedegi)}

11
  function gamravleba ( num1, num2, callback) {
  const result = num1 * num2;
  callback(result)
}
function shedegi(result) {
  console.log(result)
  }
  gamravleba(11,3,shedegi)
  13
    const divide = function(n) {
    return n / 2;
  };
  console.log(divide(72));

14
  function shejameba( num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
  }
  function shedegi(result) {
    console.log(result);
  }
  {shejameba(1000, 500, shedegi)}
