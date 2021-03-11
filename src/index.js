/**
 * 자바 스크립트 인문
 */
// // 01
// console.log("안녕하세요");
// console.log("JavaScript 를 배워봅시다!");

// // 02. 변수
// let value = 1;
// console.log(value);
// value = 2;
// console.log(value);

// // 상수
// const a = 1;
// a = 2; // 오류

// var는 사용x

// // 데이터 타입
// // 숫자(Number)
// let value = 1;

// // 문자열
// let text = 'hello';
// let name = '자바스크립트';

// // 참/거짓 (Boolean)
// let good = true;
// let loading = false;

// // null과 undefined
// // null은 값이 없다 ( 난 친구 같은 거 없어)
// const friend = null;
// console.log(friend);

// // undefined는 아직 값이 설정되지 않은 것
// let criminal;
// console.log(criminal);

// // null 과 undefined는 둘 다 값이 없음을 의미하는건 맞는데, null 은 우리가 없다고,
// // 고의적으로 설정하는 값을 의미하고, undefined는 우리가 설정하지 않았기 때문에
// // 없는 값을 의미한다.

// // 03. 연산자
// // 대입 연산자
// let value = 1;
// value = 2;

// // 산술연산자
// let a = 1 + 2;
// console.log(a);

// let a = 1 + 2 - (3 * 4) / 4;
// console.log(a);

// let a = 1;
// a++;
// ++a;
// console.log(a);

// let a = 1;
// console.log(a++);
// console.log(++a);

// let a = 1;
// a--;
// console.log(a);

// // 대입연산자
// let a = 1;
// a = a + 3;

// let a = 1;
// a += 3;

// let a = 1;
// a += 3;
// a -= 3;
// a *= 3;
// a /= 3;
// console.log(a);

// // 논리 연산자
// // NOT
// const a = !true;
// console.log(a);

// const b = !false;
// console.log(b);

// // AND
// const a = true && true;
// console.log(a);

// let f = false && false;
// f = false && true;
// f = true && false;

// // OR
// let t = true || false;
// t = false || true;
// t = true || true;

// let f = false || false;

// // 연산 순서
// // NOT -> AND -> OR
// const value = !((true && false) || (true && false) || !false);
// console.log(value);

// // 비교 연산자
// const a = 1;
// const b = 1;
// const equals = a === b;
// console.log(equals);

// const a = 1;
// const b = 1;
// const equals = a == b;
// console.log(equals);

// === == 차이점 ? == 은 타입검사까지는 하지 않는다.

// const a = 1;
// const b = '1';
// const equals = a == b;
// console.log(equals);

// const a = 0;
// const b = false;
// const equals = a == b;
// console.log(equals);

// const a = null;
// const b = undefined;
// const equals = a == b;
// console.log(equals);

// // === 사용 권장

// // 두 값이 일치하지 않는지 확인
// const value = 'a' !== 'b';

// console.log(1 != '1');
// console.log(1 !== '1');

// // 크고 작음
// const a = 10;
// const b = 15;
// const c = 15;

// console.log(a < b);
// console.log(b > a);
// console.log(b >= c);
// console.log(a <= c);
// console.log(b < c);

/**
 * 여러줄로 주석 작성하기
 */

// // 문자열 붙이기
// const a = '안녕';
// const b = '하세요';
// console.log(a + b);

/**
 * 04. 조건문
 */
// // if문
// const a = 1;
// if (a + 1 === 2) {
//   console.log('a + 1 이 2 입니다.');
// }

// const a = 1;
// if (true) {
//   const a = 2;
//   console.log('if문 안의 a 값은 ' + a);
// }
// console.log('if문 밖의 a 값은 ' + a);

// //if-else 문
// const a = 10;
// if (a > 15) {
//   console.log('a 가 15 큽니다.');
// } else {
//   console.log('a 가 15보다 크지 않습니다.');
// }

// // if-else if 문
// const a = 10;
// if (a === 5) {
//   console.log('5입니다!');
// } else if (a === 10) {
//   console.log('10입니다!');
// } else {
//   console.log('5도 아니고 10도 아닙니다.');
// }

// // switch/case 문
// const device = 'iphone';

// switch (device) {
//   case 'iphone':
//     console.log('아이폰!');
//     break;
//   case 'ipad':
//     console.log('아이패드!');
//     break;
//   case 'galaxy note':
//     console.log('갤럭시 노트!');
//     break;
//   default:
//     console.log('모르겠네요..');
// }

/**
 * 05. 함수
 */
// const a = 1;
// const b = 2;
// const sum = a + b;

// function add(a, b) {
//   return a + b;
// }

// const sum = add(1, 2);
// console.log(sum);

// function add(a, b) {
//   return a + b;
//   console.log('호출이 되지 않는 코드!');
// }

// const sum = add(1, 2);
// console.log(sum);

// // 연습
// function hello(name) {
//   console.log('Hello, ' + name + '!');
// }
// hello('velopert');

// // 템플릿 리터럴
// function hello(name) {
//   console.log(`Hello, ${name}!`);
// }
// hello('velopert');

