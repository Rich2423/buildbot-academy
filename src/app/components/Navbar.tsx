'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, Wrench, Trophy, BarChart, Image, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Bot, emoji: '🏠' },
    { name: 'Build Lab', href: '/build', icon: Wrench, emoji: '🔧' },
    { name: 'Challenges', href: '/challenges', icon: Trophy, emoji: '🎯' },
    { name: 'Progress', href: '/progress', icon: BarChart, emoji: '📊' },
    { name: 'Gallery', href: '/gallery', icon: Image, emoji: '🎨' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Brand Bar with Hamburger Menu */}
      <div className="bg-white shadow-sm border-b border-gray-100 relative z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Fredoka One, cursive' }}>
                  BuildBot Academy
                </h1>
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-gray-500 font-semibold">Learn • Build • Discover</p>
                  <button
                    onClick={toggleMenu}
                    className="text-gray-600 hover:text-blue-600 transition-colors p-1"
                    aria-label="Toggle navigation menu"
                  >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            
            {/* User Stats */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">Level 3</p>
                <p className="text-xs text-gray-500">350 XP</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  const active = isActive(item.href);
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 ${
                        active
                          ? 'text-blue-600 bg-blue-50 border-2 border-blue-200'
                          : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50 border-2 border-transparent'
                      }`}
                    >
                      <div className={`text-2xl mb-2 transform transition-transform duration-200 ${
                        active ? 'scale-110' : 'hover:scale-105'
                      }`}>
                        {item.emoji}
                      </div>
                      <span className={`text-sm font-semibold transition-colors duration-200 text-center ${
                        active ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {item.name}
                      </span>
                      
                      {/* Active indicator */}
                      {active && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Overlay to close menu when clicking outside */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-30"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </>
  );
}