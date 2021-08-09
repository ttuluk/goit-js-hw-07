function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max-min) + min);
}

const divElement = document.querySelector('#boxes');
const inputElement = document.querySelector('#controls>input');
const buttonRender = document.querySelector(`[data-action="render"]`);
const buttonDestroy = document.querySelector(`[data-action="destroy"]`);

buttonRender.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  amount = inputElement.value;
 
  for (let i = 0; i < amount; i += 1) {
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    
  const addDiv = document.createElement('div');
  addDiv.classList.add('newDiv')
  addDiv.style.backgroundColor = `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  addDiv.style.width = `${width}px`;
  addDiv.style.height = `${height}px`;
  divElement.appendChild(addDiv);
  }
  inputElement.value = null;
}

function destroyBoxes() {
  while (divElement.firstChild)
  divElement.removeChild(divElement.firstChild);
};
