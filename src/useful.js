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

/**
 * 단축 평가 (short-circuit evaluation) 논리 계산법
 */
// const dog = {
//   name: '멍멍이'
// };

// function getName(animal) {
//   return animal.name;
// }

// const name = getName(dog);
// console.log(name); //멍멍이

// const dog = {
//   name: '멍멍이'
// };

// function getName(animal) {
//   return animal.name;
// }

// const name = getName();
// console.log(name); //멍멍이

// const dog = {
//   name: '멍멍이'
// };

// function getName(animal) {
//   if (animal) {
//     return animal.name;
//   }
//   return undefined;
// }

// const name = getName();
// console.log(name); //멍멍이

// && 연산자로 코드 단축시키기
// A && B 연산자를 사용하게 될때에는
// A 가 Truthy 한 값이라면, B가 결과 값으로 출력
// A 가 Falsy 한 값이라면 결과는 A
// const dog = {
//   name: '멍멍이'
// };

// function getName(animal) {
//   return animal && animal.name;
// }

// //const name = getName();
// const name = getName(dog);
// console.log(name); //멍멍이

// const namelessDog = {
//   name: ''
// };

// function getName(animal) {
//   const name = animal && animal.name;
//   if (!name) {
//     return '이름이 없는 동물입니다';
//   }
//   return name;
// }

// console.log(namelessDog.name);
// const name = getName(namelessDog);
// console.log(name); // 이름이 없는 동물입니다.

// A || B 연산자
// A 가 Truthy할 경우 결과는 A
// A 가 Falsy하다면 결과는 B
// const namelessDog = {
//   name: ''
// };

// function getName(animal) {
//   const name = animal && animal.name;
//   return name || '이름이 없는 동물입니다.';
// }

// const name = getName(namelessDog);
// console.log(name); // 이름이 없는 동물입니다.

/**
 * 04. 함수의 기본 파라미터
 */
// function calculateCircleArea(r) {
//   return Math.PI * r * r;
// }

// const area = calculateCircleArea(4);
// console.log(area);

// function calculateCircleArea(r) {
//   return Math.PI * r * r;
// }

// const area = calculateCircleArea();
// console.log(area);

// function calculateCircleArea(r) {
//   const radius = r || 1;
//   return Math.PI * radius * radius;
// }

// const area = calculateCircleArea();
// console.log(area);

// function calculateCircleArea(r = 1) {
//   return Math.PI * r * r;
// }

// const area = calculateCircleArea();
// console.log(area);

// const calculateCircleArea = (r = 1) => Math.PI * r * r;

// const area = calculateCircleArea();
// console.log(area);

/**
 * 05. 조건문 더 스마트하게 쓰기
 */
// 특정 값이 여러 값중 하나인지 확인해야 할 때
// function isAnimal(text) {
//   return (
//     text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
//   );
// }
// console.log(isAnimal('개'));
// console.log(isAnimal('노트북'));

// function isAnimal(name) {
//   const animals = ['고양이', '개', '거북이', ' 너구리'];
//   return animals.includes(name);
// }
// console.log(isAnimal('개'));
// console.log(isAnimal('노트북'));

// 값에 따라 다른 결과물을 반환 해야 할 때
// function getSound(animal) {
//   if (animal === '개') return '멍멍!';
//   if (animal === '고양이') return '야옹~';
//   if (animal === '참새') return '짹짹';
//   if (animal === '비둘기') return '구구 구 구';
//   return '...?';
// }
// console.log(getSound('개'));
// console.log(getSound('비둘기'));

// function getSound(animal) {
//   switch (animal) {
//     case '개':
//       return '멍멍!';
//     case '고양이':
//       return '야옹~';
//     case '참새':
//       return '짹짹';
//     case '비둘기':
//       return '구구 구 구';
//     default:
//       return '...?';
//   }
// }
// console.log(getSound('개'));
// console.log(getSound('비둘기'));

// function getSound(animal) {
//   const sounds = {
//     개: '멍멍!',
//     고양이: '야옹~',
//     참새: '짹짹',
//     비둘기: '구구 구 구'
//   };
//   return sounds[animal] || '...?';
// }
// console.log(getSound('개'));
// console.log(getSound('비둘기'));

// function makeSound(animal) {
//   const tasks = {
//     개() {
//       console.log('멍멍');
//     },
//     고양이() {
//       console.log('야옹');
//     },
//     비둘기() {
//       console.log('구구 구 구');
//     }
//   };
//   if (!tasks[animal]) {
//     console.log('...?');
//   }
//   tasks[animal]();
// }

// makeSound('개');
// makeSound('비둘기');

/**
 * 비구조화 할당 (구조분해) 문법
 */
// const object = { a: 1, b: 2 };

// const { a, b } = object;

// console.log(a);
// console.log(b);

// const object = { a: 1, b: 2 };

// function print({ a, b }) {
//   console.log(a);
//   console.log(b);
// }
// print(object);

// const object = { a: 1 };

// function print({ a, b }) {
//   console.log(a);
//   console.log(b);
// }
// print(object);

// 비구조화 할당시 기본값 설정
// const object = { a: 1 };

// function print({ a, b = 2 }) {
//   console.log(a);
//   console.log(b);
// }
// print(object);

// const object = { a: 1 };
// const { a, b = 2 } = object;
// console.log(a);
// console.log(b);

