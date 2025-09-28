import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Medicos', href: '/medicos' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'HI' : 'EN');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 medical-shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-medical-primary">
              MedoSphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium medical-transition ${
                  isActive(item.href)
                    ? 'text-medical-primary border-b-2 border-medical-primary'
                    : 'text-neutral-600 hover:text-medical-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </Button>

            {/* Auth Links */}
            <Link to="/auth/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            
            {/* Book Demo CTA */}
            <Link to="/booking">
              <Button variant="hero" size="lg">
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium medical-transition ${
                    isActive(item.href)
                      ? 'text-medical-primary bg-medical-primary/10'
                      : 'text-neutral-600 hover:text-medical-primary hover:bg-neutral-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full justify-start"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Language: {language}
                </Button>
                
                <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;