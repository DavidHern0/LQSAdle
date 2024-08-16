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
                hijos: 4,
                nacionalidad: "Española",
                piso: ["Garaje", "Caravana", "Bajo A", "1º B", "2º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Maite Figueroa",
                genero: "Femenino",
                hijos: 4,
                nacionalidad: "Española",
                piso: ["Garaje", "Bajo A", "1º A", "2º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Antonio Recio",
                genero: "Masculino",
                hijos: 2,
                nacionalidad: "Española",
                piso: ["Bajo B", "1º C"],
                temporadaAparicion: 1
            },
            {
                nombre: "Berta Escobar",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["1º C", "2º C"],
                temporadaAparicion: 1
            },
            {
                nombre: "Javier Maroto",
                genero: "Masculino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Bajo A", "2º B", "Ático B"],
                temporadaAparicion: 1
            },
            {
                nombre: "Lola Trujillo",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Ático B"],
                temporadaAparicion: 1
            },
            {
                nombre: "Enrique Pastor",
                genero: "Masculino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Bajo B", "Ático A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Araceli Madariaga",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Bajo B", "1º C", "2º B"],
                temporadaAparicion: 1
            },
            {
                nombre: "Mari Tere Valverde",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Bajo A", "2º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Izaskun Sagastume",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Bajo A", "2º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Vicente Maroto",
                genero: "Masculino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["2º B", "Ático B"],
                temporadaAparicion: 1
            },
            {
                nombre: "Gregoria Gutiérrez",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["2º B"],
                temporadaAparicion: 1
            },
            {
                nombre: "Nines Chacón",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["1º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Raquel Villanueva",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["1º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Rosario Parrales",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Fuera", "1º C"],
                temporadaAparicion: 4
            },
            {
                nombre: "Bruno Quiroga",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Bajo B", "1º B"],
                temporadaAparicion: 9
            },
            {
                nombre: "Judith Becker",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Bajo B", "Ático A"],
                temporadaAparicion: 3
            },
            {
                nombre: "Teodoro Rivas",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Bajo A", "1º C", "2º A"],
                temporadaAparicion: 7
            },
            {
                nombre: "Alba Recio",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Bajo B", "1º C", "2º A"],
                temporadaAparicion: 8
            },
            {
                nombre: "Coque Calatrava",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Caravana", "Bajo B", "1º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Maxi Angulo",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Caravana", "Bajo B"],
                temporadaAparicion: 1
            },
            {
                nombre: "Estela Reynolds",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Bajo A", "Ático B"],
                temporadaAparicion: 3
            },
            {
                nombre: "Fermín Trujillo",
                genero: "Masculino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["Bajo A", "2º B", "Ático B"],
                temporadaAparicion: 6
            },
            {
                nombre: "Rebeca Ortiz",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Ático A"],
                temporadaAparicion: 7
            },
            {
                nombre: "Yolanda Morcillo",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Bajo B", "Ático A"],
                temporadaAparicion: 9
            },
            {
                nombre: "José 'Josito' Morcillo",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Fuera", "Ático A"],
                temporadaAparicion: 9
            },
            {
                nombre: "Cristina Aguilera",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["1º A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Leonardo Romaní",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["1º B"],
                temporadaAparicion: 1
            },
            {
                nombre: "Germán Palomares",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["2º C"],
                temporadaAparicion: 1
            },
            {
                nombre: "Ongombo",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Africana",
                piso: ["1º C"],
                temporadaAparicion: 10
            },
            {
                nombre: "Menchu Carrascosa",
                genero: 1,
                hijos: "Sí",
                nacionalidad: "Española",
                piso: ["Bajo B", "2º C", "Ático A"],
                temporadaAparicion: 9
            },
            {
                nombre: "Sergio Arias",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Bajo A", "Ático A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Joaquin Arias",
                genero: "Masculino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["Ático A"],
                temporadaAparicion: 1
            },
            {
                nombre: "Reyes Ballesteros",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["2º B"],
                temporadaAparicion: 5
            },
            {
                nombre: "Fina Palomares",
                genero: "Femenino",
                hijos: 1,
                nacionalidad: "Española",
                piso: ["2º C"],
                temporadaAparicion: 8
            },
            {
                nombre: "Violeta Recio",
                genero: "Femenino",
                hijos: "No",
                nacionalidad: "Española",
                piso: ["1º C"],
                temporadaAparicion: 2
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

    function arraysAreEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((value, index) => value === arr2[index]);
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

            let pisoHintClass = 'incorrect-hint';
            if (arraysAreEqual(guessedCharacter.piso, currentCharacter.piso)) {
                pisoHintClass = 'correct-hint';
            } else if (guessedCharacter.piso.some(piso => currentCharacter.piso.includes(piso))) {
                pisoHintClass = 'midCorrect-hint';
            }

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