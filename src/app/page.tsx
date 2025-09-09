import Link from 'next/link';
import { Wrench, Trophy, Bot } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      title: "Build Amazing Robots",
      description: "Drag and drop parts to create your own robots!",
      icon: "🤖",
      color: "bg-blue-100 border-blue-300"
    },
    {
      title: "Solve Fun Challenges",
      description: "Complete puzzles to unlock new components!",
      icon: "🧩",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      title: "Learn STEM & AI",
      description: "Discover science, technology, engineering, and math!",
      icon: "🧠",
      color: "bg-green-100 border-green-300"
    },
    {
      title: "Show Off Your Creations",
      description: "Save and share your robot masterpieces!",
      icon: "⭐",
      color: "bg-purple-100 border-purple-300"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pt-12 pb-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-fredoka text-white drop-shadow-lg">
              Welcome to
              <span className="block text-yellow-300">BuildBot Academy!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-semibold">
              Build robots, solve challenges, and learn STEM & AI in the most fun way possible!
            </p>

            <div className="flex justify-center space-x-4 text-6xl animate-bounce">
              <span className="animate-pulse">🤖</span>
              <span className="animate-pulse delay-100">⚙️</span>
              <span className="animate-pulse delay-200">🔧</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link
                href="/build"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
              >
                <Wrench className="h-6 w-6" />
                <span>Start Building!</span>
              </Link>
              <Link
                href="/challenges"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-200 transform hover:scale-105 border-2 border-white/30 flex items-center space-x-2"
              >
                <Trophy className="h-6 w-6" />
                <span>Try Challenges</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 text-4xl animate-float">⚡</div>
        <div className="absolute top-32 right-16 text-3xl animate-float delay-1000">🚀</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float delay-500">⭐</div>
        <div className="absolute bottom-32 right-10 text-4xl animate-float delay-1500">🎯</div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              What You'll Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore, create, and learn with our interactive STEM activities!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} border-4 rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-200 hover:shadow-xl`}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-fredoka text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-semibold">
            Join thousands of kids learning STEM through building!
          </p>
          <Link
            href="/build"
            className="inline-flex items-center space-x-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
          >
            <Bot className="h-6 w-6" />
            <span>Build Your First Robot</span>
          </Link>
        </div>
      </section>
    </div>
  );
}