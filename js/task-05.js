const nameInput = document.querySelector("#name-input");
const spanName = document.querySelector('#name-output');

nameInput.addEventListener("input", onInputSubmit);

function onInputSubmit(event) {
    event.preventDefault();
   const userName = event.target.value;
    spanName.textContent = userName;
    }






