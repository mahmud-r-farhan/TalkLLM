# 🧠 TalkLLM - A Local LLM Chat App using WebLLM

Welcome to **TalkLLM**, a lightweight and modern chat interface powered by [MLC AI WebLLM](https://mlc.ai/web-llm/). This app allows you to run a **Large Language Model (LLM) directly in your browser** with **no backend or server required**.

Built using **React**, this app uses the **Llama 3 model** locally for a private and blazing-fast AI assistant experience.

---

## 🚀 Features

- ✅ Local-first LLM (no internet API calls)
- 💬 Seamless chat experience with context
- 📦 Runs directly in the browser using `@mlc-ai/web-llm`
- 🛡️ No data sent to servers
- ⚡ Clean, modern UI with loading indicators and error handling

---

## 📸 Screenshot

![screenshot](./screenshot.png)

---

## 🛠️ Getting Started


### Prerequisites

Before running this project, make sure your system meets the following requirements:

#### 🖥️ System Requirements

- ✅ A browser that supports **WebGPU**
  - Recommended: **Latest Chrome**, **Edge**, or **Safari** 
  - [Check if your browser supports WebGPU](https://webgpu.report/)

- ✅ A device with **WebAssembly (Wasm)** support (most modern devices have this by default)

#### ⚙️ Development Environment

- Node.js (v16 or above recommended)
- npm or yarn


### Installation

```bash
https://github.com/mahmud-r-farhan/TalkLLM.git
cd TalkLLM
npm install

```

### Running Locally

```bash
npm run dev

```

The app will open at `http://localhost:5173`.

----------

## 🧠 Model

This app uses:

```
Llama-3.1-8B-Instruct-q4f32_1-MLC

```

The model is initialized locally using:

```js
webllm.CreateMLCEngine(modelName, { initProgressCallback });

```

No server, no data sharing — everything runs in the browser.

----------

## 🧾 Project Structure

```
src/
├── App.jsx          # Main chat component
├── ui.scss          # Styling
```

----------

## ⚙️ Customization

You can easily switch to another supported model by updating this line:

```js
const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";

```

Refer to [MLC model catalog](https://mlc.ai/web-llm/docs/#model-catalog) for available models.

----------

## 📦 Dependencies

-   React
    
-   @mlc-ai/web-llm
    
-   Sass (`.scss` support for UI styling)
    

Install Sass if needed:

```bash
npm install sass

```
or,

```bash
npm i sass-embedded

```

----------

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues or submit improvements.

----------

## Credits

-   [MLC AI](https://mlc.ai/web-llm/) for the awesome WebLLM engine

----------

> 🧪 Tip: You can use this as a local AI assistant app without relying on OpenAI or any third-party API.
