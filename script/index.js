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

setInterval(function() {
    // Do
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    
    console.log(r, g, b);
    
    const colored = document.getElementById('colored');
    colored.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 1000);

