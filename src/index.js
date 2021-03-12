/**
 * 자바스크립트에서 비동기 처리 다루기
 */
// 동기적 (Synchronous) - 하나씩
// 비동기적 (Asynchronous) - 여러개
// function work() {
//   const start = Date.now();
//   for (let i = 0; i < 1000000000; i++) {}
//   const end = Date.now();
//   console.log(end - start + 'ms');
// }

// work();
// console.log('다음 작업');

// setTimeout
// function work() {
//   setTimeout(() => {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//   }, 0);
// }

// console.log('작업 시작!');
// work();
// console.log('다음 작업');

// function work(callback) {
//   setTimeout(() => {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//     callback();
//   }, 0);
// }

// console.log('작업 시작!');
// work(() => {
//   console.log('작업이 끝났어요!');
// });
// console.log('다음 작업');

// 비동기처리 - Ajax Web API요청, 파일 읽기, 암호화/복호화, 작업 예약

/**
 * 01. Promise
 */
// function increaseAndPrint(n, callback) {
//   setTimeout(() => {
//     const increased = n + 1;
//     console.log(increased);
//     if (callback) {
//       callback(increased);
//     }
//   }, 1000);
// }

// increaseAndPrint(0, (n) => {
//   increaseAndPrint(n, (n) => {
//     console.log('끝!');
//   });
// });
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });

// myPromise.then((n) => {
//   console.log(n);
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error());
//   }, 1000);
// });

// myPromise
//   .then((n) => {
//     console.log(n);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}
// increaseAndPrint(0).then((n) => {
//   console.log('result: ', n);
// });

// increaseAndPrint(0)
//   .then((n) => {
//     return increaseAndPrint(n);
//   })
//   .then((n) => {
//     return increaseAndPrint(n);
//   })
//   .then((n) => {
//     return increaseAndPrint(n);
//   })
//   .then((n) => {
//     return increaseAndPrint(n);
//   })
//   .then((n) => {
//     return increaseAndPrint(n);
//   })
//   .then((n) => {
//     return increaseAndPrint(n);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// increaseAndPrint(0)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .catch((e) => {
//     console.error(e);
//   });
