# AI Chat

**AI Chat** é uma aplicação web que consome a API do Gemini para interagir com os usuários via chat. A interface é desenvolvida com **HTML, CSS e JavaScript**, garantindo um **design responsivo** para diferentes dispositivos.

[Acesse Aqui](https://ai-chat-online.vercel.app)

![Image](https://github.com/user-attachments/assets/11033e5e-b1db-4ebe-a911-4a1ec35c0dc9)

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

### 🔹 2. Configurar a Chave API nas Variáveis de Ambiente
Configure a chave API como uma variável de ambiente no sistema:

#### **No Windows:**
1. Abra o **Executar** (`Win + R`), digite `sysdm.cpl` e pressione **Enter**.
2. Vá até a aba **Avançado** e clique em **Variáveis de Ambiente**.
3. Em **Variáveis do Sistema**, clique em **Novo**.
4. No campo **Nome da variável**, insira: `GOOGLE_API_KEY`.
5. No campo **Valor da variável**, insira sua chave API do Gemini.
6. Clique em **OK** e feche todas as janelas.

#### **No Linux/Mac:**
1. Abra o terminal.
2. Digite o seguinte comando e pressione **Enter**:
   ```sh
   export GOOGLE_API_KEY="SUA_CHAVE_DA_API"
   ```
3. Para tornar a variável permanente, adicione a linha acima ao arquivo `~/.bashrc` ou `~/.zshrc`.

### 🔹 3. Rodar Localmente
Para rodar localmente, abra o projeto no Visual Studio Code, acesse o main.js e substitua "SUA_CHAVE_DA_API" pela chave API gerada com o Google AI Studio, em seguida, utilize uma extensão de **Live Server** no VS Code para rodar a aplicação em http://127.0.0.1:5500/index.html
```
const API_KEY = "SUA_CHAVE_DA_API"; 
```

### 🔹 4.  Configuração da Requisição para a API Gemini
No código JavaScript (`main.js`), a requisição para a API Gemini está sendo feita através de um **proxy** na Vercel.
O endpoint utilizado atualmente está definido como:

```js
const response = await fetch("/api/proxy", {
```

Para funcionar localmente, substitua por:
```js
const response = await fetch(`${URL}?key=${API_KEY}`, {
```

## 📌 Funcionalidades
✅ Chat interativo com IA via API do Gemini  
✅ Interface responsiva para desktop e mobile  
✅ Estrutura modular e organizada    

---
📌 **Developed By:** [Thiago Ribeiro](https://github.com/thiago-ribeiro1)
