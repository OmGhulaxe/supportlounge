
import { MessageSquare, Clock, Shield, Zap, Users, Globe } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Real-time Messaging",
      description: "Connect with customers instantly with seamless, real-time chat functionality.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Typing Indicators",
      description: "Show when agents are typing to improve the conversation experience.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Authentication",
      description: "Keep communications safe with our secure login and authentication systems.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast",
      description: "Built with modern technologies to ensure quick response times.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description: "Multiple agents can work together to provide the best customer service.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Cross-Platform",
      description: "Access from any device with our responsive and adaptive design.",
    },
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to provide exceptional customer support with ChatEase
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 rounded-lg p-3 inline-block">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
