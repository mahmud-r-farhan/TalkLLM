import { useEffect, useState } from 'react';
import './ui.scss'

function App() {

const [messages, setMessages] = useState([{
    role: "system",
    content: "Hello, I am a chatbot. How can I assist you today?"

    }, {
        role: "user",
        content: "Hello, I am a user. How can I assist you today?"
    }, {
        role: "assistant",
        content: "Hello, I am a chatbot. How can I assist you today?"
    }, {
        role: "user",
        content: "Hello, I am a user. How can I assist you today?"
    }, {
        role: "assistant",
        content: "Hello, I am a chatbot. How can I assist you today?"
    }
    ]);


    return (
        <main>
            <section>
                <div className='conversation-area'>
                    <div className='messages'>
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.role}`}>
                                {message.content}
                            </div>
                        ))}

                    </div>
                    <div className='input-area'>
                        <input type="text" placeholder='Ask...'/>
                        <button>Send</button>

                    </div>

                </div>
            </section>
        </main>
    );
};

export default App;