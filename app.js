import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Create this file if you want to add custom CSS

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const botMessage = { sender: "bot", text: "Typing..." };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    // Send message to backend and get response from AI
    const aiResponse = await getAIResponse(input);
    const updatedBotMessage = { ...botMessage, text: aiResponse };

    setMessages((prevMessages) => [...prevMessages.slice(0, -1), updatedBotMessage]);
    setInput("");
  };

  const getAIResponse = async (message) => {
    try {
      const response = await axios.post("http://localhost:5001/api/chat", { message });
      return response.data.response;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, something went wrong with AI!";
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default App;
