
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, LogOut, User, Users, Search, Bell, Clock } from "lucide-react";

const SupportChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(1);
  
  const chats = [
    {
      id: 1, 
      name: "John Doe", 
      avatar: "JD", 
      lastMessage: "I'm having an issue with my recent order.", 
      time: "10:05 AM", 
      unread: 0,
      status: "active"
    },
    {
      id: 2, 
      name: "Emma Smith", 
      avatar: "ES", 
      lastMessage: "When will my order arrive?", 
      time: "9:42 AM", 
      unread: 2,
      status: "active"
    },
    {
      id: 3, 
      name: "Michael Brown", 
      avatar: "MB", 
      lastMessage: "Thanks for your help!", 
      time: "Yesterday", 
      unread: 0,
      status: "idle"
    },
    {
      id: 4, 
      name: "Sarah Wilson", 
      avatar: "SW", 
      lastMessage: "I need help with refund process.", 
      time: "Yesterday", 
      unread: 0,
      status: "offline"
    },
  ];

  // Example messages for the active chat
  const messages = [
    { id: 1, sender: "user", message: "Hello! I'm having an issue with my recent order.", timestamp: "10:02 AM" },
    { id: 2, sender: "agent", message: "Hi John! I'm sorry to hear that. Could you please provide your order number so I can look into this for you?", timestamp: "10:03 AM" },
    { id: 3, sender: "user", message: "Sure, it's #ORD-12345.", timestamp: "10:04 AM" },
    { id: 4, sender: "agent", message: "Thank you. I can see your order was shipped yesterday but there seems to be a delay with the courier. Let me contact them right away.", timestamp: "10:05 AM" },
    { id: 5, sender: "user", message: "That would be great, thank you!", timestamp: "10:06 AM" },
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
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-primary relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 bg-accent/20 rounded-full flex items-center justify-center">
                <User size={18} className="text-accent" />
              </div>
              <span className="font-medium text-gray-700">Support Agent</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
          {/* Sidebar */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Conversations</h2>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Users size={16} />
                  <span>{chats.filter(c => c.status === "active").length} online</span>
                </div>
              </div>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search conversations..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(80vh-100px)]">
              {chats.map((chat) => (
                <div 
                  key={chat.id} 
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${activeChat === chat.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}
                  onClick={() => setActiveChat(chat.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="font-medium text-gray-700">{chat.avatar}</span>
                      </div>
                      <span 
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                          chat.status === "active" ? "bg-green-500" : 
                          chat.status === "idle" ? "bg-yellow-500" : "bg-gray-400"
                        }`}
                      ></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && (
                      <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Area */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium text-gray-700">JD</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">John Doe</h3>
                  <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-500">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span className="text-sm">10:06 AM</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}
                >
                  {msg.sender === "user" && (
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mr-2">
                      <span className="font-medium text-xs text-gray-700">JD</span>
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "user" 
                        ? "bg-gray-100 text-gray-800" 
                        : "bg-primary/10 text-gray-800"
                    }`}
                  >
                    <p>{msg.message}</p>
                    <p className="mt-1 text-xs text-gray-500 text-right">{msg.timestamp}</p>
                  </div>
                  {msg.sender === "agent" && (
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center ml-2">
                      <span className="font-medium text-xs text-accent">SA</span>
                    </div>
                  )}
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
        </div>
      </main>
    </div>
  );
};

export default SupportChat;
