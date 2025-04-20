import { useEffect, useState, useCallback } from 'react';
import * as webllm from "@mlc-ai/web-llm";
import './ui.scss';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    role: "system",
    content: "Hello, I am a TalkLLM. How can I assist you today?"
  }]);
  const [engine, setEngine] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";
    
    const initEngine = async () => {
      try {
        const newEngine = await webllm.CreateMLCEngine(
          selectedModel, {
            initProgressCallback: (progress) => {
              console.log("Initialization progress:", progress);
            }
          }
        );
        setEngine(newEngine);
      } catch (error) {
        console.error("Engine initialization failed:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    initEngine();
  }, []);

  const sendMessageToLlm = useCallback(async () => {
    if (!input.trim() || !engine) return;
    
    setIsLoading(true);
    
    const updatedMessages = [
      ...messages,
      { role: "user", content: input.trim() }
    ];
    
    setMessages(updatedMessages);
    setInput('');
    
    try {
      const reply = await engine.chat.completions.create({
        messages: updatedMessages,
      });
      
      const responseText = reply.choices[0].message.content;
      
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: responseText }
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Sorry, I encountered an error processing your request." }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, engine]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isLoading) {
      sendMessageToLlm();
    }
  };

  const visibleMessages = messages.filter(message => message.role !== "system");

  return (
    <main>
      <section>
        <div className="conversation-area">
          <div className="messages">
            {visibleMessages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                {message.content}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Ask to LLM..."
              disabled={isLoading || !engine}
            />
            <button
              onClick={sendMessageToLlm}
              disabled={isLoading || !input.trim() || !engine}
            >
              {isLoading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;