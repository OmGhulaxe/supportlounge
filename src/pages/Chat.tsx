
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, LogOut, User } from "lucide-react";

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  
  // This would normally come from an API or state management
  const messages = [
    { id: 1, sender: "agent", message: "Hello! How can I help you today?", timestamp: "10:02 AM" },
    { id: 2, sender: "user", message: "Hi! I'm having an issue with my recent order.", timestamp: "10:03 AM" },
    { id: 3, sender: "agent", message: "I'm sorry to hear that. Could you please provide your order number so I can look into this for you?", timestamp: "10:04 AM" },
    { id: 4, sender: "user", message: "Sure, it's #ORD-12345.", timestamp: "10:05 AM" },
    { id: 5, sender: "agent", message: "Thank you. I can see your order and the issue now. Let me help you resolve this.", timestamp: "10:06 AM" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;
    
    // In a real app, this would send the message to an API
    // and update the messages state
    
    setMessage("");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">SL</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">SupportLounge</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 bg-gray-100 rounded-full flex items-center justify-center">
                <User size={18} />
              </div>
              <span className="font-medium text-gray-700">Customer</span>
            </div>
            
            <button 
              onClick={handleLogout} 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container-custom py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-medium">SA</span>
              </div>
              <div>
                <p className="font-medium">Support Agent</p>
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span className="text-xs text-white/80">Online</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-white/80">Avg. Response Time: 2m</div>
          </div>
          
          <div className="h-[60vh] overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-4 ${
                    msg.sender === "user" 
                      ? "bg-primary/10 text-gray-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{msg.message}</p>
                  <p className="mt-1 text-xs text-gray-500 text-right">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-100 p-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-primary text-white p-3 rounded-lg hover:bg-primary/90"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
