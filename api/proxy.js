export default async function handler(req, res) {
    const API_KEY = process.env.GOOGLE_API_KEY; // Obtém a chave do Vercel

    if (!API_KEY) {
        return res.status(500).json({ error: "Chave da API não encontrada" });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);
}
