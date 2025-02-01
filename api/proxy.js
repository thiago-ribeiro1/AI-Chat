export default async function handler(req, res) {
    const API_KEY = process.env.GOOGLE_API_KEY; // Chave vercel

    if (!API_KEY) {
        return res.status(500).json({ error: "Chave da API não encontrada" });
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Erro na API Gemini:", error);
        return res.status(500).json({ error: "Erro ao conectar com a API Gemini" });
    }
}
