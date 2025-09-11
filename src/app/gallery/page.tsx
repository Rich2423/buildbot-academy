import Link from 'next/link';
import { ArrowLeft, Heart, Eye, Share, Download, Plus, Filter, Search, Star, Trophy } from 'lucide-react';

export default function Gallery() {
  const myRobots = [
    {
      id: 1,
      name: "Speed Racer",
      description: "Super fast racing robot with turbo wheels",
      likes: 23,
      views: 156,
      created: "2 days ago",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      featured: true
    },
    {
      id: 2,
      name: "Helper Bot",
      description: "Friendly robot that helps with daily tasks",
      likes: 45,
      views: 234,
      created: "5 days ago",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      featured: false
    },
    {
      id: 3,
      name: "Art Master",
      description: "Creative robot that draws beautiful pictures",
      likes: 67,
      views: 389,
      created: "1 week ago",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      featured: false
    }
  ];

  const communityRobots = [
    {
      id: 4,
      name: "Dance Bot 3000",
      creator: "Alex K.",
      description: "Robot that can dance to any music beat",
      likes: 142,
      views: 892,
      created: "3 hours ago",
      image: "bg-gradient-to-br from-pink-400 to-pink-600"
    },
    {
      id: 5,
      name: "Soccer Champion",
      creator: "Sam R.",
      description: "Professional soccer-playing robot with AI",
      likes: 89,
      views: 567,
      created: "1 day ago",
      image: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
      id: 6,
      name: "Garden Guardian",
      creator: "Maya L.",
      description: "Robot that takes care of plants and gardens",
      likes: 76,
      views: 445,
      created: "2 days ago",
      image: "bg-gradient-to-br from-emerald-400 to-emerald-600"
    },
    {
      id: 7,
      name: "Space Explorer",
      creator: "Jordan M.",
      description: "Futuristic robot designed for space missions",
      likes: 128,
      views: 734,
      created: "3 days ago",
      image: "bg-gradient-to-br from-indigo-400 to-indigo-600"
    },
    {
      id: 8,
      name: "Chef Bot Deluxe",
      creator: "Taylor W.",
      description: "Cooking robot with advanced recipe algorithms",
      likes: 95,
      views: 612,
      created: "4 days ago",
      image: "bg-gradient-to-br from-red-400 to-red-600"
    },
    {
      id: 9,
      name: "Music Maestro",
      creator: "River P.",
      description: "Multi-instrument playing robot with perfect pitch",
      likes: 203,
      views: 1156,
      created: "5 days ago",
      image: "bg-gradient-to-br from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-pink-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors">
                <ArrowLeft className="h-6 w-6" />
                <span className="font-bold">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl text-gray-800">
                Robot Gallery
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search robots..."
                  className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none font-semibold"
                />
              </div>
              <button className="flex items-center space-x-2 bg-pink-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-pink-600 transition-colors">
                <Filter className="h-5 w-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* My Robots Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl text-gray-800">
              My Robots
            </h2>
            <Link href="/build">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                <Plus className="h-5 w-5" />
                <span>Create New</span>
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {myRobots.map((robot) => (
              <div key={robot.id} className="card-playful relative group">
                {robot.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-yellow-500 text-white rounded-full p-2">
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Robot Image Placeholder */}
                <div className={`${robot.image} rounded-2xl h-48 mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl text-white opacity-80">🤖</div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-transform">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-transform">
                      <Share className="h-5 w-5" />
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-transform">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-2 text-gray-800">
                  {robot.name}
                </h3>
                
                <p className="text-gray-600 font-semibold mb-4 leading-relaxed">
                  {robot.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>{robot.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-blue-500" />
                      <span>{robot.views}</span>
                    </div>
                  </div>
                  <span>{robot.created}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Robots Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl text-gray-800">
              Community Creations
            </h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span className="font-bold">Top rated this week</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityRobots.map((robot) => (
              <div key={robot.id} className="card-playful group cursor-pointer">
                {/* Robot Image Placeholder */}
                <div className={`${robot.image} rounded-2xl h-40 mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-5xl text-white opacity-80">🤖</div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-3">
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-transform">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-transform">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-transform">
                      <Share className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-xl mb-1 text-gray-800">
                  {robot.name}
                </h3>
                
                <p className="text-sm text-blue-600 font-bold mb-2">
                  by {robot.creator}
                </p>
                
                <p className="text-gray-600 font-semibold mb-4 text-sm leading-relaxed">
                  {robot.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>{robot.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-blue-500" />
                      <span>{robot.views}</span>
                    </div>
                  </div>
                  <span>{robot.created}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <Trophy className="h-16 w-16 text-yellow-300 mx-auto mb-6 animate-bounce-gentle" />
          
          <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
            Robot of the Week
          </h2>
          
          <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto font-bold">
            Congratulations to Maya L. for creating the amazing "Garden Guardian" robot!
          </p>
          
          <Link href="/gallery/featured">
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              View Featured Robot
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-4xl mb-4 text-gray-800">
              Gallery Stats
            </h2>
            <p className="text-xl text-gray-600 font-bold">Amazing creations from our community!</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                1,247
              </h3>
              <p className="text-gray-600 font-bold">Total Robots</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Heart className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                15,892
              </h3>
              <p className="text-gray-600 font-bold">Total Likes</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Eye className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                89,456
              </h3>
              <p className="text-gray-600 font-bold">Total Views</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Share className="h-8 w-8 text-white mx-auto" />
              </div>
              <h3 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl mb-2 text-gray-800">
                3,421
              </h3>
              <p className="text-gray-600 font-bold">Total Shares</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}