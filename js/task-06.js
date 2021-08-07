const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener("input", onInput);
inputEl.addEventListener("blur", addColorInput);
function onInput(event) {
    event.preventDefault();
    const inputElem = event.target.value;
    return inputElem.length;
};

function addColorInput(elem) {
    const inputElem = elem.target.value;
    elem = inputElem.length;

    if (elem <= dataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else if (elem > dataLength) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
