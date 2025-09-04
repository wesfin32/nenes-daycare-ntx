"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [showAllAdventures, setShowAllAdventures] = useState(false);

  // Gallery images for each activity
  const galleryImages = {
    art: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
    ],
    science: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1532635268-6ef4ee2d2ad1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    ],
    music: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop"
    ],
    reading: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
    ],
    social: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588075592405-d3d7d4fb4143?w=600&h=400&fit=crop"
    ],
    events: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1533190112012-03fb5b2a02b0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519340333755-56e9c1d38f6e?w=600&h=400&fit=crop"
    ]
  };

  // Detailed information for each activity
  const activityInfo = {
    art: {
      ageGroups: ['Infants (8 weeks - 17 months)', 'Toddlers (18 months - 2.5 years)', 'Pre-K Groups (2.5 - 4.5 years)'],
      benefits: ['Fine motor skill development', 'Creative expression', 'Color and shape recognition', 'Hand-eye coordination'],
      activities: ['Finger painting', 'Crayon drawing', 'Play-dough sculpting', 'Collage making', 'Seasonal crafts'],
      schedule: 'Daily art activities from 10:00 AM - 10:30 AM',
      materials: 'Non-toxic, washable art supplies provided'
    },
    science: {
      ageGroups: ['Toddlers (18 months - 2.5 years)', 'Pre-K Groups (2.5 - 4.5 years)', 'School Age (4+ years)'],
      benefits: ['Curiosity development', 'Problem-solving skills', 'Nature awareness', 'Scientific thinking'],
      activities: ['Nature walks', 'Simple experiments', 'Plant growing', 'Weather observation', 'Sensory exploration'],
      schedule: 'Outdoor exploration: 2:00 PM - 3:00 PM (weather permitting)',
      materials: 'Safe exploration tools and outdoor learning materials'
    },
    music: {
      ageGroups: ['All ages (8 weeks - 12 years)'],
      benefits: ['Rhythm development', 'Language skills', 'Social interaction', 'Physical coordination'],
      activities: ['Singing songs', 'Playing instruments', 'Dancing', 'Music games', 'Rhythm exercises'],
      schedule: 'Music time: 11:00 AM - 11:30 AM daily',
      materials: 'Child-safe instruments and music equipment provided'
    },
    reading: {
      ageGroups: ['All ages (8 weeks - 12 years)'],
      benefits: ['Language development', 'Vocabulary expansion', 'Imagination growth', 'Listening skills'],
      activities: ['Story time', 'Interactive reading', 'Picture books', 'Letter recognition', 'Reading games'],
      schedule: 'Story time: 9:00 AM - 9:30 AM and 3:30 PM - 4:00 PM',
      materials: 'Age-appropriate books and educational reading materials'
    },
    social: {
      ageGroups: ['Toddlers (18 months+)', 'Pre-K Groups', 'School Age'],
      benefits: ['Teamwork skills', 'Sharing and cooperation', 'Communication skills', 'Friendship building'],
      activities: ['Group games', 'Team projects', 'Cooperative play', 'Social problem solving', 'Friendship activities'],
      schedule: 'Group activities integrated throughout the day',
      materials: 'Interactive games and group activity supplies'
    },
    events: {
      ageGroups: ['All ages (8 weeks - 12 years)'],
      benefits: ['Cultural awareness', 'Community building', 'Memory making', 'Celebration skills'],
      activities: ['Holiday parties', 'Birthday celebrations', 'Seasonal events', 'Family gatherings', 'Special themed days'],
      schedule: 'Special events scheduled monthly and for holidays',
      materials: 'Event-specific decorations and celebration supplies'
    }
  };

  // Data for the scroll-stacking cards
  const adventureCards = [
    {
      id: 'art',
      title: '🎨 Creative Art Time! 🎨',
      description: 'Our little artists create AMAZING masterpieces with colors, shapes, and sparkles! Every brushstroke is pure magic! ✨',
      category: '🖌️ Art & Crafts Fun!',
      gradient: 'from-pink-400 via-red-400 to-orange-500',
      buttonGradient: 'from-yellow-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop'
    },
    {
      id: 'science',
      title: '🔬 Nature Explorations! 🌿',
      description: 'Outdoor adventures await! We discover bugs, plants, and cool science experiments that make kids go "WOW!" 🤩',
      category: '🌱 Science Discovery!',
      gradient: 'from-lime-400 via-green-500 to-emerald-600',
      buttonGradient: 'from-cyan-400 to-blue-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
      id: 'music',
      title: '🎵 Musical Moments! 🎶',
      description: 'Dance, sing, and make joyful noise with instruments! Every beat gets our hearts pumping and feet moving! 💃🕺',
      category: '🎤 Music & Movement!',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      buttonGradient: 'from-pink-400 to-purple-500',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop'
    },
    {
      id: 'reading',
      title: '📚 Story Adventures! 📖',
      description: 'Magical tales come alive! We journey to faraway lands and meet incredible characters in our cozy reading nook! 🏰✨',
      category: '📝 Reading & Stories!',
      gradient: 'from-purple-400 via-pink-500 to-rose-500',
      buttonGradient: 'from-indigo-400 to-purple-500',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
    },
    {
      id: 'social',
      title: '👫 Friendship Building! 🤝',
      description: 'Making best friends forever! We learn to share, care, and play together in the most FUN ways possible! 💕',
      category: '🎈 Social Play Time!',
      gradient: 'from-cyan-400 via-teal-500 to-blue-600',
      buttonGradient: 'from-green-400 to-teal-500',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop'
    }
  ];

  // All adventures including additional ones for the modal
  const allAdventures = [
    // Main 6 adventures (same as adventureCards but with simpler structure for modal)
    {
      id: 'art',
      name: '🎨 Creative Art Time',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
    },
    {
      id: 'science',
      name: '🔬 Nature Explorations',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 'music',
      name: '🎵 Musical Moments',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    },
    {
      id: 'reading',
      name: '📚 Story Adventures',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    },
    {
      id: 'social',
      name: '👫 Friendship Building',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
    },
    {
      id: 'events',
      name: '🎉 Holiday Celebrations',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop'
    },
    // Additional adventures that can be easily expanded
    {
      id: 'cooking',
      name: '👩‍🍳 Little Chefs Kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    },
    {
      id: 'gardening',
      name: '🌱 Garden Adventures',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    },
    {
      id: 'sports',
      name: '⚽ Active Play Time',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    },
    {
      id: 'building',
      name: '🏗️ Block Building Fun',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: 'water',
      name: '💧 Water Play Days',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    },
    {
      id: 'theater',
      name: '🎭 Drama & Theater',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      id: 'yoga',
      name: '🧘‍♀️ Mindful Moments',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop'
    },
    {
      id: 'tech',
      name: '💻 Tech Exploration',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'
    },
    {
      id: 'dance',
      name: '💃 Dance Party Time',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 'pets',
      name: '🐾 Animal Friends Visit',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-300 via-sky-200 to-green-300 py-8 lg:py-12 relative overflow-hidden min-h-screen flex items-center">
        
        {/* Animated Sun */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-400 rounded-full animate-pulse shadow-lg">
          <div className="absolute inset-2 bg-yellow-300 rounded-full flex items-center justify-center">
            <div className="text-2xl">😊</div>
          </div>
          {/* Sun rays */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400 rounded"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400 rounded"></div>
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400 rounded"></div>
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400 rounded"></div>
        </div>

        {/* Floating Clouds */}
        <div className="absolute top-12 left-12 w-16 h-10 bg-white rounded-full opacity-90 animate-float">
          <div className="absolute -top-2 left-2 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute -top-1 right-2 w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div className="absolute top-20 left-1/3 w-20 h-12 bg-white rounded-full opacity-80 animate-float-delayed">
          <div className="absolute -top-3 left-3 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute -top-2 right-3 w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div className="absolute top-16 right-1/4 w-14 h-8 bg-white rounded-full opacity-75 animate-float">
          <div className="absolute -top-2 left-2 w-5 h-5 bg-white rounded-full"></div>
          <div className="absolute -top-1 right-1 w-3 h-3 bg-white rounded-full"></div>
        </div>

        {/* Colorful Trees/Lollipops */}
        <div className="absolute bottom-0 left-8 flex items-end">
          <div className="w-3 h-16 bg-amber-600 rounded-t"></div>
          <div className="w-12 h-12 bg-pink-400 rounded-full -ml-1.5 animate-bounce shadow-lg"></div>
        </div>
        <div className="absolute bottom-0 left-32 flex items-end">
          <div className="w-3 h-20 bg-amber-600 rounded-t"></div>
          <div className="w-14 h-14 bg-green-400 rounded-full -ml-1.5 shadow-lg"></div>
        </div>
        <div className="absolute bottom-0 right-12 flex items-end">
          <div className="w-3 h-18 bg-amber-600 rounded-t"></div>
          <div className="w-12 h-12 bg-purple-400 rounded-full -ml-1.5 shadow-lg"></div>
        </div>

        {/* Grass at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-400"></div>
        
        {/* Flying elements */}
        <div className="absolute top-1/4 left-20 text-2xl animate-float">🦋</div>
        <div className="absolute top-1/3 right-32 text-2xl animate-float-delayed">🐝</div>
        <div className="absolute bottom-1/4 right-16 text-2xl animate-float">🌸</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/neneschildcarelogo.png"
                alt="NeNe's Daycare Logo"
                width={200}
                height={200}
                className="rounded-full shadow-2xl border-4 border-white/20"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg font-comic">
              🌟 Fun Learning Since{" "}
              <span className="text-green-300 drop-shadow-lg animate-pulse">2009</span> 🌟
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              🎨 Where Every Day is an Adventure! 🎨<br/>
              Serving little explorers ages 8 weeks to 12 years with 12-hour care & yummy meals! 🍎
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-lime-400 to-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-lime-500 hover:to-green-600 transition-all duration-200 shadow-2xl transform hover:scale-110 hover:rotate-1"
              >
                🏠 Come Visit Our Fun House! 
              </Link>
              <Link
                href="/enrollment"
                className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-500 hover:to-cyan-600 transition-all duration-200 shadow-2xl transform hover:scale-110 hover:-rotate-1"
              >
                🎒 Join Our Adventure Club!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Building Blocks Style */}
      <section className="py-16 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden">
        {/* Playful floating elements */}
        <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-300 rounded-2xl transform rotate-12 animate-float opacity-70"></div>
        <div className="absolute top-32 right-16 w-8 h-8 bg-green-300 rounded-full animate-float-delayed opacity-70"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-pink-300 transform rotate-45 animate-float opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-6 h-12 bg-blue-300 rounded-full animate-float-delayed opacity-70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white rounded-full p-4 shadow-lg mb-6">
              <div className="text-6xl animate-bounce">🏠</div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-800 mb-6">
              🌈 Why Our Daycare is AMAZING! 🌈
            </h2>
            <p className="text-2xl text-pink-700 max-w-3xl mx-auto font-bold">
              ⭐ 14+ Years of Making Kids Happy & Parents Proud! ⭐
            </p>
          </div>
          
          {/* Building Blocks Layout */}
          <div className="space-y-8">
            {/* Row 1 - 3 LEGO blocks */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* LEGO Block 1 - Red */}
              <div className="relative bg-red-500 p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 w-80 h-80" style={{borderRadius: '12px', boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.3)'}}>
                {/* LEGO studs - 3x3 pattern (9 studs) */}
                <div className="absolute inset-0 p-4 flex items-center justify-center" style={{zIndex: 1}}>
                  <div className="grid grid-cols-3 gap-3 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-red-400 rounded-full border-2 border-red-600 mx-auto" style={{boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.2)'}}></div>
                    ))}
                  </div>
                </div>
                {/* Content on top */}
                <div className="relative text-center flex flex-col justify-center h-full" style={{zIndex: 2}}>
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-3xl">⏰</div>
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-3">12-Hour Fun Time!</h3>
                  <p className="text-white font-semibold drop-shadow-md">All day adventures for busy families!</p>
                </div>
              </div>
              
              {/* LEGO Block 2 - Green */}
              <div className="relative bg-green-500 p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 w-80 h-80" style={{borderRadius: '12px', boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.3)'}}>
                {/* LEGO studs - 3x3 pattern (9 studs) */}
                <div className="absolute inset-0 p-4 flex items-center justify-center" style={{zIndex: 1}}>
                  <div className="grid grid-cols-3 gap-3 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-green-400 rounded-full border-2 border-green-600 mx-auto" style={{boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.2)'}}></div>
                    ))}
                  </div>
                </div>
                {/* Content on top */}
                <div className="relative text-center flex flex-col justify-center h-full" style={{zIndex: 2}}>
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-3xl">🍎</div>
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-3">Yummy Meals!</h3>
                  <p className="text-white font-semibold drop-shadow-md">Tasty breakfast, lunch & snacks included!</p>
                </div>
              </div>
              
              {/* LEGO Block 3 - Blue */}
              <div className="relative bg-blue-500 p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 w-80 h-80" style={{borderRadius: '12px', boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.3)'}}>
                {/* LEGO studs - 3x3 pattern (9 studs) */}
                <div className="absolute inset-0 p-4 flex items-center justify-center" style={{zIndex: 1}}>
                  <div className="grid grid-cols-3 gap-3 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-blue-400 rounded-full border-2 border-blue-600 mx-auto" style={{boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.2)'}}></div>
                    ))}
                  </div>
                </div>
                {/* Content on top */}
                <div className="relative text-center flex flex-col justify-center h-full" style={{zIndex: 2}}>
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-3xl">👥</div>
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-3">Super Team!</h3>
                  <p className="text-white font-semibold drop-shadow-md">Amazing teachers working together!</p>
                </div>
              </div>
            </div>
            
            {/* Row 2 - 3 LEGO blocks offset */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* LEGO Block 4 - Yellow */}
              <div className="relative bg-yellow-500 p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 w-80 h-80" style={{borderRadius: '12px', boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.3)'}}>
                {/* LEGO studs - 3x3 pattern (9 studs) */}
                <div className="absolute inset-0 p-4 flex items-center justify-center" style={{zIndex: 1}}>
                  <div className="grid grid-cols-3 gap-3 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-yellow-400 rounded-full border-2 border-yellow-600 mx-auto" style={{boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.2)'}}></div>
                    ))}
                  </div>
                </div>
                {/* Content on top */}
                <div className="relative text-center flex flex-col justify-center h-full" style={{zIndex: 2}}>
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-3xl">💝</div>
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-3">Help Available!</h3>
                  <p className="text-white font-semibold drop-shadow-md">We work with assistance programs!</p>
                </div>
              </div>
              
              {/* LEGO Block 5 - Orange */}
              <div className="relative bg-orange-500 p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 w-80 h-80" style={{borderRadius: '12px', boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.3)'}}>
                {/* LEGO studs - 3x3 pattern (9 studs) */}
                <div className="absolute inset-0 p-4 flex items-center justify-center" style={{zIndex: 1}}>
                  <div className="grid grid-cols-3 gap-3 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-orange-400 rounded-full border-2 border-orange-600 mx-auto" style={{boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.2)'}}></div>
                    ))}
                  </div>
                </div>
                {/* Content on top */}
                <div className="relative text-center flex flex-col justify-center h-full" style={{zIndex: 2}}>
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-3xl">👶</div>
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-3">All Ages Welcome!</h3>
                  <p className="text-white font-semibold drop-shadow-md">From tiny babies to big kids!</p>
                </div>
              </div>
              
              {/* LEGO Block 6 - Purple */}
              <div className="relative bg-purple-500 p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 w-80 h-80" style={{borderRadius: '12px', boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.3)'}}>
                {/* LEGO studs - 3x3 pattern (9 studs) */}
                <div className="absolute inset-0 p-4 flex items-center justify-center" style={{zIndex: 1}}>
                  <div className="grid grid-cols-3 gap-3 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-purple-400 rounded-full border-2 border-purple-600 mx-auto" style={{boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.2)'}}></div>
                    ))}
                  </div>
                </div>
                {/* Content on top */}
                <div className="relative text-center flex flex-col justify-center h-full" style={{zIndex: 2}}>
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-3xl">🌟</div>
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-3">Easy Join!</h3>
                  <p className="text-white font-semibold drop-shadow-md">Simple sign-up process!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun & Learning Adventures - Scroll Triggered Stacking */}
      <section className="relative">
        {/* Section Header */}
        <div className="relative z-10 bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 py-16 overflow-hidden">
          {/* Scattered fun elements */}
          <div className="absolute top-5 left-10 w-6 h-6 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-8 h-8 bg-pink-400 transform rotate-45"></div>
          <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-red-400 transform rotate-12"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-6 shadow-2xl animate-bounce">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              🎨 Fun & Learning Adventures! 🎨
            </h2>
            <p className="text-2xl text-white max-w-4xl mx-auto font-bold drop-shadow-lg">
              🌟 Every Day is Full of Amazing Discoveries & Giggles! 🌟<br/>
              Come See What Awesome Things We Do! 🚀
            </p>
          </div>
        </div>

        {/* Scroll Stacking Cards Container */}
        <div className="relative">
          {adventureCards.map((card, index) => (
            <div
              key={card.id}
              className="sticky top-0 h-screen flex items-center justify-center"
              style={{ zIndex: index + 1 }}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div 
                  className={`relative bg-gradient-to-br ${card.gradient} rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105`}
                  style={{
                    transform: `translateY(${index * 20}px)`,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                    {/* Content Side */}
                    <div className="flex flex-col justify-center p-8 lg:p-12 relative z-10">
                      <div className="bg-white bg-opacity-90 rounded-full px-4 py-2 w-fit mb-6">
                        <span className="text-sm font-semibold text-gray-700">{card.category}</span>
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        {card.title}
                      </h3>
                      
                      <p className="text-lg lg:text-xl text-white mb-8 drop-shadow-md leading-relaxed">
                        {card.description}
                      </p>
                      
                      <div className="flex justify-start">
                        <button 
                          onClick={() => setActiveGallery(card.id)}
                          className={`bg-gradient-to-r ${card.buttonGradient} text-white px-12 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                        >
                          View Gallery
                        </button>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative lg:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-8 right-8 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Number Indicator */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-800">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
          <div className="text-center">
            <button 
              onClick={() => setShowAllAdventures(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-xl transform hover:scale-105 inline-flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Explore All Our Adventures
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Join Our Daycare Family?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Schedule a tour to see our facilities and meet our caring team. 
            We&apos;re here to support your family&apos;s childcare needs.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 inline-block shadow-lg transform hover:scale-105"
          >
            Schedule Your Tour
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Families Using Government Assistance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-600">Hours Daily Care</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Age Groups Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Popup Modal */}
      {activeGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    {adventureCards.find(card => card.id === activeGallery)?.title}
                  </h3>
                  <p className="text-purple-100 mt-1">
                    {adventureCards.find(card => card.id === activeGallery)?.category}
                  </p>
                </div>
                <button
                  onClick={() => setActiveGallery(null)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-20 w-8 h-8 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute bottom-4 right-32 w-6 h-6 bg-white bg-opacity-10 rounded-full"></div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {galleryImages[activeGallery as keyof typeof galleryImages]?.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Image
                      src={image}
                      alt={`${adventureCards.find(card => card.id === activeGallery)?.title} - Photo ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Photo number overlay */}
                    <div className="absolute top-3 left-3 bg-white bg-opacity-90 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-700">{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity Description in Modal */}
              <div className="mt-8 bg-white bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-purple-800 mb-3">About This Activity</h4>
                <p className="text-gray-700 leading-relaxed">
                  {adventureCards.find(card => card.id === activeGallery)?.description}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 border-t border-purple-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-purple-600">
                  {galleryImages[activeGallery as keyof typeof galleryImages]?.length} photos
                </div>
                <button
                  onClick={() => setActiveGallery(null)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Adventures Modal */}
      {showAllAdventures && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] w-full overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">🌟 All Our Amazing Adventures! 🌟</h2>
                  <p className="text-lg opacity-90">Discover all the fun activities we offer at NeNe's Daycare!</p>
                </div>
                <button
                  onClick={() => setShowAllAdventures(false)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Adventures Grid */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allAdventures.map((adventure, index) => (
                  <div
                    key={adventure.id}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-purple-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={adventure.image}
                        alt={adventure.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-purple-800 text-center leading-tight">
                        {adventure.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 border-t border-purple-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-purple-600">
                  {allAdventures.length} amazing adventures available!
                </div>
                <button
                  onClick={() => setShowAllAdventures(false)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
