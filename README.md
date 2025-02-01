# AI Chat

**AI Chat** é uma aplicação web que consome a API do Gemini para interagir com os usuários via chat. A interface é desenvolvida com **HTML, CSS e JavaScript puro**, garantindo um **design responsivo** para diferentes dispositivos.

## 📁 Estrutura do Projeto
A estrutura do diretório segue a seguinte organização:

```
AI CHAT/
│-- api/
│   ├── proxy.js          # Arquivo backend para esconder a API Key
│
│-- css/
│   ├── style.css         # Estilos da interface
│
│-- icon/
│   ├── (ícones do projeto)
│
│-- img/
│   ├── (imagens do projeto)
│
│-- js/
│   ├── main.js           # Script principal da aplicação
│   ├── sendMessage.js    # Gerencia o envio de mensagens ao backend
│
│-- index.html            # Página principal do chat
```

## 🚀 Tecnologias Utilizadas
- **HTML5** - Estruturação da aplicação
- **CSS3** - Estilização responsiva
- **JavaScript Puro** - Lógica do chat
- **Vercel** - Hospedagem e variáveis de ambiente

## 📦 Como Rodar o Projeto

### 🔹 1. Clonar o repositório
```sh
 git clone https://github.com/seu-usuario/ai-chat.git
 cd ai-chat
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

## 🔑 Chave de API Necessária
Para rodar este projeto em outra máquina, é necessário ter uma **chave API do Gemini**, que pode ser obtida gratuitamente no Google AI Studio.

🔗 **Acesse aqui:** [Google AI Studio](https://aistudio.google.com/)

## 📌 Funcionalidades
✅ Chat interativo com IA via API do Gemini  
✅ Interface responsiva para desktop e mobile  
✅ Estrutura modular e organizada  
✅ Backend ocultando a API Key para segurança  

## 🌍 Deploy no Vercel
O projeto pode ser facilmente hospedado no **Vercel**. Basta conectar ao GitHub e configurar as variáveis de ambiente corretamente.

---
📌 **Autor:** Seu Nome | 🚀 Desenvolvido com HTML, CSS e JS Puro
