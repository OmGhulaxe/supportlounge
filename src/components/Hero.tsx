
import { Link } from "react-router-dom";
import { MessageSquare, Users, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <div className="hero-gradient">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Make customer support <span className="text-primary">effortless</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              ChatEase helps you provide exceptional customer service with real-time chat, agent availability, and seamless communication.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup" className="btn-primary text-center">
                Get Started
              </Link>
              <Link to="/login" className="btn-secondary text-center">
                Log In
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <MessageSquare className="text-primary" size={20} />
                <span className="text-gray-700">Real-time Chat</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-primary" size={20} />
                <span className="text-gray-700">Team Collaboration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-primary" size={20} />
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in">
            <div className="relative bg-white p-4 rounded-2xl shadow-xl w-full max-w-md">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-medium">JD</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">John Doe</p>
                      <div className="flex items-center space-x-1">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-xs text-gray-500">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Support Agent</div>
                </div>
                <div className="space-y-3">
                  <div className="bg-primary/10 rounded-lg p-3 text-sm text-gray-800 max-w-[80%]">
                    Hello! How can I help you today?
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-800 max-w-[80%] ml-auto">
                    Hi! I'm having trouble with my recent order.
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 text-sm text-gray-800 max-w-[80%]">
                    I'd be happy to help you with that. Can you please provide your order number?
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 rounded-md border border-gray-200 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="ml-2 bg-primary text-white p-2 rounded-md">
                    Send
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 h-24 w-24 bg-accent rounded-br-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
