import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Booking', href: '/booking' },
    { name: 'Medicos', href: '/medicos' },
    { name: 'Research', href: '/research' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' }
  ];

  const dashboardLinks = [
    { name: 'Patient Dashboard', href: '/dashboard/patient' },
    { name: 'Doctor Dashboard', href: '/dashboard/doctor' },
    { name: 'Admin Dashboard', href: '/dashboard/admin' },
    { name: 'Pharmacy', href: '/pharmacy' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">MedoSphere</span>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Digitizing Rural Healthcare for India's Future. Connecting patients, doctors, and healthcare providers across rural India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-medical-accent" />
                <span className="text-sm">+91 1800-MEDOSPHERE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-medical-accent" />
                <span className="text-sm">hello@medosphere.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-medical-accent" />
                <span className="text-sm">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-accent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white medical-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-accent">Dashboards</h3>
            <ul className="space-y-2">
              {dashboardLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white medical-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-accent">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white medical-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-neutral-400 hover:text-medical-accent medical-transition"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-neutral-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-medical-accent" />
              <span>for Rural India</span>
            </div>
            
            <div className="text-neutral-400 text-sm">
              © 2024 MedoSphere. All rights reserved.
            </div>
            
            <div className="text-neutral-400 text-sm">
              Transforming Healthcare Access
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;