# AI Chat

**AI Chat** é uma aplicação web que consome a API do Gemini para interagir com os usuários via chat. A interface é desenvolvida com **HTML, CSS e JavaScript puro**, garantindo um **design responsivo** para diferentes dispositivos.

## 🚀 Tecnologias Utilizadas
- **HTML5** - Estruturação da aplicação
- **CSS3** - Estilização responsiva
- **JavaScript** - Lógica do chat

## 🔑 Chave de API Necessária
Para rodar este projeto em outra máquina, é necessário ter uma **chave API do Gemini**, que pode ser obtida gratuitamente no Google AI Studio.
🔗 **Acesse aqui:** [Google AI Studio](https://aistudio.google.com/)

## 📦 Como Rodar o Projeto

### 🔹 1. Clonar o repositório
```sh
 git clone https://github.com/thiago-ribeiro1/AI-Chat.git
 cd AI-Chat
```

### 🔹 2. Configurar a API Key no Vercel
1. Vá até o [Vercel](https://vercel.com/) e acesse seu projeto.
2. Em **Settings → Environment Variables**, adicione:
   - **Key:** `GOOGLE_API_KEY`
   - **Value:** `SUA_CHAVE_DA_API`
3. Salve e faça o redeploy do projeto.

### 🔹 3. Rodar Localmente
Para rodar localmente, crie um arquivo `.env.local` na raiz do projeto e adicione:
```
GOOGLE_API_KEY=SUA_CHAVE_AQUI
```
Em seguida, abra o arquivo `index.html` no navegador ou utilize uma extensão de **Live Server** no VS Code.


## 📌 Funcionalidades
✅ Chat interativo com IA via API do Gemini  
✅ Interface responsiva para desktop e mobile  
✅ Estrutura modular e organizada    

---
📌 **Autor:** [Thiago Ribeiro](https://github.com/thiago-ribeiro1)
