import { Link } from "react-router-dom";
import { Github, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">CE</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">ChatEase</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Modern customer support platform that helps you connect with your customers in real-time.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com" className="text-gray-500 hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/#features" className="text-gray-600 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/#overview" className="text-gray-600 hover:text-primary transition-colors">Overview</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} ChatEase. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-gray-600 hover:text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
