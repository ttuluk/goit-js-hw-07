// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

//  <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

function getRandomInt() {
  max = Math.floor(256);
  return Math.round(Math.random() * max);
}


const width = 30;
const higth = 30;
const x = 10;


const divElement = document.querySelector('#boxes');
const inputElement = document.querySelector('#controls>input');
const buttonRender = document.querySelector(`[data-action="render"]`);
const buttonDestroy = document.querySelector(`[data-action="destroy"]`);

inputElement.addEventListener('input', getAmount);
buttonRender.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function getAmount(amount) {
  amount.preventDefault();
  const value = amount.target.value;
  createBoxes(value);

}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) { 
  const addDiv = document.createElement('div');
  addDiv.classList.add('newDiv')
  addDiv.style.backgroundColor = `rgba(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
  addDiv.style.width = `${width}px`;
  addDiv.style.higth = `${higth}px`;
  divElement.appendChild(addDiv);
  return addDiv;
}
}

function destroyBoxes(amount) {
  const elem = document.querySelectorAll('.newDiv');
  divElement.removeChild(...elem);
}
