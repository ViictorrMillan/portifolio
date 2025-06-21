const textoDinamico = document.getElementById('texto-dinamico');

const frases = [
    'Desenvolvedor Front-End',
    'Estudante de Engenharia de Software',
    'Aluno do Projeto ONE'
];

let index = 0; // Índice da frase atual
let charIndex = 0; // Índice do caractere atual
let isDeleting = false; // Flag para verificar se está apagando
const typingSpeed = 100; // Velocidade de digitação
const deletingSpeed = 50; // Velocidade de apagar
const pauseTime = 1500; // Pausa após a frase completa

function typeEffect() {
    const currentPhrase = frases[index]; // Define a frase atual

    if (!isDeleting) {
        // Digitar o texto
        if (charIndex <= currentPhrase.length) {
            textoDinamico.textContent = currentPhrase.substring(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            // Pausa após terminar de digitar a frase
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
        }
    } else {
        // Apagar o texto
        if (charIndex > 0) {
            textoDinamico.textContent = currentPhrase.substring(0, charIndex);
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            // Passar para a próxima frase
            isDeleting = false;
            index = (index + 1) % frases.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }


}

document.addEventListener("DOMContentLoaded", typeEffect);

