/**
 * 알고 있으면 유용한 자바스크립트 문법
 */
/**
 * 01. 삼항 연산자
 */
// const array = [];
// let text = '';
// if (array.length === 0) {
//   text = '배열이 비어있습니다.';
// } else {
//   text = '배열이 비어있지 않습니다.';
// }
// console.log(text);

// const array = [];
// let text =
//   array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다';
// console.log(text);

// 조건 ? true일때 : false일때

// const array = [];
// let text =
//   array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다';
// console.log(text);

// const condition1 = false;
// const condition2 = false;

// const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'food';
// console.log(value);

/**
 * 02. Truthy and Falsy
 */
// Truthy: true 같은거... Falsy: false 같은거...
// function print(person) {
//   console.log(person.name);
// }

// const person = {
//   name: 'john'
// };

// print(person);

// function print(person) {
//   console.log(person.name);
// }

// const person = {
//   name: 'john'
// };

// print();

// function print(person) {
//   if (person === undefined) {
//     return;
//   }
//   console.log(person.name);
// }

// const person = {
//   name: 'john'
// };

// print();

// function print(person) {
//   if (person === undefined) {
//     console.log('person이 없네요');
//     return;
//   }
//   console.log(person.name);
// }

// const person = null;
// print(person);

// function print(person) {
//   if (person === undefined || person === null) {
//     console.log('person이 없네요');
//     return;
//   }
//   console.log(person.name);
// }

// const person = null;
// print(person);

// undefined와 null 은 Falsy 한 값이다.
// Falsy한 값 앞에 !를 붙여주면 true
// function print(person) {
//   if (!person) {
//     console.log('person이 없네요');
//     return;
//   }
//   console.log(person.name);
// }

// const person = null;
// print(person);

// console.log(!undefined);
// console.log(!null);
// console.log(!0);
// console.log(!'');
// console.log(!NaN);

// NaN = Not A Number
// const num = parseInt('15', 10); // 10진수 15를 숫자로 변환하겠다는 의미
// console.log(num); // 10
// const notnum = parseInt('야호~', 10);
// console.log(notnum); //NaN

// const value = { a: 1 };
// if (value) {
//   console.log('value 가 Truthy 하네요.');
// }

// const value = { a: 1 };
// const truthy = value ? true : false;
// const trythy = !!value;
