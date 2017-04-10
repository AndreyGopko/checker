var someData = {};

function generateData(text) {
  var dataLength = data.length;
  var rand = Math.floor(Math.random() * dataLength);
  someData = data[rand];
  text.innerHTML = someData.name;
}

const text = document.querySelector('.req-text');
const input = document.querySelector('.req-input');
const btn = document.querySelector('.req-btn');
const result = document.querySelector('.result');

generateData(text);

text.innerHTML = someData.name;
btn.addEventListener('click', () => {
  if (+input.value === someData.value) {
    result.innerHTML = "YES! It's correct"
    result.style.color = 'green';
    input.value = '';
    generateData(text);
  } else {
    result.innerHTML = "NO! It's wrong. Try one more time";
    result.style.color = 'red';
  }
  input.focus();
})
