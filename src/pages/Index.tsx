import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Overview } from "@/components/Overview";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Overview />
        
        <section className="section bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your customer service?</h2>
            <p className="mt-4 text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses providing exceptional support experiences with ChatEase.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/signup" 
                className="px-8 py-4 bg-white text-primary rounded-md font-medium hover:bg-opacity-95 transition-all"
              >
                Get Started for Free
              </a>
              <a 
                href="/login" 
                className="px-8 py-4 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-all"
              >
                Log In
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <div className="fixed bottom-6 right-6">
        <button className="bg-accent text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-accent/90 transition-all">
          <MessageCircle size={24} />
        </button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
