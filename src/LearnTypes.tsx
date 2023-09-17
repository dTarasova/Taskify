import React from 'react';
import './App.css';


// type Person = {
//   name: string;
//   age?: number;
// };
//   let person: Person = {
//     name: "Dasha",
//   };

let age: number | string;  // both types union 
let name: any; // any type 
let personName: unknown; // preferred option 

//let printName: Function;
let printName: (name:string) => never; // void returns undefined , never return nothing 

// function printName(name:string) {
//   console.log(name);
// }
// printName("Dasha")

interface Person {
  name: string;
  age?: number;
};

type X = {
  a: string;
  b: number;
}

type Y = X &  {
  c: string;
  d: number;
}

let y: Y = {
  a: "110",
  b: 11,
  c: "str",
  d: 31,
};

interface Guy extends Person {
  proffession: string; 
}

interface Person2 extends X{

};

type X2 =  Person & {

};