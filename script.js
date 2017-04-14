var someData = {};

function generateData(text) {
  var dataLength = data.length;
  var rand = Math.floor(Math.random() * dataLength);
  someData = data[rand];
  text.innerHTML = someData.value;
}

const text = document.querySelector('.req-text');
const input = document.querySelector('.req-input');
const btn = document.querySelector('.req-btn');
const btnAnswer = document.querySelector('.req-btn-answer');
const result = document.querySelector('.result');

generateData(text);

text.innerHTML = someData.value;
btn.addEventListener('click', () => {
  if (input.value === someData.name) {
    result.innerHTML = "YES! It's correct"
    result.style.color = 'green';
    input.value = '';
    generateData(text);
  } else {
    result.innerHTML = "NO! It's wrong. Try one more time";
    result.style.color = 'red';
  }
  input.focus();
});

btnAnswer.addEventListener('click', () => {
  result.innerHTML = someData.name;
  result.style.color = 'blue';
})
