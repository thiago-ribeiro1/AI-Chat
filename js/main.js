// const API_KEY = ""; 
const URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
const history = [];
const CAPACITY = 6; // Limite de mensagens no histórico


// Exibe o indicador de carregamento
function showLoading() {
    const chatContainer = document.querySelector(".chat-window .chat");
    hideLoading(); // Remove qualquer loading anterior
    chatContainer.insertAdjacentHTML("beforeend", `
        <div class="loading">
            <div class="spinner"></div>
            <p>Carregando...</p>
        </div>
    `);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Remove o indicador de carregamento
function hideLoading() {
    const loadingElement = document.querySelector(".loading");
    if (loadingElement) loadingElement.remove();
}

// Função principal para enviar mensagens ao modelo Gemini
async function sendMessage(prompt) {
    if (!prompt) return;

    history.length = 0; // Limpa o histórico antes de cada nova pergunta

    // Exibe o indicador de carregamento
    showLoading();

    // Instruções para a formatação da resposta
    const instruction = `Responda de forma clara e corretamente formatada.
    - Mantenha a pontuação correta.
    - Evite espaços desnecessários.
    - Frases bem estruturadas e coesas.
    - Escreva números e datas corretamente.
    - Não use negrito (**), itálico (_) ou símbolos especiais desnecessários.
    - Evite quebras de linha desnecessárias dentro de frases.`;

    const context = history.join(" "); // Constrói o contexto a partir do histórico
    const fullPrompt = `${context} ${instruction} ${prompt}`;

    // Configuração da requisição para a API
    const jsonRequest = {
        contents: [{ parts: [{ text: fullPrompt }], role: "user" }],
        generationConfig: { candidateCount: 1, temperature: 0.4, topP: 0.8, topK: 40 }
    };

    try {
        // Faz a requisição para a API Gemini
        const response = await fetch("/api/proxy", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonRequest)
        });

        if (!response.ok) throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        
        // Processa a resposta da API corretamente como JSON
        const jsonResponse = await response.json();
        console.log("Resposta JSON da API:", jsonResponse); // Log para depuração
        
        const result = jsonResponse?.candidates?.[0]?.content?.parts?.[0]?.text.trim() || "Erro ao processar resposta.";

        hideLoading(); // Remove o indicador de carregamento
        updateHistory(prompt, result); // Atualiza o histórico
        displayMessage("model", result); // Exibe a resposta no chat
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        hideLoading(); // Remove o indicador de carregamento em caso de erro
        displayMessage("error", "Ocorreu um erro. Tente novamente.");
    }
}

// Atualiza o histórico das mensagens
function updateHistory(userMessage, modelResponse) {
    if (history.length >= CAPACITY) history.shift(); // Remove a mensagem mais antiga
    history.push(`User: ${userMessage}`, `Gemini: ${modelResponse}`);
}

// Exibe a mensagem no chat
function displayMessage(role, message) {
    const chatContainer = document.querySelector(".chat-window .chat");
    const className = role === "user" ? "user" : role === "model" ? "model" : "error";
    chatContainer.insertAdjacentHTML("beforeend", `<div class="${className}"><p>${message}</p></div>`);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Faz scroll automático para a última mensagem
}

// Evento do botão enviar
document.querySelector(".chat-window .input-area button").addEventListener("click", () => {
    const inputField = document.querySelector(".chat-window input");
    const userMessage = inputField.value.trim();
    inputField.value = "";
    if (userMessage) {
        displayMessage("user", userMessage);
        sendMessage(userMessage);
    }
});

// Configuração dos eventos da interface
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("chat-open"); // Abre o chat automaticamente ao carregar a página
    document.querySelector(".chat-button").addEventListener("click", () => document.body.classList.add("chat-open"));
    document.querySelector(".chat-window button.close").addEventListener("click", () => document.body.classList.remove("chat-open"));
});

// Permite envio ao pressionar Enter
document.querySelector(".chat-window input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita quebra de linha no input
        document.querySelector(".chat-window .input-area button").click(); // Simula clique no botão de envio
    }
});

// Adiciona estilos CSS para o loader
const style = document.createElement("style");
style.textContent = `
    /* Estiliza o container do loading */
    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        color: #00ffff;
        margin: 10px;
    }
    
    /* Cria o spinner de carregamento */
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(61, 136, 249, 0.3); /* Define uma borda com transparência */
        border-top-color: #00ffff; /* Define a cor da borda superior para criar o efeito de rotação */
        border-radius: 50%; /* Deixa o elemento circular */
        animation: spin 1s linear infinite; /* Aplica a animação de rotação */
    }
    
    /* Define a animação de rotação do spinner */
    @keyframes spin {
        from { transform: rotate(0deg); } /* Começa sem rotação */
        to { transform: rotate(360deg); } /* Gira 360 graus para criar o efeito de rotação contínua */
    }
`;
document.head.appendChild(style);