// 비구조화 할당시 이름 바꾸기
// const animal = {
//   name: '멍멍이',
//   type: '개'
// };
// const nickname = animal.name;
// console.log(nickname);

// const animal = {
//   name: '멍멍이',
//   type: '개'
// };
// const { name: nickname } = animal; // animal 객체 안에 있는 name을 nickname이라고 선언하겠다.
// console.log(nickname);

// 배열 비구조화 할당
// const array = [1, 2];
// const [one, two] = array;

// console.log(one);
// console.log(two);

// const array = [1];
// const [one, two = 2] = array;

// console.log(one);
// console.log(two);

// 깊은 값 비구조화 할당
// const deepObject = {
//   state: {
//     information: {
//       name: 'velopert',
//       languages: ['korean', 'english', 'chinese']
//     }
//   },
//   value: 5
// };

// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;

// const extracted = {
//   name, //object-shorthand
//   languages,
//   value
// };

// console.log(extracted);

// const deepObject = {
//   state: {
//     information: {
//       name: 'velopert',
//       languages: ['korean', 'english', 'chinese']
//     }
//   },
//   value: 5
// };

// const {
//   state: {
//     information: { name, languages }
//   },
//   value
// } = deepObject;

// const extracted = {
//   name, //object-shorthand
//   languages,
//   value
// };

// console.log(extracted);

/**
 * spread 와 rest
 */
// const slime = {
//   name: '슬라임'
// };

// const cuteSlime = {
//   name: '슬라임',
//   attribute: 'cute'
// };

// const purpleCuteSlime = {
//   name: '슬라임',
//   attribute: 'cute',
//   color: 'purple'
// };

// console.log(slime);
// console.log(cuteSlime);
// console.log(purpleCuteSlime);

// spread
// const slime = {
//   name: '슬라임'
// };

// const cuteSlime = {
//   ...slime,
//   attribute: 'cute'
// };

// const purpleCuteSlime = {
//   ...cuteSlime,
//   color: 'purple'
// };

// console.log(slime);
// console.log(cuteSlime);
// console.log(purpleCuteSlime);

// const animals = ['개', '고양이', '참새'];
// const anotherAnimals = [...animals, '비둘기'];
// console.log(animals);
// console.log(anotherAnimals);

// const numbers = [1, 2, 3, 4, 5];
// const spreadNumbers = [...numbers, 1000, ...numbers];
// console.log(spreadNumbers);

//rest
// const purpleCuteSlime = {
//   name: '슬라임',
//   attribute: 'cute',
//   color: 'purple'
// };
// const { color, ...rest } = purpleCuteSlime;
// console.log(color);
// console.log(rest);

// const purpleCuteSlime = {
//   name: '슬라임',
//   attribute: 'cute',
//   color: 'purple'
// };
// const { color, ...cuteSlime } = purpleCuteSlime;
// console.log(color);
// console.log(cuteSlime);

// const { attribute, ...slime } = cuteSlime;
// console.log(attribute);
// console.log(slime);

// 배열에서 rest
// const numbers = [0, 1, 2, 3, 4, 5, 6];
// const [one, ...rest] = numbers;
// console.log(one);
// console.log(rest);

// 함수 파라미터에서의 rest
// function sum(...rest) {
//   return rest;
// }
// const result = sum(1, 2, 3, 4, 5, 6);
// console.log(result);

// function sum(...rest) {
//   return rest.reduce((acc, current) => acc + current, 0);
// }
// const result = sum(1, 2, 3, 4, 5, 6);
// console.log(result);

// 함수 인자와 spread
// 인자 : 함수에서 값을 넣어 줄 때
// 파라미터 : 함수에서 값을 읽을 때
// function sum(...rest) {
//   return rest.reduce((acc, current) => acc + current, 0);
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = sum(...numbers);
// console.log(result);

// 퀴즈
// function max(...numbers) {
//   return numbers.reduce(
//     (acc, current) => (current > acc ? current : acc),
//     numbers[0]
//   );
// }
// const result = max(1, 2, 3, 4, 10, 5, 6, 7);
// console.log(result);

/**
 * 08. 자바스크립트의 Scope에 대한 이해
 */
// Scope란, 우리가 변수 혹은 함수를 선언하게 될 때
// 해당 변수 또는 함수가 유효한 범위를 의미한다.
// const value = 'hello';

// function myFunction() {
//   console.log('myFunction: ');
//   console.log(value);
// }

// function otherFunction() {
//   console.log('otherFunction: ');
//   const value = 'bye!';
//   console.log(value);
// }

// myFunction();
// otherFunction();

// console.log('global scope: ');
// console.log(value);

// const value = 'hello';

// function myFunction() {
//   const value = 'bye!';
//   const anotherValue = 'world';
//   function functionInside() {
//     console.log('functionInside: ');
//     console.log(value);
//     console.log(anotherValue);
//   }
// }

// myFunction();
// console.log('global scope: ');
// console.log(value);
// console.log(anotherValue);

// Hoisting 이해하기
// 자바스크립트 엔진이 코드를 해석할 때 에러를 발생 안시키는행위
// Hoisting은 자바스크립트 엔진이 갖고 있는 성질이며 방지하는게 좋다.
// var대신 const let을 사용하는 이유다.
// ESLint를 사용하여 발견 가능하다.
