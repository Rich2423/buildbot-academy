import Link from 'next/link';
import { Bot, Wrench, ArrowLeft, Save, Share, RotateCcw, Zap, Cpu, Settings, Eye } from 'lucide-react';

export default function BuildLab() {
  const robotParts = [
    { id: 'head', name: 'Robot Head', icon: Bot, color: 'blue' },
    { id: 'body', name: 'Robot Body', icon: Cpu, color: 'green' },
    { id: 'arms', name: 'Robot Arms', icon: Wrench, color: 'orange' },
    { id: 'legs', name: 'Robot Legs', icon: Settings, color: 'purple' },
    { id: 'sensors', name: 'Sensors', icon: Eye, color: 'pink' },
    { id: 'power', name: 'Power Core', icon: Zap, color: 'yellow' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700';
      case 'green': return 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700';
      case 'orange': return 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700';
      case 'purple': return 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700';
      case 'pink': return 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700';
      case 'yellow': return 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700';
      default: return 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <ArrowLeft className="h-6 w-6" />
                <span className="font-bold">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl text-gray-800">
                Build Lab
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="btn-secondary flex items-center space-x-2">
                <RotateCcw className="h-5 w-5" />
                <span>Reset</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Save className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button className="btn-primary flex items-center space-x-2">
                <Share className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Robot Parts Panel */}
          <div className="lg:col-span-1">
            <div className="card-playful h-fit">
              <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-6 text-gray-800">
                Robot Parts
              </h2>
              
              <div className="space-y-4">
                {robotParts.map((part) => {
                  const IconComponent = part.icon;
                  return (
                    <div
                      key={part.id}
                      className={`cursor-grab active:cursor-grabbing p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(part.color)} text-white transition-all duration-200 transform hover:scale-105 shadow-lg`}
                      draggable={true}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6" />
                        <span className="font-bold">{part.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Build Area */}
          <div className="lg:col-span-2">
            <div className="card-playful min-h-96">
              <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-6 text-gray-800">
                Build Your Robot
              </h2>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-80 border-4 border-dashed border-gray-300 flex flex-col items-center justify-center">
                <Bot className="h-20 w-20 text-gray-400 mb-4 animate-bounce-gentle" />
                <p className="text-xl text-gray-500 font-bold text-center">
                  Drag robot parts here to start building!
                </p>
                <p className="text-lg text-gray-400 font-semibold mt-2 text-center">
                  Mix and match parts to create your unique robot
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Panel */}
          <div className="lg:col-span-1">
            <div className="card-playful">
              <h2 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-2xl mb-6 text-gray-800">
                How to Build
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="font-bold text-blue-800">Drag Parts</span>
                  </div>
                  <p className="text-blue-700 text-sm">Drag robot parts from the left panel into the build area</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="font-bold text-green-800">Connect</span>
                  </div>
                  <p className="text-green-700 text-sm">Connect parts together to make your robot functional</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="font-bold text-purple-800">Test & Save</span>
                  </div>
                  <p className="text-purple-700 text-sm">Test your robot and save it to your gallery!</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <span className="font-bold text-yellow-800">Pro Tip</span>
                </div>
                <p className="text-yellow-700 text-sm">Try different combinations to discover new robot abilities!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}