
import { CheckCircle2 } from "lucide-react";

export const Overview = () => {
  return (
    <section id="overview" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm font-mono">support-dashboard.app</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900">Active Conversations</h4>
                    <p className="text-2xl font-bold text-primary">12</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Response Time</h4>
                    <p className="text-2xl font-bold text-primary">1.2m</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Satisfaction</h4>
                    <p className="text-2xl font-bold text-primary">97%</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">AK</span>
                      </div>
                      <div>
                        <p className="font-medium">Alex Kim</p>
                        <p className="text-sm text-gray-500">Payment issue</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">2m ago</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-medium">SJ</span>
                      </div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Account setup</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">5m ago</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-medium">MP</span>
                      </div>
                      <div>
                        <p className="font-medium">Mike Peterson</p>
                        <p className="text-sm text-gray-500">Feature request</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">12m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-first lg:order-last animate-slide-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Project Overview</h2>
            <p className="mt-6 text-xl text-gray-600">
              SupportLounge is designed to make customer support effortless and efficient with modern technology.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Real-time messaging</h3>
                  <p className="text-gray-600 mt-1">
                    Connect with your customers instantly using our seamless real-time chat system with typing indicators and message timestamps.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Avatar and status indicators</h3>
                  <p className="text-gray-600 mt-1">
                    Personalize interactions with customer avatars and show agent availability with online/offline status indicators.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Modern technology stack</h3>
                  <p className="text-gray-600 mt-1">
                    Built with React, Tailwind CSS, and modern web technologies to ensure performance, scalability, and ease of use.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#" className="btn-primary inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
