
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Lock } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">Indigo</span>Notes
              </span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#security" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Security
            </a>
            <a href="https://drive.google.com/file/d/1wGJru64vIsCr5fMgduHju7-UZwJ_BnJS/view?usp=sharing" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Privacy Policy
            </a>
            <a href="https://app.indigonotes.com/app">
              <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                Log in
              </Button>
            </a>
            <a href="https://app.indigonotes.com/register">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Sign up for free
              </Button>
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg border-t">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 hover:text-indigo-600">
              Features
            </a>
            <a href="#security" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 hover:text-indigo-600">
              Security
            </a>
            <div className="pt-4 pb-3 border-t border-indigo-100">
              <div className="flex items-center px-5 space-x-3">
                <a href="https://app.indigonotes.com/app">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Login
                  </Button>
                </a>
              </div>
              <div className="mt-3 px-5">
                <Button className="w-full justify-center bg-indigo-600 hover:bg-indigo-700">
                  Sign up for free
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
