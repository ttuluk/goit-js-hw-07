const input = document.querySelector("#font-size-control");

const span = document.getElementById('text')

input.addEventListener("input", onInputRange);
function onInputRange(event) {
    const inputElem = event.target.value;

    span.style.fontSize = `${inputElem}%`;
};




