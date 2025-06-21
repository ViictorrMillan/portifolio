const textoDinamico = document.getElementById('texto-dinamico');

const frases = [
    'Desenvolvedor Front-End',
    'Estudante de Engenharia de Software',
    'Aluno do Projeto ONE'
];

let index = 0; 
let charIndex = 0;
let isDeleting = false; 
const typingSpeed = 100; 
const deletingSpeed = 50; 
const pauseTime = 1500; 

function typeEffect() {
    const currentPhrase = frases[index]; 

    if (!isDeleting) {
       
        if (charIndex <= currentPhrase.length) {
            textoDinamico.textContent = currentPhrase.substring(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            
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

