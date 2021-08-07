const images = [
{
url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'White and Black Long Fur Cat',
},
{
url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
},
{
url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Group of Horses Running',
},
];
// <ul id="gallery"></ul>
const parentList = document.querySelector('#gallery');

function addElements(array) {
    const items = array.map((el) => {
        const itemEl = document.createElement('li');

        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', el.url);
        imgEl.setAttribute('alt', el.alt);
        imgEl.setAttribute('width', 300);
        itemEl.append(imgEl);
      
        return itemEl;
    })
    return items;
}
const item = addElements(images);
parentList.append(...item);
console.log(parentList);