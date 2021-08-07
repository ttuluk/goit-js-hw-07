
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

    const addLiEl = ingredients.map(element => {
        // console.log(element);
        const liEl = document.createElement('li');
        liEl.textContent = element;
        // console.log(liEl);
        return liEl;
    });

listIngredients.append(...addLiEl);
console.log(listIngredients);
