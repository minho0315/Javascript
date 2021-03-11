// console.log("안녕하세요");
// console.log("JavaScript 를 배워봅시다!");

// // 변수
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

// // 연산자
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