// // 점수를 성적등급으로 변환하기
// function getGrade(score) {
//   if (score === 100) {
//     return 'A+';
//   } else if (score >= 90) {
//     return 'A';
//   } else if (score === 89) {
//     return 'B+';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score === 79) {
//     return 'C+';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score === 69) {
//     return 'D+';
//   } else if (score >= 60) {
//     return 'F';
//   }
// }

// const grade = getGrade(90);
// console.log(grade);

// // 화살표 함수
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));

// const add = (a, b) => a + b;
// console.log(add(1, 2));

/**
 *  06. 객체
 */
// const dog = {
//   name: '멍멍이',
//   age: 2
// };

// console.log(dog.name);
// console.log(dog.age);

// const sample = {
//   'key with space': true
// };

// const ironMan = {
//   name: '토니 스타크',
//   actor: '로버트 다우니 주니어',
//   alias: '아이언맨'
// };

// const captainAmerica = {
//   name: '스티븐 로저스',
//   actor: '크리스 에반스',
//   alias: '캡틴 아메리카'
// };

// console.log(ironMan);
// console.log(captainAmerica);

// // 함수에서 객체를 파라미터로 받기
// const ironMan = {
//   name: '토니 스타크',
//   actor: '로버트 다우니 주니어',
//   alias: '아이언맨'
// };

// const captainAmerica = {
//   name: '스티븐 로저스',
//   actor: '크리스 에반스',
//   alias: '캡틴 아메리카'
// };

// function print(hero) {
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// 객체 비구조화 할당 (객체 구조 분해)
// 객체에서 값들을 추출해서 새로운 상수로 선언
// const ironMan = {
//   name: '토니 스타크',
//   actor: '로버트 다우니 주니어',
//   alias: '아이언맨'
// };

// const captainAmerica = {
//   name: '스티븐 로저스',
//   actor: '크리스 에반스',
//   alias: '캡틴 아메리카'
// };

// function print(hero) {
//   const {alias, name, actor} = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// const ironMan = {
//   name: '토니 스타크',
//   actor: '로버트 다우니 주니어',
//   alias: '아이언맨'
// };

// const captainAmerica = {
//   name: '스티븐 로저스',
//   actor: '크리스 에반스',
//   alias: '캡틴 아메리카'
// };

// function print({ alias, name, actor }) {
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// // 객체 안에 함수 넣기
// // 함수가 객체 안에 들어가게 되면, this는 자신이 속해 있는 객체르 가르키게 된다.
// const dog = {
//   name: '멍멍이',
//   sound: '멍멍!',
//   say: function say() {
//     console.log(this.sound);
//   }
// };

// dog.say();

// // 함수를 선언 할 때에는 이름이 없어도 된다.
// const dog = {
//   name: '멍멍이',
//   sound: '멍멍!',
//   say: function () {
//     console.log(this.sound);
//   }
// };

// dog.say();
// 객체 안에 함수를 넣을 때, 화살표 함수를 선언한다면 제대로 작동하지 않는다.
// 이유는 function으로 선언한 함수는 this가 제대로 자신이 속한 객체를 가르키게 되는데,
// 화살표 함수는 그렇지 않기 때문이다.

// // Getter 함수와 Setter 함수
// const numbers = {
//   a: 1,
//   b: 2
// };

// numbers.a = 5;
// console.log(numbers);

// Getter 함수는 특정 값을 조회 할 때 우리가 설정한 연산된 값을 반환한다.
// get 키워드
// const numbers = {
//   a: 1,
//   b: 2,
//   get sum() {
//     console.log('sum 함수가 실행됩니다!');
//     return this.a + this.b;
//   }
// };

// console.log(numbers.sum);
// numbers.b = 5;
// console.log(numbers.sum);

// // Setter 함수는 set 키워드
// const numbers = {
//   _a: 1,
//   _b: 2,
//   sum: 3,
//   calculate() {
//     console.log('calculate');
//     this.sum = this._a + this._b;
//   },
//   get a() {
//     return this._a;
//   },
//   get b() {
//     return this._b;
//   },
//   set a(value) {
//     console.log('a가 바뀝니다.');
//     this._a = value;
//     this.calculate();
//   },
//   set b(value) {
//     console.log('b가 바뀝니다.');
//     this._b = value;
//     this.calculate();
//   }
// };

// console.log(numbers.sum);
// numbers.a = 5;
// numbers.b = 7;
// numbers.a = 9;
// console.log(numbers.sum);
// console.log(numbers.sum);
// console.log(numbers.sum);

/**
 *  07. 배열
 */
// const array = [1, 2, 3, 4, 5];

// const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

// console.log(objects);
// console.log(objects[0]);
// console.log(objects[1]);

// // 배열에 새 항목 추가하기
// const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

// objects.push({
//   name: '멍뭉이'
// });

// console.log(objects);

// // 배열의 크기 알아내기
// const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

// console.log(objects.length);

// objects.push({
//   name: '멍뭉이'
// });

// console.log(objects.length);
