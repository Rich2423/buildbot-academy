import Link from 'next/link';
import { ArrowLeft, Trophy, Star, Brain, Target, Clock, Award, Zap, BarChart, TrendingUp } from 'lucide-react';

export default function Progress() {
  const achievements = [
    { id: 1, name: "First Robot", description: "Built your first robot", icon: Trophy, unlocked: true, date: "2 days ago" },
    { id: 2, name: "Speed Builder", description: "Built a robot in under 5 minutes", icon: Zap, unlocked: true, date: "1 day ago" },
    { id: 3, name: "Problem Solver", description: "Completed 5 challenges", icon: Brain, unlocked: false, date: null },
    { id: 4, name: "Master Builder", description: "Created 10 unique robots", icon: Award, unlocked: false, date: null }
  ];

  const weeklyProgress = [
    { day: 'Mon', robotsBuilt: 2, challengesCompleted: 1, timeSpent: 45 },
    { day: 'Tue', robotsBuilt: 3, challengesCompleted: 2, timeSpent: 60 },
    { day: 'Wed', robotsBuilt: 1, challengesCompleted: 1, timeSpent: 30 },
    { day: 'Thu', robotsBuilt: 4, challengesCompleted: 3, timeSpent: 75 },
    { day: 'Fri', robotsBuilt: 2, challengesCompleted: 1, timeSpent: 40 },
    { day: 'Sat', robotsBuilt: 5, challengesCompleted: 2, timeSpent: 90 },
    { day: 'Sun', robotsBuilt: 3, challengesCompleted: 2, timeSpent: 55 }
  ];

  const skillAreas = [
    { name: "Engineering", progress: 75, color: "blue" },
    { name: "Programming", progress: 60, color: "green" },
    { name: "Problem Solving", progress: 85, color: "purple" },
    { name: "Creativity", progress: 90, color: "pink" }
  ];

  const getProgressBarColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'green': return 'bg-green-500';
      case 'purple': return 'bg-purple-500';
      case 'pink': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                <ArrowLeft className="h-6 w-6" />
                <span className="font-bold">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl text-gray-800">
                Your Progress
              </h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-500" />
                <span className="font-bold text-gray-700">Level 3</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-blue-500" />
                <span className="font-bold text-gray-700">350 XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="card-playful text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                20
              </h3>
              <p className="text-gray-600 font-bold">Robots Built</p>
            </div>

            <div className="card-playful text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Target className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                12
              </h3>
              <p className="text-gray-600 font-bold">Challenges Completed</p>
            </div>

            <div className="card-playful text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                8.5
              </h3>
              <p className="text-gray-600 font-bold">Hours Learning</p>
            </div>

            <div className="card-playful text-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                7
              </h3>
              <p className="text-gray-600 font-bold">Day Streak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Progress */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl mb-8 text-gray-800 text-center">
            Skill Development
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillAreas.map((skill) => (
              <div key={skill.name} className="card-playful">
                <div className="flex items-center justify-between mb-4">
                  <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl text-gray-800">
                    {skill.name}
                  </h3>
                  <span className="text-xl font-bold text-gray-600">{skill.progress}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                  <div 
                    className={`h-6 rounded-full ${getProgressBarColor(skill.color)} transition-all duration-500 ease-out`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Activity */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="card-playful">
            <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl mb-8 text-gray-800 text-center">
              This Week's Activity
            </h2>
            
            <div className="grid grid-cols-7 gap-4">
              {weeklyProgress.map((day) => (
                <div key={day.day} className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-4 mb-3 hover:scale-105 transition-transform duration-200">
                    <div className="text-2xl font-bold text-gray-800 mb-2">{day.day}</div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-1">
                        <Trophy className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-bold text-gray-700">{day.robotsBuilt}</span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-1">
                        <Target className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-bold text-gray-700">{day.challengesCompleted}</span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-bold text-gray-700">{day.timeSpent}m</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl mb-8 text-gray-800 text-center">
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.id} 
                  className={`card-playful text-center ${achievement.unlocked ? '' : 'opacity-50'}`}
                >
                  <div className={`rounded-full p-6 w-20 h-20 mx-auto mb-4 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' 
                      : 'bg-gray-300'
                  }`}>
                    <IconComponent className={`h-8 w-8 mx-auto ${
                      achievement.unlocked ? 'text-white' : 'text-gray-500'
                    }`} />
                  </div>
                  
                  <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-xl mb-2 text-gray-800">
                    {achievement.name}
                  </h3>
                  
                  <p className="text-gray-600 font-semibold text-sm mb-3">
                    {achievement.description}
                  </p>
                  
                  {achievement.unlocked && achievement.date && (
                    <p className="text-blue-600 font-bold text-xs">
                      Earned {achievement.date}
                    </p>
                  )}
                  
                  {!achievement.unlocked && (
                    <p className="text-gray-500 font-bold text-xs">
                      Not yet unlocked
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next Goals */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="card-playful max-w-4xl mx-auto">
            <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl mb-8 text-gray-800 text-center">
              Your Next Goals
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">Complete 3 More Challenges</h3>
                <p className="text-blue-700 font-semibold">Progress: 2/3</p>
                <div className="w-full bg-blue-200 rounded-full h-3 mt-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-2xl border-2 border-green-200">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Build 5 More Robots</h3>
                <p className="text-green-700 font-semibold">Progress: 3/5</p>
                <div className="w-full bg-green-200 rounded-full h-3 mt-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-2xl border-2 border-purple-200">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-800 mb-2">Reach Level 4</h3>
                <p className="text-purple-700 font-semibold">150 XP to go</p>
                <div className="w-full bg-purple-200 rounded-full h-3 mt-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}