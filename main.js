// main.js
import { getCharacters } from './services/characters.js';
import { arraysAreEqual, createConfetti, enableInput, disableInput } from './services/logic.js';

document.addEventListener('DOMContentLoaded', function () {

    const tried = [];
    const dataList = document.getElementById('character-options');
    const guessInput = document.getElementById('guess-input');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('results-container');
    const victoryDiv = document.getElementById('victory');

    let currentCharacter = getCharacters()[Math.floor(Math.random() * getCharacters().length)];
    console.log(currentCharacter.nombre)

    // Función para que aparezca la lista de personajes al escribir en el input
    function handleInput(guessInput, dataList, submitBtn, getCharacters, tried) {
        guessInput.addEventListener('input', function () {
            const inputText = guessInput.value.toLowerCase();
            dataList.innerHTML = "";

            if (inputText.length >= 1) {
                const filteredCharacters = getCharacters().filter(personaje =>
                    (personaje.nombre.toLowerCase().startsWith(inputText) && !tried.includes(personaje.nombre)) ||
                    (personaje.apodo && personaje.apodo.toLowerCase().startsWith(inputText) && !tried.includes(personaje.apodo))
                );

                filteredCharacters.forEach(personaje => {
                    let option = document.createElement('option');
                    option.value = personaje.nombre;
                    option.textContent = (personaje.apodo && personaje.apodo.toLowerCase().startsWith(inputText) ? ` (${personaje.apodo})` : '');
                    dataList.appendChild(option);
                });
            }

            const match = getCharacters().some(personaje =>
                (personaje.nombre.toLowerCase() === inputText && !tried.includes(personaje.nombre)) ||
                (personaje.apodo && personaje.apodo.toLowerCase() === inputText && !tried.includes(personaje.apodo))
            );
            submitBtn.disabled = !match;
        });
    }

    // Función que comprueba si se ha acertado el Character
    function handleSubmit(submitBtn, guessInput, getCharacters, tried, currentCharacter) {
        submitBtn.addEventListener('click', function () {
            disableInput(guessInput);
    
            const guess = guessInput.value.toLowerCase();
            const guessedCharacter = getCharacters().find(personaje => personaje.nombre.toLowerCase() === guess);
    
            if (!guessedCharacter) {
                enableInput(guessInput);
                return;
            }
    
            tried.push(guessedCharacter.nombre);
            tried.push(guessedCharacter.apodo);
    
            const isCorrect = guessedCharacter.nombre.toLowerCase() === currentCharacter.nombre.toLowerCase();
    
            let generoHintClass = 'incorrect-hint';
            if (arraysAreEqual(guessedCharacter.genero, currentCharacter.genero)) {
                generoHintClass = 'correct-hint';
            } else if (guessedCharacter.genero.some(genero => currentCharacter.genero.includes(genero))) {
                generoHintClass = 'midCorrect-hint';
            }
    
            const hijosHintClass = guessedCharacter.hijos === currentCharacter.hijos ? 'correct-hint' : 'incorrect-hint';
            const nacionalidadHintClass = guessedCharacter.nacionalidad === currentCharacter.nacionalidad ? 'correct-hint' : 'incorrect-hint';
    
            let pisoHintClass = 'incorrect-hint';
            if (arraysAreEqual(guessedCharacter.piso, currentCharacter.piso)) {
                pisoHintClass = 'correct-hint';
            } else if (guessedCharacter.piso.some(piso => currentCharacter.piso.includes(piso))) {
                pisoHintClass = 'midCorrect-hint';
            }
    
            let ocupacionHintClass = 'incorrect-hint';
            if (arraysAreEqual(guessedCharacter.ocupacion, currentCharacter.ocupacion)) {
                ocupacionHintClass = 'correct-hint';
            } else if (guessedCharacter.ocupacion.some(ocupacion => currentCharacter.ocupacion.includes(ocupacion))) {
                ocupacionHintClass = 'midCorrect-hint';
            }
    
            const temporadaHintClass = guessedCharacter.temporadaAparicion === currentCharacter.temporadaAparicion ? 'correct-hint' : 'incorrect-hint';
    
            let arrowClass;
            if (guessedCharacter.temporadaAparicion > currentCharacter.temporadaAparicion) {
                arrowClass = 'arrow arrow-down';
            } else if (guessedCharacter.temporadaAparicion < currentCharacter.temporadaAparicion) {
                arrowClass = 'arrow arrow-up';
            } else {
                arrowClass = '';
            }
    
            const newResultHTML = `
                <table>
                    <tbody>
                        <tr>
                            <td class="name fade-in"><strong>${guessedCharacter.nombre}</strong></td>
    
                            <td class="${generoHintClass} fade-in">
                                ${guessedCharacter.genero.map(genero => genero).join('<br>')}
                            </td>
    
                            <td class="${hijosHintClass} fade-in">${guessedCharacter.hijos}</td>
                            <td class="${nacionalidadHintClass} fade-in">${guessedCharacter.nacionalidad}</td>
    
                            <td class="scroll-cell ${pisoHintClass} fade-in">
                                <div>${guessedCharacter.piso.map(piso => piso).join('<br>')}</div>
                            </td>
    
                            <td class="scroll-cell ${ocupacionHintClass} fade-in">
                                <div>${guessedCharacter.ocupacion.map(ocupacion => ocupacion).join('<br>')}</div>
                            </td>
    
                            <td class="${temporadaHintClass} ${arrowClass} fade-in">${guessedCharacter.temporadaAparicion}</td>
                        </tr>
                    </tbody>
                </table>
            `;
    
            resultDiv.innerHTML += newResultHTML;
            resultDiv.scrollTop = -1000;
    
            const fadeIns = document.querySelectorAll('.fade-in');
            fadeIns.forEach(td => {
                td.addEventListener('animationend', () => {
                    td.classList.remove('fade-in');
                });
            });
    
            guessInput.value = '';
            submitBtn.disabled = true;
    
            const lastAnimatedCell = document.querySelector('td:nth-child(7).fade-in');
    
            if (lastAnimatedCell) {
                lastAnimatedCell.addEventListener('animationend', () => {
                    if (isCorrect) {
                        handleVictory(guessInput, submitBtn, victoryDiv);
                    }
                    enableInput(guessInput);
                });
            } else {
                enableInput(guessInput); 
            }
        });
    }

    function handleVictory(guessInput, submitBtn, victoryDiv) {
        guessInput.disabled = true;
        submitBtn.disabled = true;
        guessInput.style.display = 'none';
        submitBtn.style.display = 'none';

        const winMessage = document.createElement('div');
        winMessage.innerHTML = "<h2>¡HAS ACERTADO!</h2>";
        winMessage.classList.add('win-message');
        victoryDiv.appendChild(winMessage);
        createConfetti();
    }

    handleInput(guessInput, dataList, submitBtn, getCharacters, tried);
    handleSubmit(submitBtn, guessInput, getCharacters, tried, currentCharacter);
});