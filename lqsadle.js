document.addEventListener('DOMContentLoaded', function () {

    const tried = [];
    const dataList = document.getElementById('character-options');
    const guessInput = document.getElementById('guess-input');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('results-container');
    const victoryDiv = document.getElementById('victory');

    function getCharacters() {
        const personajesLQSA = [
            {
                nombre: "Amador Rivas",
                genero: "Masculino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Maite Figueroa",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Antonio Recio",
                genero: "Masculino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Primero",
                temporadaAparicion: "1"
            },
            {
                nombre: "Berta Escobar",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Primero",
                temporadaAparicion: "1"
            },
            {
                nombre: "Javier Maroto",
                genero: "Masculino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "1"
            },
            {
                nombre: "Lola Trujillo",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "1"
            },
            {
                nombre: "Enrique Pastor",
                genero: "Masculino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Araceli Madariaga",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Mari Tere Valverde",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Gregoria Gutiérrez",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Segundo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Izaskun Sagastume",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Nines Chacón",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Primero",
                temporadaAparicion: "1"
            },
            {
                nombre: "Raquel Villanueva",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Primero",
                temporadaAparicion: "1"
            },
            {
                nombre: "Rosario Parrales",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Otros",
                temporadaAparicion: "4"
            },
            {
                nombre: "Bruno Quiroga",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Segundo",
                temporadaAparicion: "9"
            },
            {
                nombre: "Judith Becker",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "3"
            },
            {
                nombre: "Teodoro Rivas",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "7"
            },
            {
                nombre: "Alba Recio",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Segundo",
                temporadaAparicion: "8"
            },
            {
                nombre: "Coque Calatrava",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Otros",
                temporadaAparicion: "1"
            },
            {
                nombre: "Maxi Angulo",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Bajo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Estela Reynolds",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "3"
            },
            {
                nombre: "Rebeca Ortiz",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "7"
            },
            {
                nombre: "Yolanda Morcillo",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "9"
            },
            {
                nombre: "Cristina Aguilera",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Primero",
                temporadaAparicion: "1"
            },
            {
                nombre: "Leonardo Romaní",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Primero",
                temporadaAparicion: "1"
            },
            {
                nombre: "victory Rafaela",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "13"
            },
            {
                nombre: "Germán Palomares",
                genero: "Masculino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Segundo",
                temporadaAparicion: "1"
            },
            {
                nombre: "Ongombo",
                genero: "Masculino",
                hijos: "Sí",
                nacionalidad: "Africana",
                piso: "Primero",
                temporadaAparicion: "10"
            },
            {
                nombre: "Menchu Carrascosa",
                genero: "Femenino",
                hijos: "Sí",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "9"
            },
            {
                nombre: "Sergio Arias",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "1"
            },
            {
                nombre: "Joaquin Arias",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Ático",
                temporadaAparicion: "1"
            },
            {
                nombre: "Reyes Ballesteros",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: "Primero",
                temporadaAparicion: "5"
            }
        ];
        return personajesLQSA;
    }

    let currentCharacter = getCharacters()[Math.floor(Math.random() * getCharacters().length)];
    console.log(currentCharacter.nombre)

    // Función para que aparezca la lista de personajes al escribir en el input
    function handleInput(guessInput, dataList, submitBtn, getCharacters, tried) {
        guessInput.addEventListener('input', function () {
            const inputText = guessInput.value.toLowerCase();
            dataList.innerHTML = "";

            if (inputText.length >= 1) {
                const filteredCharacters = getCharacters().filter(personaje =>
                    personaje.nombre.toLowerCase().startsWith(inputText) && !tried.includes(personaje.nombre)
                );

                filteredCharacters.forEach(personaje => {
                    let option = document.createElement('option');
                    option.value = personaje.nombre;
                    dataList.appendChild(option);
                });
            }

            const match = getCharacters().some(personaje => personaje.nombre.toLowerCase() === inputText);
            submitBtn.disabled = !match;
        });
    }

    // Función que comprueba si se ha acertado el Character
    function handleSubmit(submitBtn, guessInput, getCharacters, tried, currentCharacter) {
        submitBtn.addEventListener('click', function () {
            const guess = guessInput.value.toLowerCase();
            const guessedCharacter = getCharacters().find(personaje => personaje.nombre.toLowerCase() === guess);

            if (!guessedCharacter) return;

            tried.push(guessedCharacter.nombre);

            const isCorrect = guessedCharacter.nombre.toLowerCase() === currentCharacter.nombre.toLowerCase();

            const generoHintClass = guessedCharacter.genero === currentCharacter.genero ? 'correct-hint' : 'incorrect-hint';
            const hijosHintClass = guessedCharacter.hijos === currentCharacter.hijos ? 'correct-hint' : 'incorrect-hint';
            const nacionalidadHintClass = guessedCharacter.nacionalidad === currentCharacter.nacionalidad ? 'correct-hint' : 'incorrect-hint';
            const pisoHintClass = guessedCharacter.piso === currentCharacter.piso ? 'correct-hint' : 'incorrect-hint';
            const temporadaHintClass = guessedCharacter.temporadaAparicion === currentCharacter.temporadaAparicion ? 'correct-hint' : 'incorrect-hint';

            resultDiv.innerHTML += `
                <table>
                    <tbody>
                        <tr>
                            <td><strong>${guessedCharacter.nombre}</strong></td>
                            <td class="${generoHintClass}">${guessedCharacter.genero}</td>
                            <td class="${hijosHintClass}">${guessedCharacter.hijos}</td>
                            <td class="${nacionalidadHintClass}">${guessedCharacter.nacionalidad}</td>
                            <td class="${pisoHintClass}">${guessedCharacter.piso}</td>
                            <td class="${temporadaHintClass}">${guessedCharacter.temporadaAparicion}</td>
                        </tr>
                    </tbody>
                </table>
            `;

            guessInput.value = '';
            submitBtn.disabled = true;

            if (isCorrect) {
                handleVictory(guessInput, submitBtn, victoryDiv);
            }
        });
    }

    function handleVictory(guessInput, submitBtn, victoryDiv) {
        guessInput.disabled = true;
        submitBtn.disabled = true;

        const winMessage = document.createElement('div');
        winMessage.innerHTML = "<h2>¡HAS ACERTADO!</h2>";
        winMessage.classList.add('win-message');
        victoryDiv.appendChild(winMessage);
    }

    handleInput(guessInput, dataList, submitBtn, getCharacters, tried);
    handleSubmit(submitBtn, guessInput, getCharacters, tried, currentCharacter);
});