const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");

const characters = {
    "Naruto": "¡Hola! ¡Soy Naruto Uzumaki, y voy a ser Hokage algún día!",
    "Sasuke": "No necesito hablar con tontos.",
    "Goku": "¡Hey! ¡Soy Goku! ¿Quieres entrenar conmigo?"
};

// Función para agregar mensajes al chat
function addMessageToChat(userMsg, character) {
    const userMessage = `<p><strong>Tú:</strong> ${userMsg}</p>`;
    const characterResponse = `<p><strong>${character}:</strong> ${characters[character]}</p>`;

    chatBox.innerHTML += userMessage;
    setTimeout(() => {
        chatBox.innerHTML += characterResponse;
        chatBox.scrollTop = chatBox.scrollHeight; // Desplaza el chat hacia abajo
    }, 1000);
}

// Enviar mensaje al hacer clic en el botón
sendBtn.addEventListener("click", () => {
    const userMsg = userInput.value;
    if (userMsg.trim() !== "") {
        const selectedCharacter = "Naruto"; // Puedes cambiar o permitir selección de personajes
        addMessageToChat(userMsg, selectedCharacter);
        userInput.value = "";
    }
});

// Enviar mensaje al presionar Enter
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
