/**
 * Created by IlyaLitvinov on 10.04.17.
 */

// import './styles.styl';

function calculator () {
  const display = document.querySelector('#display');
  const output = document.querySelector('#output');
  const sumBtn = document.querySelector('#sum');
  const subBtn = document.querySelector('#sub');
  const resetBtn = document.querySelector('#reset');
  const resultBtn = document.querySelector('#result');

  let result = 0;

  function clickHandler() {
    calculate(this.getAttribute('data-operator'));
  }

  function calculate(operatorParam) {
    switch(operatorParam) {
      case 'makeSum':
        result = sum(result, Number(display.value));
        break;
      case 'makeSub':
        result = sub(result, Number(display.value));
        break;
      case 'makeReset':
        result = 0;
        break;
    }

    print(result);
    display.value = 0;
  }

  function print(data) {
    output.innerHTML = data;
  }

  function sum (a, b) {
    return a+b;
  }

  function sub (a, b) {
    return a-b;
  }

  sumBtn.onclick = clickHandler;
  subBtn.onclick = clickHandler;
  resetBtn.onclick = clickHandler;
  resultBtn.onclick = clickHandler;
}

export { calculator }