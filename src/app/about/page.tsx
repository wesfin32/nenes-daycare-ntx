'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Exact Image10 Recreation */}
      <section className="relative pt-20 pb-32 overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #87CEEB 0%, #B6E5FF 40%, #D4F1FF 100%)'
      }}>
        {/* Multiple Rolling Hills with Different Slopes */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
            {/* Back hills - gentler slopes */}
            <path d="M0,300 Q200,260 400,280 Q600,300 800,270 Q1000,240 1200,260 L1200,400 L0,400 Z" fill="#8BC34A" opacity="0.7"/>
            
            {/* Middle hills - steeper slopes */}
            <path d="M0,320 Q100,280 250,300 Q400,320 550,290 Q700,260 850,285 Q1000,310 1200,280 L1200,400 L0,400 Z" fill="#9ACD32" opacity="0.8"/>
            
            {/* Front hills - varied dramatic slopes */}
            <path d="M0,340 Q80,300 180,320 Q280,340 380,315 Q480,290 580,310 Q680,330 780,305 Q880,280 980,300 Q1080,320 1200,295 L1200,400 L0,400 Z" fill="#7CB342"/>
            
            {/* Grass texture on front hills */}
            <path d="M0,340 Q80,300 180,320 Q280,340 380,315 Q480,290 580,310 Q680,330 780,305 Q880,280 980,300 Q1080,320 1200,295 L1200,400 L0,400 Z" fill="url(#grassPattern)" opacity="0.4"/>
          </svg>
          
          {/* Grass texture pattern */}
          <svg width="0" height="0">
            <defs>
              <pattern id="grassPattern" patternUnits="userSpaceOnUse" width="4" height="8">
                <rect width="4" height="8" fill="#7CB342"/>
                <line x1="1" y1="0" x2="1" y2="8" stroke="#689F38" strokeWidth="0.5"/>
                <line x1="3" y1="0" x2="3" y2="8" stroke="#689F38" strokeWidth="0.5"/>
              </pattern>
            </defs>
          </svg>
        </div>
        
        {/* Simple sun exactly like image10 */}
        <div className="absolute top-12 left-16">
          <div className="w-12 h-12 bg-yellow-300 rounded-full" style={{
            background: 'radial-gradient(circle, #FFEB3B 40%, #FFC107 100%)'
          }}></div>
        </div>
        
        {/* Puffy white clouds exactly like image10 */}
        <div className="absolute top-8 left-32">
          <svg width="100" height="50" viewBox="0 0 100 50">
            <ellipse cx="25" cy="30" rx="20" ry="15" fill="white"/>
            <ellipse cx="45" cy="25" rx="25" ry="18" fill="white"/>
            <ellipse cx="65" cy="30" rx="20" ry="15" fill="white"/>
            <ellipse cx="35" cy="15" rx="15" ry="12" fill="white"/>
            <ellipse cx="55" cy="15" rx="18" ry="14" fill="white"/>
          </svg>
        </div>
        
        <div className="absolute top-16 right-32">
          <svg width="80" height="40" viewBox="0 0 80 40">
            <ellipse cx="20" cy="25" rx="16" ry="12" fill="white"/>
            <ellipse cx="35" cy="20" rx="20" ry="15" fill="white"/>
            <ellipse cx="50" cy="25" rx="16" ry="12" fill="white"/>
            <ellipse cx="30" cy="12" rx="12" ry="10" fill="white"/>
            <ellipse cx="45" cy="12" rx="15" ry="12" fill="white"/>
          </svg>
        </div>
        
        <div className="absolute top-6 left-2/3">
          <svg width="70" height="35" viewBox="0 0 70 35">
            <ellipse cx="18" cy="22" rx="14" ry="10" fill="white"/>
            <ellipse cx="30" cy="18" rx="17" ry="13" fill="white"/>
            <ellipse cx="42" cy="22" rx="14" ry="10" fill="white"/>
            <ellipse cx="26" cy="10" rx="10" ry="8" fill="white"/>
            <ellipse cx="36" cy="10" rx="12" ry="10" fill="white"/>
          </svg>
        </div>
        
        {/* Minimal elements to not clutter the clean design */}
        <div className="absolute top-28 left-1/4 text-3xl animate-bounce delay-500" style={{animationDuration: '4s'}}>🎈</div>
        <div className="absolute top-24 right-1/3 text-3xl animate-bounce delay-1000" style={{animationDuration: '3.5s'}}>🎈</div>
        
        {/* Kids playing subtly */}
        <div className="absolute bottom-20 left-1/4 text-2xl animate-bounce delay-300">🧒</div>
        <div className="absolute bottom-24 right-1/3 text-2xl animate-bounce delay-800">👧</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-8xl mb-8">🌈</div>
            <h1 className="text-5xl lg:text-7xl font-bold text-purple-800 mb-8 leading-tight">
              About NeNe&apos;s Daycare! 🎯
            </h1>
            <p className="text-2xl lg:text-3xl text-purple-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Where every day is an adventure and every child is a SUPERSTAR! 
              Come learn about our amazing journey from home to heroes! 🚀✨
            </p>
            
            {/* Fun Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-80 rounded-3xl p-6 shadow-xl transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl mb-3">🎂</div>
                <div className="text-3xl font-bold text-pink-800">16+</div>
                <div className="text-pink-600 font-semibold">Years of Magic</div>
              </div>
              <div className="bg-white bg-opacity-80 rounded-3xl p-6 shadow-xl transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl mb-3">🤝</div>
                <div className="text-3xl font-bold text-purple-800">85%</div>
                <div className="text-purple-600 font-semibold">Families Helped</div>
              </div>
              <div className="bg-white bg-opacity-80 rounded-3xl p-6 shadow-xl transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl mb-3">💝</div>
                <div className="text-3xl font-bold text-blue-800">100%</div>
                <div className="text-blue-600 font-semibold">Love Always</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline - Clean Grid Layout */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-amber-800 mb-6">
              📖 Our Story Journey 📖
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              From humble beginnings to community heroes - a timeline of love and growth
            </p>
          </div>

          {/* Story Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Chapter 1: Home Daycare Era */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-blue-800">Chapter 1</h3>
                <div className="text-blue-600 font-semibold text-lg">Home Daycare Era</div>
                <div className="bg-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mt-3">
                  2008 - 2022
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  It all started with a dream and a loving heart. NeNe opened her doors at home, 
                  creating a warm, family-like environment where children could learn, play, and grow. 
                  For 14 amazing years, families trusted us with their most precious gifts.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">14 Years</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Home-Based</span>
                </div>
              </div>
            </div>

            {/* Chapter 2: Dream Realized */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-green-800">Chapter 2</h3>
                <div className="text-green-600 font-semibold text-lg">Big Dream Realized</div>
                <div className="bg-green-300 text-green-800 px-4 py-2 rounded-full text-sm font-bold mt-3">
                  September 2022
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  After years of dedication and growing families&apos; trust, NeNe&apos;s biggest dream came true! 
                  We opened our beautiful new center, expanding our daycare family while keeping our 
                  loving heart. Every corner was designed with children&apos;s joy and safety in mind.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">New Center</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Dream Come True</span>
                </div>
              </div>
            </div>

            {/* Chapter 3: Community Heroes */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 text-center">
                <div className="text-6xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold text-purple-800">Chapter 3</h3>
                <div className="text-purple-600 font-semibold text-lg">Community Heroes</div>
                <div className="bg-purple-300 text-purple-800 px-4 py-2 rounded-full text-sm font-bold mt-3">
                  Today & Beyond
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Today, we&apos;re proud community heroes! Supporting 85% of families with assistance, 
                  we believe every child deserves amazing care regardless of circumstances. 
                  Our journey continues with the same love, just a bigger family to cherish.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">85% Assisted</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Community Heroes</span>
                </div>
              </div>
            </div>

          </div>


          {/* Philosophy Quote */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-dashed border-amber-300 max-w-2xl mx-auto">
              <div className="text-5xl mb-4">✨</div>
              <blockquote className="text-2xl font-bold text-amber-800 mb-4">
                &quot;Every child is a star waiting to shine&quot;
              </blockquote>
              <div className="text-amber-600 font-semibold">- NeNe&apos;s Daycare Philosophy</div>
            </div>
          </div>

        </div>
      </section>

      {/* Meet Our Amazing Owner */}
      <section className="py-16 bg-pink-50 relative overflow-hidden">
        {/* Fun Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-blue-300 opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-12 bg-green-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-purple-300 rotate-45 opacity-20 animate-float-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">👑</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-pink-800 mb-6">
              🌟 Meet Our Wonderful Owner! 🌟
            </h2>
            <p className="text-xl text-pink-600 max-w-3xl mx-auto">
              The heart and soul behind NeNe&apos;s Daycare - dedicated to every child&apos;s happiness!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Left Side Info */}
            <div className="flex flex-col justify-center space-y-6 h-full">
              <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-dashed border-yellow-300 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💝</div>
                  <h3 className="text-2xl font-bold text-yellow-700">Welcome Message</h3>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-2xl flex-1 flex items-center">
                  <p className="text-base text-gray-700 italic leading-relaxed">
                    &quot;Welcome to our daycare family! For over 16 years, it has been my absolute joy 
                    to care for the children of Navasota. From starting in my home to opening our 
                    beautiful center, every day I&apos;m reminded of why I love what I do.&quot;
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-dashed border-pink-300 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🌟</div>
                  <h3 className="text-2xl font-bold text-pink-700">Our Belief</h3>
                </div>
                
                <div className="bg-pink-50 p-4 rounded-2xl flex-1 flex items-center">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Every child who walks through our doors becomes part of our family. We believe 
                    that with love, patience, and encouragement, every child can shine bright like 
                    the star they are meant to be! 🌟
                  </p>
                </div>
              </div>
            </div>

            {/* Center - Professional Picture */}
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-pink-300 transform hover:scale-105 transition-all duration-300">
                {/* Picture Frame */}
                <div className="relative bg-pink-100 rounded-2xl p-8 text-center border-4 border-dashed border-pink-400">
                  {/* Corner Decorations */}
                  <div className="absolute -top-3 -left-3 text-3xl">✨</div>
                  <div className="absolute -top-3 -right-3 text-3xl">✨</div>
                  <div className="absolute -bottom-3 -left-3 text-3xl">💖</div>
                  <div className="absolute -bottom-3 -right-3 text-3xl">💖</div>
                  
                  {/* Placeholder for Professional Photo */}
                  <div className="w-64 h-80 mx-auto bg-white rounded-2xl border-4 border-pink-300 flex flex-col items-center justify-center shadow-lg">
                    <div className="text-6xl mb-4">👩‍💼</div>
                    <div className="text-pink-700 font-bold text-lg mb-2">Professional Photo</div>
                    <div className="text-pink-600 text-sm">Coming Soon!</div>
                  </div>
                  
                  {/* Name Badge */}
                  <div className="mt-6 bg-pink-200 rounded-full px-6 py-3 border-2 border-pink-400">
                    <div className="text-2xl font-bold text-pink-800">NeNe</div>
                    <div className="text-pink-600 text-sm">Owner & Director</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Info */}
            <div className="flex flex-col justify-center space-y-6 h-full">
              <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-dashed border-purple-300 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💫</div>
                  <h3 className="text-2xl font-bold text-purple-700">Our Mission</h3>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-2xl flex-1 flex items-center">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Thank you for trusting us with your most precious gifts. Together, we&apos;re not 
                    just providing childcare - we&apos;re nurturing the next generation of amazing humans! 💫
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-dashed border-blue-300 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏆</div>
                  <h3 className="text-2xl font-bold text-blue-700">Experience</h3>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-2xl flex-1 flex items-center">
                  <p className="text-base text-gray-700 leading-relaxed">
                    With 16+ years of experience and supporting 85% of families with assistance, 
                    we&apos;ve proven our commitment to making quality childcare accessible to all families 
                    in Navasota.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-pink-300 rotate-45 opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-blue-300 rounded-full opacity-30 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-green-300 rotate-12 opacity-30 animate-pulse delay-1500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-800 mb-6">
              Our Amazing Philosophy! 
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto">
              Everything we do is built on love, respect, and the belief that every child is special! 
            </p>
          </div>

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Value 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">💖</div>
                <h3 className="text-2xl font-bold text-blue-800">Love & Care</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Every child deserves to feel loved, safe, and valued. We create a warm environment 
                where children can be themselves and grow with confidence.
              </p>
            </div>

            {/* Core Value 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-green-800">Growth & Learning</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Through play, exploration, and gentle guidance, we help children develop their 
                unique talents and prepare for their bright futures.
              </p>
            </div>

            {/* Core Value 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-pink-200 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-pink-800">Community Support</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                We believe amazing childcare should be accessible to all families. That&apos;s why 
                85% of our families receive assistance to ensure every child gets the care they deserve.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-dashed border-yellow-300 max-w-4xl mx-auto">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-yellow-700 mb-6">Ready to Join Our Family?</h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Come see why families choose NeNe&apos;s Daycare! Schedule a visit and discover 
                where your child will thrive, learn, and shine! ✨
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Visit Today! 🚀
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

