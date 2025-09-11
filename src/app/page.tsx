import Link from 'next/link';
import { Bot, Wrench, Trophy, Brain, Palette, Users, Sparkles, Zap, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-8 w-8 text-yellow-300/70" />
        </div>
        <div className="absolute top-32 right-16 animate-bounce-gentle">
          <Zap className="h-10 w-10 text-pink-300/70" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse">
          <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-10 animate-float">
          <Star className="h-6 w-6 text-purple-300/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <div className="animate-bounce-gentle">
            <Bot className="h-24 w-24 text-yellow-300 mx-auto mb-8 drop-shadow-lg" />
          </div>
          
          <h1 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-shadow leading-tight">
            Welcome to <span className="text-yellow-300 animate-pulse">BuildBot Academy!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto font-bold leading-relaxed">
            Build robots, solve challenges, and learn STEM & AI in the most fun way possible! 
            <span className="emoji-bounce">🚀</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/build"
              className="btn-primary group inline-flex items-center space-x-4"
            >
              <Wrench className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
              <span><span className="emoji-wiggle">🔧</span> Start Building!</span>
            </Link>
            
            <Link
              href="/challenges"
              className="btn-secondary group inline-flex items-center space-x-4"
            >
              <Trophy className="h-7 w-7 group-hover:animate-bounce" />
              <span><span className="emoji-bounce">🏆</span> Try Challenges</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-5xl md:text-6xl mb-6 text-gray-800">
              What You Will Do
            </h2>
            <p className="text-2xl text-gray-600 font-bold max-w-3xl mx-auto">
              Explore, create, and learn with our interactive STEM activities! 
              <span className="emoji-float">🎯</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Build Amazing Robots */}
            <div className="card-playful group cursor-pointer">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="icon-container blue">
                    <Bot className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="text-2xl emoji-wiggle">🤖</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-4 text-gray-800">
                  Build Amazing Robots
                </h3>
                <p className="text-gray-600 font-bold text-lg leading-relaxed">
                  Drag and drop parts to create your own robots!
                </p>
              </div>
            </div>

            {/* Solve Fun Challenges */}
            <div className="card-playful group cursor-pointer">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="icon-container orange">
                    <Trophy className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="text-2xl emoji-bounce">🏆</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-4 text-gray-800">
                  Solve Fun Challenges
                </h3>
                <p className="text-gray-600 font-bold text-lg leading-relaxed">
                  Complete puzzles to unlock new components!
                </p>
              </div>
            </div>

            {/* Learn STEM & AI */}
            <div className="card-playful group cursor-pointer">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="icon-container green">
                    <Brain className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="text-2xl emoji-float">🧠</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-4 text-gray-800">
                  Learn STEM & AI
                </h3>
                <p className="text-gray-600 font-bold text-lg leading-relaxed">
                  Discover science, technology, engineering, and math!
                </p>
              </div>
            </div>

            {/* Show Off Your Creations */}
            <div className="card-playful group cursor-pointer">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="icon-container pink">
                    <Palette className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="text-2xl emoji-wiggle">🎨</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-4 text-gray-800">
                  Show Off Your Creations
                </h3>
                <p className="text-gray-600 font-bold text-lg leading-relaxed">
                  Save and share your robot masterpieces!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-1/4 animate-float">
          <div className="w-6 h-6 bg-yellow-300 rounded-full opacity-70"></div>
        </div>
        <div className="absolute bottom-16 right-1/3 animate-bounce-gentle">
          <Sparkles className="h-8 w-8 text-pink-300/80" />
        </div>
        <div className="absolute top-1/3 left-10 animate-pulse">
          <Star className="h-6 w-6 text-purple-300/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-float mb-8">
            <Users className="h-20 w-20 text-yellow-300 mx-auto drop-shadow-lg" />
          </div>
          
          <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-5xl md:text-6xl font-bold text-white mb-8 text-shadow leading-tight">
            Ready to Start Your Adventure?
          </h2>
          
          <p className="text-2xl text-white/95 mb-12 font-bold max-w-3xl mx-auto leading-relaxed">
            Join thousands of kids learning STEM through building! 
            <span className="emoji-float">🌟</span>
          </p>
          
          <Link
            href="/build"
            className="btn-cta group inline-flex items-center space-x-4"
          >
            <Bot className="h-8 w-8 group-hover:animate-wiggle transition-transform duration-300" />
            <span><span className="emoji-bounce">🚀</span> Build Your First Robot</span>
          </Link>
        </div>
      </section>
    </div>
  );
}