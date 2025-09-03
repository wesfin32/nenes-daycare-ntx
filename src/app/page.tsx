"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

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
      title: 'Creative Art Time',
      description: 'Our little artists explore colors, shapes, and creativity through hands-on art projects that develop fine motor skills and imagination.',
      category: 'Art & Crafts',
      gradient: 'from-blue-200 to-indigo-300',
      buttonGradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop'
    },
    {
      id: 'science',
      title: 'Nature Explorations',
      description: 'Outdoor adventures and science discoveries help children learn about the world around them through interactive experiments.',
      category: 'Science',
      gradient: 'from-green-200 to-emerald-300',
      buttonGradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
      id: 'music',
      title: 'Musical Moments',
      description: 'Dance, sing, and play instruments! Music activities enhance rhythm, coordination, and social skills while having tons of fun.',
      category: 'Music & Movement',
      gradient: 'from-orange-200 to-yellow-300',
      buttonGradient: 'from-orange-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop'
    },
    {
      id: 'reading',
      title: 'Story Adventures',
      description: 'Daily reading sessions and storytelling activities foster language development and spark imagination in our young learners.',
      category: 'Reading',
      gradient: 'from-pink-200 to-rose-300',
      buttonGradient: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
    },
    {
      id: 'social',
      title: 'Friendship Building',
      description: 'Group activities and cooperative games teach sharing, teamwork, and social skills that last a lifetime.',
      category: 'Social Play',
      gradient: 'from-teal-200 to-cyan-300',
      buttonGradient: 'from-teal-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop'
    },
    {
      id: 'events',
      title: 'Holiday Celebrations',
      description: 'Seasonal parties, holiday crafts, and special themed days create magical memories throughout the year.',
      category: 'Special Events',
      gradient: 'from-indigo-200 to-purple-300',
      buttonGradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop'
    }
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 py-16 lg:py-24">
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
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Trusted Childcare Since{" "}
              <span className="text-orange-400 drop-shadow-lg">2009</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Professional daycare in Navasota, Texas serving children 8 weeks to 12 years old. 
              12-hour daily care with all meals included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                Schedule a Tour Today
              </Link>
              <Link
                href="/enrollment"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 shadow-lg transform hover:scale-105 backdrop-blur-sm"
              >
                Learn About Enrollment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-b from-orange-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-800 mb-4">
              Why Choose NeNe&apos;s Daycare?
            </h2>
            <p className="text-xl text-purple-700 max-w-2xl mx-auto">
              Over 14 years of dedicated service to Navasota families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-200 to-cyan-200 shadow-lg transform hover:scale-105 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">12-Hour Daily Care</h3>
              <p className="text-purple-700">Extended hours to support working families with flexible schedules</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-200 to-emerald-200 shadow-lg transform hover:scale-105 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2 2m2-2v6a2 2 0 002 2h2a2 2 0 002-2v-6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">All Meals Included</h3>
              <p className="text-green-700">Nutritious breakfast, lunch, and snacks at no additional cost</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-200 to-yellow-200 shadow-lg transform hover:scale-105 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Team-Based Approach</h3>
              <p className="text-orange-700">Collaborative care with strong parent partnership and communication</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-200 to-pink-200 shadow-lg transform hover:scale-105 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Government Assistance</h3>
              <p className="text-purple-700">We accept CCAP, Head Start, and work with Texas Workforce programs</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-teal-200 to-cyan-200 shadow-lg transform hover:scale-105 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Ages 8 Weeks - 12 Years</h3>
              <p className="text-teal-700">Comprehensive care from infants through school-age children</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-red-200 to-pink-200 shadow-lg transform hover:scale-105 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">No Enrollment Criteria</h3>
              <p className="text-red-700">Simple enrollment process - just need quality childcare for your family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun & Learning Adventures - Scroll Triggered Stacking */}
      <section className="relative">
        {/* Section Header */}
        <div className="relative z-10 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-800 mb-4">
              Fun & Learning Adventures
            </h2>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Discover the exciting activities and educational experiences that make every day special at NeNe&apos;s Daycare! [UPDATED]
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
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={() => setActiveGallery(card.id)}
                          className={`bg-gradient-to-r ${card.buttonGradient} text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                        >
                          View Gallery
                        </button>
                        <button 
                          onClick={() => setActiveInfo(card.id)}
                          className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-200 backdrop-blur-sm"
                        >
                          Learn More
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

        {/* Bottom Spacer */}
        <div className="h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-xl transform hover:scale-105 inline-flex items-center gap-3">
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

      {/* Learn More Info Popup Modal */}
      {activeInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    {adventureCards.find(card => card.id === activeInfo)?.title}
                  </h3>
                  <p className="text-purple-100 mt-1">
                    Activity Details & Information
                  </p>
                </div>
                <button
                  onClick={() => setActiveInfo(null)}
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
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Age Groups */}
                  <div className="bg-white bg-opacity-60 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      Age Groups
                    </h4>
                    <ul className="space-y-2">
                      {activityInfo[activeInfo as keyof typeof activityInfo]?.ageGroups.map((age, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {age}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white bg-opacity-60 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {activityInfo[activeInfo as keyof typeof activityInfo]?.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Activities */}
                  <div className="bg-white bg-opacity-60 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Activities Include
                    </h4>
                    <ul className="space-y-2">
                      {activityInfo[activeInfo as keyof typeof activityInfo]?.activities.map((activity, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule & Materials */}
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-60 rounded-2xl p-6 backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Schedule
                      </h4>
                      <p className="text-gray-700">
                        {activityInfo[activeInfo as keyof typeof activityInfo]?.schedule}
                      </p>
                    </div>

                    <div className="bg-white bg-opacity-60 rounded-2xl p-6 backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Materials
                      </h4>
                      <p className="text-gray-700">
                        {activityInfo[activeInfo as keyof typeof activityInfo]?.materials}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 border-t border-purple-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-purple-600">
                  Part of our comprehensive childcare program
                </div>
                <button
                  onClick={() => setActiveInfo(null)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Close Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
