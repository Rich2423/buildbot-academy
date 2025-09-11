'use client'

import Link from 'next/link';
import { Bot, Wrench, Save, Share, RotateCcw, Zap, Cpu, Settings, Eye } from 'lucide-react';
import { useState } from 'react';

export default function BuildLab() {
  const [robotParts, setRobotParts] = useState([
    { id: 'head', name: 'Robot Head', icon: Bot, color: 'blue' },
    { id: 'body', name: 'Robot Body', icon: Cpu, color: 'green' },
    { id: 'arms', name: 'Robot Arms', icon: Wrench, color: 'orange' },
    { id: 'legs', name: 'Robot Legs', icon: Settings, color: 'purple' },
    { id: 'sensors', name: 'Sensors', icon: Eye, color: 'pink' },
    { id: 'power', name: 'Power Core', icon: Zap, color: 'yellow' }
  ]);

  const [builtRobot, setBuiltRobot] = useState([]);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [showShareMessage, setShowShareMessage] = useState(false);

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

  const handleReset = () => {
    setBuiltRobot([]);
    console.log('Robot build area cleared!');
  };

  const handleSave = () => {
    if (builtRobot.length === 0) {
      alert('Build something first before saving!');
      return;
    }
    
    // Simulate saving to local storage or database
    const robotData = {
      parts: builtRobot,
      savedAt: new Date().toISOString(),
      id: Date.now()
    };
    
    localStorage.setItem('savedRobot', JSON.stringify(robotData));
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 3000);
    console.log('Robot saved successfully!', robotData);
  };

  const handleShare = () => {
    if (builtRobot.length === 0) {
      alert('Build something first before sharing!');
      return;
    }

    // Simulate sharing functionality
    const shareData = {
      title: 'Check out my BuildBot Academy robot!',
      text: `I just built an amazing robot with ${builtRobot.length} parts in BuildBot Academy!`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareData.url).then(() => {
        setShowShareMessage(true);
        setTimeout(() => setShowShareMessage(false), 3000);
      }).catch(() => {
        alert('Link copied to clipboard!');
      });
    }
    console.log('Robot shared!', shareData);
  };

  const addPartToRobot = (part) => {
    setBuiltRobot(prev => [...prev, { ...part, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Success Messages */}
      {showSaveMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          ✅ Robot saved successfully!
        </div>
      )}
      
      {showShareMessage && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          📱 Link copied to clipboard!
        </div>
      )}

      {/* Header - Clean without back button */}
      <div className="bg-white shadow-lg border-b-4 border-blue-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 style={{ fontFamily: 'Fredoka One, cursive' }} className="text-3xl text-gray-800">
                Build Lab
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleReset}
                className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Reset</span>
              </button>
              
              <button 
                onClick={handleSave}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl transition-colors"
              >
                <Save className="h-5 w-5" />
                <span>Save</span>
              </button>
              
              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-xl transition-all transform hover:scale-105"
              >
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
                    <button
                      key={part.id}
                      onClick={() => addPartToRobot(part)}
                      className={`w-full cursor-pointer p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(part.color)} text-white transition-all duration-200 transform hover:scale-105 shadow-lg`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6" />
                        <span className="font-bold">{part.name}</span>
                      </div>
                    </button>
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
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-80 border-4 border-dashed border-gray-300">
                {builtRobot.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Bot className="h-20 w-20 text-gray-400 mb-4 animate-bounce-gentle" />
                    <p className="text-xl text-gray-500 font-bold text-center">
                      Click robot parts to start building!
                    </p>
                    <p className="text-lg text-gray-400 font-semibold mt-2 text-center">
                      Mix and match parts to create your unique robot
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-700">Your Robot ({builtRobot.length} parts)</h3>
                      <div className="text-6xl">🤖</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {builtRobot.map((part, index) => {
                        const IconComponent = part.icon;
                        return (
                          <div
                            key={index}
                            className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(part.color)} text-white shadow-md`}
                          >
                            <div className="flex items-center space-x-2">
                              <IconComponent className="h-5 w-5" />
                              <span className="font-semibold text-sm">{part.name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
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
                    <span className="font-bold text-blue-800">Click Parts</span>
                  </div>
                  <p className="text-blue-700 text-sm">Click robot parts from the left panel to add them to your robot</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="font-bold text-green-800">Build & Create</span>
                  </div>
                  <p className="text-green-700 text-sm">Watch your robot come together as you add more parts</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="font-bold text-purple-800">Save & Share</span>
                  </div>
                  <p className="text-purple-700 text-sm">Save your creation and share it with friends!</p>
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