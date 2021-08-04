// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
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
