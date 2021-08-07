const counter = document.getElementById('counter');
const currentValue = document.getElementById('value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');


const counterValue = createCounter();
function createCounter() {

  let current = 0
  

  function increment(value) {
    return (current += value)
  }

  function decrement(value) {
    if (value >= 0) {
      return (current -= value);
      
    }
    return current -= value;
  }

  return { increment, decrement }
};

increment.addEventListener('click', () => {
    let value = counterValue.increment(1);
    currentValue.textContent = value;
});

decrement.addEventListener('click', () => {
    let value = counterValue.decrement(1);
    currentValue.textContent = value;
});