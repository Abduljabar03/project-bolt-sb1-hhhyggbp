import { Phone, Instagram } from 'lucide-react';
import NajmLogo from '../images/Najm Logo.svg';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={NajmLogo} alt="Najm Air" className="h-10 w-auto" />
              <span className="text-xl font-bold">Najm Air</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed">
              A trusted aviation partner delivering safe, efficient, and world-class air transport solutions across Nigeria and the Middle East.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavClick('home')} className="text-gray-400 dark:text-gray-500 hover:text-[rgba(131,127,250,1)] transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="text-gray-400 dark:text-gray-500 hover:text-[rgba(131,127,250,1)] transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-gray-400 dark:text-gray-500 hover:text-[rgba(131,127,250,1)] transition-colors cursor-pointer">Services</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 dark:text-gray-500 hover:text-[rgba(131,127,250,1)] transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[rgba(131,127,250,1)]" />
                <span className="text-gray-400 dark:text-gray-500">+234 812 896 9696</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-[rgba(131,127,250,1)]" />
                <a
                  href="https://instagram.com/najmairltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-[rgba(131,127,250,1)] transition-colors"
                >
                  @najmairltd
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-gray-800 border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Najm Air. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
