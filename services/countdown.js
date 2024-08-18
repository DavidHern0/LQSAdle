// countdown.js
import { getCharacters } from './characters.js';

export function getDailyCharacter() {
    const characters = getCharacters();
    const today = new Date();

    const dayNumber = Math.floor(today.getTime() / (24 * 60 * 60 * 1000));

    const characterIndex = dayNumber % characters.length;

    return characters[characterIndex];
}

function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const timeDifference = midnight - now;
    return timeDifference;
}

export function updateCountdown() {
    
    const countdownDiv = document.getElementById('countdown');
    const timeUntilMidnight = getTimeUntilMidnight();

    const hours = Math.floor((timeUntilMidnight % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilMidnight % (1000 * 60)) / 1000);

    countdownDiv.textContent = `Próximo personaje en: ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCountdown, 1000);
}