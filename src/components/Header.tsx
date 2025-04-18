
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">CE</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">ChatEase</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/#overview" className="text-gray-700 hover:text-primary transition-colors">
              Overview
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-primary hover:text-primary/90 font-medium transition-colors">
              Log In
            </Link>
            <Link to="/signup" className="btn-primary animate-fade-in">
              Sign Up
            </Link>
          </div>
        </div>
        
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className="text-gray-700 hover:text-primary transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#overview" 
              className="text-gray-700 hover:text-primary transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Overview
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Link 
                to="/login" 
                className="text-primary hover:text-primary/90 font-medium transition-colors p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
