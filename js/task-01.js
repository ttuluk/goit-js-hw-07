
const elem = document.querySelector('ul#categories');
const listItem = elem.querySelectorAll('h2');
const itemLength = listItem.length;
console.log(`В списке ${itemLength} категории.`);
const itemEl = elem.querySelectorAll('li.item');
const title = itemEl.forEach(element => {

        const titleEl = element.querySelector('h2');
        const liItem = element.querySelectorAll('li');
    console.log('Категория:', titleEl.textContent)
    console.log('Количество элементов:', liItem.length);
});
