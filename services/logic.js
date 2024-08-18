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

export function createConfetti() {
    const confettiCount = 200;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;

        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}
