import "./OddOccurrencesInArray";
//test
// function solution(A) {
//   let notPresent = [];
//   for (let e of A) {
//     let theNumber = e + 1
//     if (!A.some(v => v === theNumber )) {
//       notPresent.push(theNumber);
//     }
//   }
//   return Math.min.apply(null, notPresent);
// }

// let a;
// a = [1, 3, 6, 4, 1, 2];
// a = [1, 2, 3];
// a = [-1, -3];

// console.log(
//   solution(a)
// );

// let operatives = [
//   { id: 12, name: 'Baze Malbus', pilot: false },
//   { id: 44, name: 'Bodhi Rook', pilot: true },
//   { id: 59, name: 'Chirrut Îmwe', pilot: false },
//   { id: 122, name: 'Jyn Erso', pilot: false }
// ];
// // let listHasPilots = operatives.some(operative => operative.pilot);
// // console.log(listHasPilots);

// const firstPilot = operatives.find(operative => operative.pilot);
// console.log(firstPilot);

// let personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true,
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   {
//     id: 22,
//     name: "Zeb Orellios",
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   {
//     id: 15,
//     name: "Ezra Bridger",
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   {
//     id: 11,
//     name: "Caleb Dume",
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// ];

// // let forceUsers = personnel.filter(p => p.isForceUser)
// // let points = forceUsers.reduce((acc, o) => acc + o.shootingScore + o.pilotingScore, 0);
// let points = personnel.reduce((acc, p) => p.isForceUser ? acc + p.shootingScore + p.pilotingScore : acc, 0)
// console.log(points);

// const values = ['0', '0', '0', '1', '1', '0', '0', '1', '1', '1'];
// console.log(
//   values.filter(v => v === '1').map(o => parseInt(o, 10)).reduce((acc, e) => acc + e, 0)
// );

// function greaterValue(values) {
//   return values.reduce((acc, val) => (acc || 0) > val ? acc : val);
// }

// let numbers = [5, 45, 27, 12, 79, 8];
// console.log(
//   greaterValue(numbers)
// );

// let pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];

// let totalYearsPilots = pilots.reduce((total, pilot) => total + pilot.years, 0);
// console.log(totalYearsPilots);

// let mostExpPilot = pilots.reduce((oldest, pilot) => {
//   return (oldest.years || 0) > pilot.years ? oldest : pilot;
// })

// console.log(mostExpPilot);

// let officers = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' }
// ];

// let officersIds = officers.map(v => v.id);
// console.log(officersIds);

// const areaCircle = r => Math.PI * r ** 2;
// const perimeterCircle = r => 2 * Math.PI * r;

// console.log(areaCircle(5));
// console.log(perimeterCircle(5));

// function solution(N) {
//   let bin = Number(N).toString(2);
//   console.log(bin);
//   if (bin.split('').filter(v => v === '1').length === 1) { return 0 };
//   console.log(bin.split('1'));
//   const gapsLen = bin.split('1').map(val => val.length);
//   return Math.max.apply(null, gapsLen);
// }

// console.log("solution(529) = 4 ~>", solution(529));
// console.log("solution(1041) = 5 ~>", solution(1041));
// console.log("solution(32) = 0 ~>", solution(32));
// console.log("solution(9) = 2 ~>", solution(9));
//console.log("solution(20) = 1 ~>", solution(20));
//console.log("solution(15) = 0 ~>", solution(15));
//console.log("solution(6) = 0 ~>", solution(6));
//console.log("solution(328) = 2 ~>", solution(328));
//console.log("solution(51712) = 2 ~>", solution(51712));

// const name = 'Harlley';
// name = 'opa';
// console.log(name);

// function mostrar(s) {
//   for (let l of s) {
//     console.log(l);
//   }
// }
// mostrar('opa');

// const agenda = [
//   { nome: "Harlley", telefone: "666 777 333" },
//   { nome: "Mirian", telefone: "999 777 333" }
// ];

// for (let contato of agenda) {
//   console.log(contato);
// }

// const pessoa = {
//   nome: "Fulano",
//   telefone: "444 555 666"
// };

// for (let field in pessoa) {
//   console.log(`${field}: ${pessoa[field]}`);
// }

// function isVowel(c) {
//   return ["a", "e", "i", "o", "u"].includes(c);
// }

// function vowelsAndConsonants(s) {
//   const arr = s.split("");
//   arr.forEach(e => {
//     if (isVowel(e)) {
//       console.log(e);
//     }
//   });
//   arr.forEach(e => {
//     if (!isVowel(e)) {
//       console.log(e);
//     }
//   });
// }

//console.log(vowelsAndConsonants("javascriptloops"));

// function theLoop(cont) {
//   if (cont === 0) return;
//   console.log(cont);
//   return theLoop(cont - 1);
// }

// theLoop(5);

// const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
// let result = factorial(3);
// console.log(result);

// let val = 2;
// console.log(--val);

// function getArea(length, width) {
//   let area;
//   area = length * width;
//   return area;
// }

// const getArea = (length, width) => length * width;
// const getPerimeter = (length, width) => 2 * (length + width);

// function getPerimeter(length, width) {
//   let perimiter;
//   perimiter = (length + width) * 2;
//   return perimiter;
// }

// console.log("area ~> ", getArea(3, 4.5));
// console.log("perimiter ~> ", getPerimeter(3, 4.5));

// console.log(5/0);
// console.log(Number.MAX_VALUE * -2);
// console.log(Number.MIN_VALUE * -1.1);
// console.log(3/-0);
// console.log(Math.sqrt(-1));

// function performOperation(secondInteger, secondDecimal, secondString) {
//   const firstInteger = 4;
//   const firstDecimal = 4.0;
//   const firstString = "HackerRank ";

//   console.log(firstInteger + parseInt(secondInteger, 10));
//   console.log(firstDecimal + parseFloat(secondDecimal));
//   console.log(firstString.concat(secondString));
// }
// performOperation(
//   "12",
//   "4.32",
//   "is the best place to learn and practice coding!"
// );
