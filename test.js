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

import { produce } from "immer";

const employee = {
    name: "Mir",
    address: {country: "Bangladesh", city: "Dhaka"},
};

// const employee2 = {
//     ...employee,
//     name: "Mezba",
//     address: {...employee.address, city: "Chittagong"},
// };

// console.log(employee==employee2);

const employee2 = produce(employee, (draft)=> {
    draft.name = "Mezba";
    draft.address.city = "Chittagong";
})

console.log(employee);
console.log(employee2);
