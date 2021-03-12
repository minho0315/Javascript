/**
 * HTML과 JavaSCript 연동하기
 */
/**
 * 01. 카운터
 */
// const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

// console.log(number);
// console.log(increase);
// console.log(decrease);

// const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

// const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

// increase.onclick = () => {
//   console.log('increase 가 클릭됨');
// };

// decrease.onclick = () => {
//   console.log('decrease 가 클릭됨');
// };

// const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

// increase.onclick = () => {
//   const current = parseInt(number.innerText, 10);
//   number.innerText = current + 1;
// };

// decrease.onclick = () => {
//   const current = parseInt(number.innerText, 10);
//   number.innerText = current - 1;
// };

/**
 * 모달
 */

import './styles.css';

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');
open.onclick = () => {
  modal.style.display = 'flex';
};
close.onclick = () => {
  modal.style.display = 'none';
};
