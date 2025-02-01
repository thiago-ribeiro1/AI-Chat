async function sendMessage(prompt) {
    try {
        const response = await fetch("/api/proxy", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();  // Converte a resposta para JSON
        console.log("Resposta da API:", data);

        return data;  // Retorna a resposta processada para uso no código
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
    }
}
