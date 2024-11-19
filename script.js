function goTo(page) {
    location.href = page;
}

function welcomeUser() {
    const name = prompt("¿Cuál es tu nombre?");
    document.getElementById("welcome-message").innerText = `¡Bienvenido a la página, ${name}!`;
    document.getElementById("user-name").innerText = `Su nombre es: ${name}`;
}

function checkAge() {
    const age = document.getElementById("age-input").value;
    const message = age > 20 ? "Eres mayor de 20 años." : "Eres menor de 20 años.";
    document.getElementById("age-message").innerText = message;
}

function changeImage(imgElement, newSrc) {
    imgElement.src = newSrc;
}

function performOperation(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (operation === 'Multiplicación') {
        result = num1 * num2;
    } else if (operation === 'Exponente 2') {
        result = num1 ** 2; // Elevar al cuadrado
    } else if (operation === 'Resta') {
        result = num1 - num2;
    }
    
    alert(`El resultado de ${operation} es: ${result}`);
}

// Llamar a la función de bienvenida en la página principal
if (document.title === "Página Principal") {
    window.onload = welcomeUser;
}

