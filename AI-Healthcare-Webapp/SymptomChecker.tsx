// SymptomChat.tsx
import { useState } from "react";

const SymptomChat = () => {
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! Tell me your symptoms." }]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5000/symptom-checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }), // Changed from symptoms to message
      });

      const data = await response.json();
      const aiMessage = { role: "assistant", content: data.reply };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const aiMessage = { role: "assistant", content: "Failed to get response from server." };
      setMessages(prev => [...prev, aiMessage]);
    }
    
    setInput("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="bg-gray-100 p-4 rounded-md h-80 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`my-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-2 py-1 rounded-md shadow ${
              msg.role === "user" ? "bg-blue-500 text-white" : "bg-white"
            }`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <input
        className="w-full mt-2 p-2 border rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your symptoms..."
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Send
      </button>
    </div>
  );
};

export default SymptomChat;