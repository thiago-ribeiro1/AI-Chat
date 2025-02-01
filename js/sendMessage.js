async function sendMessage(prompt) {
    const response = await fetch("/api/proxy.js", {  // Chama a API interna
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    console.log(data);
}