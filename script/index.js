// a = 3;
// b = 2;

// c = a + b;

// console.log('a + b =', c);

/// asdfsdfgdghfg

// const a = 1;
// a = 0;



// let b = 2;
// var c = 3;



// d = 4;

// console.log('test', test);
// var test = 0;


// for(var i = 0; i < 5; i++) {
//     console.log('i=', i);    
// }

// console.log(i);

// const a  = 1;
// const b = 0;

// const c = a / b;

// console.log('c', c);

// const word = 'Hello!';
// const abc = "WORLD";
// const user = 'Andrey';

// const a = `Hello ${user}`;

// alert(a);

// const isUserExist = false;
// const isRed = true;

// const userData = null;

// const object = {
//     name: 'Vasil',
//     age: 18,
//     havePhoto: false
// }
// console.log('object', typeof false);

// const a = ' world';
// const b = 'Hello';

// console.log(b + a)

// let a = 1;
// a--;
// console.log(a);

// const a = 4;

// if (a > 10) {
//     console.log('a is big');
// } else if (a === 0) {
//     console.log('a is zero');
// } else {
//     console.log('a is small');
// }

// const user = 'Vasya';
// let title = '';
// if (user !== '') {
//     title = `Hello ${user}`;
// } else {
//     title = 'Good bay';
// }

// console.log(title);

// const title = user !== '' ? `Hello ${user}` : 'Good bay';
// console.log(title);

// const a = 5;

// if (a > 0 && a < 10) {}
// if (a > 0 || a < 10) {}
// if (a !== 0) {}

// for (let i = 5; i < 10; i++) {
//     console.log('asd', i);
// }

// let i = 0;
// while(i < 3) {
//     i++;
//     console.log(i);
// }

// do {
//     i++
//     console.log(i);
//     if (i === 1) {
//         break;
//     }
// } while (i < 3);

// const a = {
//     0: 345,
//     1: 23456,
//     2: 654
// }

// const arr = [123, 234, 56, 234, 657, 2345];
// const a = [
//     [1, 2, 4, 5, 56],
//     [4, 26, 44, 35, 6],
//     [15, 23, 41, 54, 56],
//     [1, 2, 40, 54, 56],
// ];
// const a = [[12, 34], [1234, 56]];
// console.log(a);

// setInterval(function() {
//     // Do
//     const r = Math.round(Math.random() * 255);
//     const g = Math.round(Math.random() * 255);
//     const b = Math.round(Math.random() * 255);

//     const width = Math.round(Math.random() * 300) + 100;
//     const height = Math.round(Math.random() * 300) + 100;
    
//     console.log(width);
    
//     const colored = document.getElementById('colored');
//     colored.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     colored.style.width = width + 'px';
//     colored.style.height = height + 'px';
// }, 1000);


// const arr = ['Vasya', 'Kolya', 'Vitya', 'Andrey'];

// for(let i = 0; i < arr.length; i++) {
//     console.log(a[i]);
// }

// arr.forEach()

// function hello(name) {
//     console.log(`hello ${name}`);
// };

// for(let i = 0; i < arr.length; i++) {
//     hello(arr[i]);
// }

// const users = ['Admin', 'Agent', 'Manager'];

// function add(a, b) {
//     return a + b;
// }

// const c = add(10, 20);
// // console.log('c', c);

// const getFirstArrayItem = function(arr) {
//     return arr[0];
// }

// const first = getFirstArrayItem([122, 2, 3])

// // console.log('first', first);

// const getRandomNumber = () => {
//     const arr = [5, 25, 125];

//     const index = Math.round(Math.random() * 2);

//     return arr[index];
// }

// console.log('getRandomNumber', getRandomNumber());

// console.log(hello());

// const hello = function() {
//     console.log('hello');
// }

// const fruits = ['Apple', 'Orange', 'Banana', 'Tangarine'];

// fruits.forEach(function(item, i, arr) {
//     console.log(`fruit is ${item}`);
// });

// const numbers = [1, 3, -2, 4, -24, 23, -33, -11];

// const newArray = [];
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) newArray.push(numbers[i])
// };

// console.log(newArray);

// const newArray = numbers.filter(function(item) {
//     return item < 0
// })

// console.log('newArray', newArray);

// const aa = [1, 5, 6, 7, 8];

// const newArray = aa.map(function(item) {
//     return item * 2;
// });

// console.log('newArray', newArray);

// const aa = [1, 5, 6, 7, 8];

// const is = aa.some(function(item) {
//     return item % 2 === 0
// });

// console.log('is', is);

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce(function(sum, current) {
    return sum + current;
});

console.log('result', result);