// // --------- Basics of Functional Programming ---------

// // Pure function

// const add = (a, b) => a+b ;

// // Impure function
// // let total = 0;
// // const addTotal = (amount) => (total = total+amount);

// // console.log(addTotal(5));
// // console.log(total);

// const updateDate = () => {
//     new Date();
// };

// const randomNumber = (amount) => {
//     return amount+Math.random();
// };

// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));

//  -------- Understanding mutation and ways to avoid it ------------

// import { produce } from "immer";

// const employee = {
//     name: "Mir",
//     address: {country: "Bangladesh", city: "Dhaka"},
// };

// // const employee2 = {
// //     ...employee,
// //     name: "Mezba",
// //     address: {...employee.address, city: "Chittagong"},
// // };

// // console.log(employee==employee2);

// const employee2 = produce(employee, (draft)=> {
//     draft.name = "Mezba";
//     draft.address.city = "Chittagong";
// })

// console.log(employee);
// console.log(employee2);

//  ----------- Currying / Function Curry -----------

// Normal
// const add = (a, b) => a + b;
// console.log(add(5, 3));

// Curried
// const add = (a) => (b) => a+b ;

// function add(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(add(5)(3));

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const totalPrice = (amount, discount) => amount - amount * discount;
// console.log(totalPrice(100, 0.3));

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3);
console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(250));


