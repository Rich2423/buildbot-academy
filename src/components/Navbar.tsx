// src/components/Navbar.tsx
import Link from 'next/link';
import { Wrench, Trophy, BarChart3, Images, Bot } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Build Lab', href: '/build', icon: Wrench, color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Challenges', href: '/challenges', icon: Trophy, color: 'bg-yellow-500 hover:bg-yellow-600' },
    { name: 'Progress', href: '/progress', icon: BarChart3, color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Gallery', href: '/gallery', icon: Images, color: 'bg-purple-500 hover:bg-purple-600' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-blue-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-200">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                BuildBot Academy
              </h1>
              <p className="text-sm text-gray-600 font-medium">Learn • Build • Discover</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${item.color} text-white px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${item.color} text-white px-4 py-3 rounded-xl font-bold text-center transition-all duration-200 flex flex-col items-center space-y-1`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}