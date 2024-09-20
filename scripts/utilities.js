function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function getInputNumById(id) {
    const inputNum = Number(document.getElementById(id).value);
    return inputNum;
}

function getTextNumById(id) {
    const textNum = Number(document.getElementById(id).innerText.replace(/[$,]/g, ''))
    return textNum;
}

function setEmptyInput(id) {
    const emptyInput = document.getElementById(id);
    emptyInput.value = "";
    return emptyInput;
}

document.getElementById("cash-in-btn").addEventListener("click", () => {
    document.getElementById("cash-in").classList.add('hidden');
    document.getElementById("cash-out").classList.add('hidden');
    document.getElementById("transaction").classList.add('hidden');
    document.getElementById("cash-in").classList.remove('hidden');
    document.getElementById("form").classList.remove('hidden')
});
document.getElementById("cash-out-btn").addEventListener("click", () => {
    document.getElementById("cash-out").classList.add('hidden');
    document.getElementById("cash-in").classList.add('hidden');
    document.getElementById("transaction").classList.add('hidden');
    document.getElementById("cash-out").classList.remove('hidden');
    document.getElementById("form").classList.remove('hidden')
});

document.getElementById("transaction-btn").addEventListener("click", () => {
    document.getElementById("form").classList.add('hidden');
    document.getElementById("transaction").classList.remove('hidden');
})