import Link from 'next/link';
import { ArrowLeft, Trophy, Star, Clock, Users, Brain, Zap, Target, Lock } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: "First Robot",
      description: "Build your very first robot using basic parts",
      difficulty: "Beginner",
      timeEstimate: "5 min",
      xp: 50,
      unlocked: true,
      completed: true,
      color: "green"
    },
    {
      id: 2,
      title: "Moving Robot",
      description: "Add wheels and motors to make your robot move",
      difficulty: "Beginner",
      timeEstimate: "10 min",
      xp: 100,
      unlocked: true,
      completed: true,
      color: "blue"
    },
    {
      id: 3,
      title: "Smart Sensors",
      description: "Teach your robot to see and respond to obstacles",
      difficulty: "Intermediate",
      timeEstimate: "15 min",
      xp: 200,
      unlocked: true,
      completed: false,
      color: "orange"
    },
    {
      id: 4,
      title: "Robot Artist",
      description: "Program your robot to draw amazing patterns",
      difficulty: "Intermediate",
      timeEstimate: "20 min",
      xp: 250,
      unlocked: true,
      completed: false,
      color: "purple"
    },
    {
      id: 5,
      title: "AI Assistant",
      description: "Build a robot that can recognize and respond to voice commands",
      difficulty: "Advanced",
      timeEstimate: "30 min",
      xp: 400,
      unlocked: false,
      completed: false,
      color: "pink"
    },
    {
      id: 6,
      title: "Robot Soccer",
      description: "Create a team of robots that can play soccer together",
      difficulty: "Advanced",
      timeEstimate: "45 min",
      xp: 500,
      unlocked: false,
      completed: false,
      color: "red"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCardColor = (color: string) => {
    switch (color) {
      case 'green': return 'border-green-300 hover:border-green-400';
      case 'blue': return 'border-blue-300 hover:border-blue-400';
      case 'orange': return 'border-orange-300 hover:border-orange-400';
      case 'purple': return 'border-purple-300 hover:border-purple-400';
      case 'pink': return 'border-pink-300 hover:border-pink-400';
      case 'red': return 'border-red-300 hover:border-red-400';
      default: return 'border-gray-300 hover:border-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-purple-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
                <ArrowLeft className="h-6 w-6" />
                <span className="font-bold">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl text-gray-800">
                Challenges
              </h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <span className="font-bold text-gray-700">3 Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-blue-500" />
                <span className="font-bold text-gray-700">350 XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <Trophy className="h-16 w-16 text-yellow-300 mx-auto mb-6 animate-bounce-gentle" />
          
          <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
            Take on Exciting Challenges!
          </h2>
          
          <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto font-bold">
            Complete puzzles, earn XP, and unlock amazing new robot parts!
          </p>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`card-playful relative ${getCardColor(challenge.color)} border-4 ${
                  challenge.unlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'
                }`}
              >
                {/* Completion/Lock Status */}
                <div className="absolute top-4 right-4">
                  {challenge.completed ? (
                    <div className="bg-green-500 text-white rounded-full p-2">
                      <Trophy className="h-5 w-5" />
                    </div>
                  ) : challenge.unlocked ? (
                    <div className="bg-blue-500 text-white rounded-full p-2">
                      <Target className="h-5 w-5" />
                    </div>
                  ) : (
                    <div className="bg-gray-400 text-white rounded-full p-2">
                      <Lock className="h-5 w-5" />
                    </div>
                  )}
                </div>

                {/* Challenge Content */}
                <div className="pt-8">
                  <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-3 text-gray-800">
                    {challenge.title}
                  </h3>
                  
                  <p className="text-gray-600 font-semibold mb-4 leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Challenge Metadata */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold">{challenge.xp} XP</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{challenge.timeEstimate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    {challenge.completed ? (
                      <button className="w-full py-3 px-4 bg-green-500 text-white font-bold rounded-xl opacity-75 cursor-default">
                        Completed!
                      </button>
                    ) : challenge.unlocked ? (
                      <Link href={`/challenges/${challenge.id}`}>
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105">
                          Start Challenge
                        </button>
                      </Link>
                    ) : (
                      <button className="w-full py-3 px-4 bg-gray-400 text-white font-bold rounded-xl cursor-not-allowed opacity-50">
                        Locked
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl mb-4 text-gray-800">
              Your Progress
            </h2>
            <p className="text-xl text-gray-600 font-bold">Keep building to unlock more challenges!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-playful text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-2 text-gray-800">
                2 Completed
              </h3>
              <p className="text-gray-600 font-semibold">Challenges finished</p>
            </div>

            <div className="card-playful text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Star className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-2 text-gray-800">
                350 XP
              </h3>
              <p className="text-gray-600 font-semibold">Experience earned</p>
            </div>

            <div className="card-playful text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Brain className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-2 text-gray-800">
                Level 3
              </h3>
              <p className="text-gray-600 font-semibold">Current level</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}