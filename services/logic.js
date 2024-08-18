// logic.js

export function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}

export function disableInput(input) {
    input.classList.add('disabled');
    input.disabled = true;
}

export function enableInput(input) {
    input.classList.remove('disabled');
    input.disabled = false;
}