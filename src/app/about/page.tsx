import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | NeNe&apos;s Daycare Navasota",
  description: "Learn about NeNe&apos;s Daycare&apos;s 14+ year history, team-based philosophy, and commitment to supporting Navasota families since 2009.",
};

export default function About() {
  return (
    <div>
      {/* Hero Section with Interactive Elements */}
      <section className="bg-blue-500 py-16 lg:py-24 relative overflow-hidden">
        {/* Floating Paper Planes */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce">✈️</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse">🎈</div>
        <div className="absolute bottom-20 left-1/4 text-2xl animate-float">🌟</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-float-delayed">🦋</div>
        
        {/* Cute Corner Decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-br-full opacity-80"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-pink-400 rounded-bl-full opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-400 rounded-tr-full opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-purple-400 rounded-tl-full opacity-80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-8">
            <div className="text-8xl animate-bounce">👨‍👩‍👧‍👦</div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            🌈 Meet Our Amazing Family! 🌈
          </h1>
          <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto drop-shadow-md">
            ⭐ 16+ Years of Magic, Laughter & Learning in Navasota! ⭐
          </p>
          <div className="mt-8">
            <div className="inline-block bg-yellow-400 border-4 border-white rounded-full px-8 py-4 text-blue-800 font-bold text-lg shadow-lg">
              🎉 Serving Families Since April 2009! 🎉
            </div>
          </div>
        </div>
      </section>

      {/* Our Story with Timeline */}
      <section className="py-16 bg-yellow-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-blue-300 rotate-45 opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-8 bg-green-300 rounded-full opacity-30 animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">📖</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              🌟 Our Magical Story 🌟
            </h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              From a dream to reality - how we became Navasota's favorite daycare family!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Story Content */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-dashed border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🏠</div>
                  <h3 className="text-2xl font-bold text-blue-800">Our Humble Beginning</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Once upon a time in April 2009, NeNe's Daycare began as a cozy home daycare! 
                  For 13 wonderful years, we welcomed families into our home with love, creating 
                  a warm, family-like environment where children felt safe and cherished! 🌱
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-dashed border-green-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🏢</div>
                  <h3 className="text-2xl font-bold text-green-800">Our Big Dream</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In September 2022, we took a big, exciting leap and opened our beautiful childcare center! 
                  This allowed us to welcome even more families and provide enhanced programs while 
                  keeping the same loving, family atmosphere that makes NeNe's special! ✨
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-dashed border-purple-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">❤️</div>
                  <h3 className="text-2xl font-bold text-purple-800">Our Community Love</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For over 16 amazing years, we've been trusted partners to Navasota families! 
                  With 85% of our families using government assistance programs, we're committed 
                  to supporting ALL families, no matter their background. Everyone deserves amazing childcare! 🏆
                </p>
              </div>
            </div>

            {/* Fun Facts Card */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-8 border-yellow-300 relative">
              {/* Corner Stars */}
              <div className="absolute -top-3 -left-3 text-3xl">⭐</div>
              <div className="absolute -top-3 -right-3 text-3xl">⭐</div>
              <div className="absolute -bottom-3 -left-3 text-3xl">⭐</div>
              <div className="absolute -bottom-3 -right-3 text-3xl">⭐</div>
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-3xl font-bold text-yellow-600">🎉 Fun Facts About Us! 🎉</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center bg-blue-100 p-4 rounded-2xl">
                  <span className="text-2xl mr-4">🎂</span>
                  <div>
                    <span className="font-bold text-blue-800">Founded:</span>
                    <span className="text-blue-600 ml-2">April 2009</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-green-100 p-4 rounded-2xl">
                  <span className="text-2xl mr-4">⏰</span>
                  <div>
                    <span className="font-bold text-green-800">Experience:</span>
                    <span className="text-green-600 ml-2">16+ years of love!</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-purple-100 p-4 rounded-2xl">
                  <span className="text-2xl mr-4">🏠</span>
                  <div>
                    <span className="font-bold text-purple-800">Home Daycare:</span>
                    <span className="text-purple-600 ml-2">April 2009 - Sept 2022</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-orange-100 p-4 rounded-2xl">
                  <span className="text-2xl mr-4">🏢</span>
                  <div>
                    <span className="font-bold text-orange-800">Childcare Center:</span>
                    <span className="text-orange-600 ml-2">September 2022 - Present</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-purple-100 p-4 rounded-2xl">
                  <span className="text-2xl mr-4">👶</span>
                  <div>
                    <span className="font-bold text-purple-800">Ages:</span>
                    <span className="text-purple-600 ml-2">8 weeks to 12 years</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-orange-100 p-4 rounded-2xl">
                  <span className="text-2xl mr-4">🕐</span>
                  <div>
                    <span className="font-bold text-orange-800">Hours:</span>
                    <span className="text-orange-600 ml-2">12 hours of daily adventure!</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-pink-100 p-4 rounded-2xl">
                  <span className="text-2xl mr-4">🤝</span>
                  <div>
                    <span className="font-bold text-pink-800">Support:</span>
                    <span className="text-pink-600 ml-2">85% families get assistance help!</span>
                  </div>
                </div>
              </div>
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
              The heart and soul behind NeNe's Daycare - dedicated to every child's happiness!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional Picture Placeholder */}
            <div className="relative">
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

            {/* Owner Bio/Message */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-dashed border-yellow-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">💝</div>
                  <h3 className="text-3xl font-bold text-yellow-700">A Message from NeNe</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-6 rounded-2xl">
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      "Welcome to our daycare family! For over 16 years, it has been my absolute joy 
                      to care for the children of Navasota. From starting in my home to opening our 
                      beautiful center, every day I'm reminded of why I love what I do."
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 p-6 rounded-2xl">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      "Each child who walks through our doors becomes part of our extended family. 
                      I'm passionate about creating a safe, nurturing environment where children 
                      can learn, grow, and most importantly - have fun! 🌈"
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      "Thank you for trusting me with your most precious treasures. Together, 
                      we're building a strong foundation for your child's bright future!"
                    </p>
                    <div className="text-right mt-4">
                      <span className="text-xl text-blue-700 font-bold">- NeNe ❤️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy with Interactive Cards */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-9xl">🎨</div>
          <div className="absolute top-40 right-32 text-8xl">📚</div>
          <div className="absolute bottom-32 left-1/3 text-7xl">🧸</div>
          <div className="absolute bottom-20 right-20 text-6xl">🎵</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="text-7xl mb-6">💭</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              🌟 Our Super Philosophy! 🌟
            </h2>
            <p className="text-xl text-blue-600 max-w-4xl mx-auto">
              We believe in teamwork, love, and making every day an adventure 
              that puts children and families first! 🚀
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team-Based Care */}
            <div className="group cursor-pointer">
              <div className="bg-blue-100 p-8 rounded-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 border-4 border-dashed border-blue-300">
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:animate-bounce">👥</div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Team-Based Magic!</h3>
                  <p className="text-blue-600 text-lg leading-relaxed">
                    Like superheroes working together! Our amazing team makes sure 
                    every child gets lots of love and attention from multiple caring grown-ups! ⚡
                  </p>
                </div>
                {/* Hidden reveal on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white p-4 rounded-2xl">
                    <div className="text-center">
                      <div className="text-2xl mb-2">✨</div>
                      <p className="text-sm text-blue-700 font-semibold">
                        Multiple teachers = More fun & learning!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Partnership */}
            <div className="group cursor-pointer">
              <div className="bg-green-100 p-8 rounded-3xl shadow-lg transform group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 border-4 border-dashed border-green-300">
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:animate-bounce">❤️</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Parent Partnership!</h3>
                  <p className="text-green-600 text-lg leading-relaxed">
                    Parents are our best friends! We love chatting, sharing stories, 
                    and building strong friendships with all our daycare families! 🤝
                  </p>
                </div>
                {/* Hidden reveal on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white p-4 rounded-2xl">
                    <div className="text-center">
                      <div className="text-2xl mb-2">💬</div>
                      <p className="text-sm text-green-700 font-semibold">
                        Open communication every single day!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentorship Approach */}
            <div className="group cursor-pointer">
              <div className="bg-purple-100 p-8 rounded-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 border-4 border-dashed border-purple-300">
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:animate-bounce">🌱</div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">Growing Together!</h3>
                  <p className="text-purple-600 text-lg leading-relaxed">
                    We're like wise mentors and cheerleaders! We help families grow, 
                    especially supporting amazing moms and women in our community! 💪
                  </p>
                </div>
                {/* Hidden reveal on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white p-4 rounded-2xl">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <p className="text-sm text-purple-700 font-semibold">
                        Support & guidance beyond just childcare!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Philosophy Quote */}
          <div className="mt-16 text-center">
            <div className="bg-yellow-200 p-8 rounded-3xl border-4 border-yellow-400 max-w-4xl mx-auto shadow-xl">
              <div className="text-5xl mb-4">🗣️</div>
              <blockquote className="text-2xl lg:text-3xl font-bold text-yellow-800 italic">
                "Every child is a star, every family is special, and every day is a chance to create magic!" ✨
              </blockquote>
              <div className="mt-4 text-lg text-yellow-700 font-semibold">
                - The NeNe's Daycare Family
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Amazing Partnerships & Commitment */}
      <section className="py-16 bg-green-50 relative overflow-hidden">
        {/* Fun Background Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-10 left-10 w-32 h-16 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rotate-45 opacity-20 animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">🤝</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
              🌟 Our Super Partners & Promises! 🌟
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Partnerships Card with Flip Effect */}
            <div className="group perspective-1000">
              <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-96 transition-transform duration-700">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white p-8 rounded-3xl shadow-2xl border-4 border-green-300">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🏆</div>
                    <h3 className="text-3xl font-bold text-green-800 mb-4">Our Amazing Partners!</h3>
                    <p className="text-green-600 text-lg mb-6">
                      We team up with the best organizations to give your kids the most amazing experience!
                    </p>
                    <div className="text-green-700 font-semibold">
                      Hover to see our superhero partners! ✨
                    </div>
                  </div>
                </div>
                
                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white p-8 rounded-3xl shadow-2xl border-4 border-green-300">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">🎯 Partnership Power!</h3>
                    <div className="space-y-4">
                      <div className="flex items-center bg-blue-100 p-4 rounded-2xl">
                        <span className="text-2xl mr-4">🐸</span>
                        <div>
                          <span className="font-bold text-blue-800">FrogStreet Programs</span>
                          <p className="text-sm text-blue-600">Educational excellence!</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-green-100 p-4 rounded-2xl">
                        <span className="text-2xl mr-4">👨‍👩‍👧‍👦</span>
                        <div>
                          <span className="font-bold text-green-800">CCS Services</span>
                          <p className="text-sm text-green-600">Child care support!</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-purple-100 p-4 rounded-2xl">
                        <span className="text-2xl mr-4">💼</span>
                        <div>
                          <span className="font-bold text-purple-800">Texas Workforce</span>
                          <p className="text-sm text-purple-600">Career development!</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-orange-100 p-4 rounded-2xl">
                        <span className="text-2xl mr-4">🎒</span>
                        <div>
                          <span className="font-bold text-orange-800">Head Start</span>
                          <p className="text-sm text-orange-600">Early learning boost!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Section with Bouncing Elements */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-dashed border-blue-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 animate-bounce">💝</div>
                  <h3 className="text-3xl font-bold text-blue-800">Our Promise to Families!</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🌈</span>
                      <h4 className="text-xl font-bold text-blue-800">Every Family is Special!</h4>
                    </div>
                    <p className="text-blue-600">
                      Every family's situation is unique and wonderful! Our simple philosophy: 
                      if you need amazing childcare, we're here to help! 🤗
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🎪</span>
                      <h4 className="text-xl font-bold text-green-800">Easy-Peasy Enrollment!</h4>
                    </div>
                    <p className="text-green-600">
                      No complicated rules or criteria! We welcome families from ALL backgrounds 
                      and work together to support your specific needs! 🌟
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Animation */}
              <div className="space-y-4">
                <Link
                  href="/enrollment"
                  className="group block w-full bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 text-center shadow-lg transform hover:scale-105 hover:rotate-1"
                >
                  <span className="group-hover:animate-bounce inline-block">🎒</span>
                  {" "}Learn About Our Easy Enrollment!{" "}
                  <span className="group-hover:animate-bounce inline-block">🎒</span>
                </Link>
                
                <Link
                  href="/contact"
                  className="group block w-full border-4 border-blue-500 text-blue-500 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 text-center shadow-lg transform hover:scale-105 hover:-rotate-1"
                >
                  <span className="group-hover:animate-bounce inline-block">🏠</span>
                  {" "}Schedule Your Fun Tour!{" "}
                  <span className="group-hover:animate-bounce inline-block">🏠</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Super Values with Stacking Animation */}
      <section className="py-16 bg-purple-600 relative overflow-hidden">
        {/* Floating Stars */}
        <div className="absolute top-5 left-5 text-3xl animate-pulse">⭐</div>
        <div className="absolute top-10 right-10 text-4xl animate-bounce">✨</div>
        <div className="absolute bottom-10 left-1/4 text-3xl animate-pulse">🌟</div>
        <div className="absolute bottom-5 right-5 text-4xl animate-bounce">💫</div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-12 bg-pink-400 rounded-full opacity-20 animate-float-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="text-7xl mb-6 animate-bounce">💎</div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              🌟 Our Magical Values! 🌟
            </h2>
            <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto drop-shadow-md">
              ✨ These special principles guide everything we do at NeNe's Daycare! ✨
            </p>
          </div>

          {/* Stacked Value Cards */}
          <div className="space-y-8">
            {/* First Row - 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-yellow-300">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-spin">🛡️</div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">Safety First Always!</h3>
                  <p className="text-purple-600 text-lg">
                    Your precious little one's safety and security is our #1 priority in everything we do! 
                    We're like protective superheroes! 🦸‍♀️
                  </p>
                </div>
              </div>
              
              <div className="group bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-110 hover:-rotate-3 transition-all duration-500 border-4 border-green-300">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-spin">🌈</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Everyone is Welcome!</h3>
                  <p className="text-green-600 text-lg">
                    We welcome ALL families with open arms - no matter your background or situation! 
                    Diversity makes us stronger! 🤗
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-blue-300">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-spin">💬</div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Always Talking!</h3>
                  <p className="text-blue-600 text-lg">
                    We love chatting with families every day! Open, honest communication 
                    keeps our daycare family strong and happy! 📞
                  </p>
                </div>
              </div>
              
              <div className="group bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-110 hover:-rotate-3 transition-all duration-500 border-4 border-orange-300">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-spin">🏘️</div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">Community Heroes!</h3>
                  <p className="text-orange-600 text-lg">
                    We're committed to supporting our amazing Navasota community and 
                    all the hardworking families who make it special! 🏆
                  </p>
                </div>
              </div>
            </div>

            {/* Special Bottom Message */}
            <div className="mt-16 text-center">
              <div className="bg-yellow-400 p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto border-4 border-white transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-purple-800 mb-4">
                  Ready to Join Our Amazing Family?
                </h3>
                <p className="text-xl text-purple-700 mb-6">
                  Come see why parents and kids LOVE being part of the NeNe's Daycare adventure! 
                  Every day is a new chance to learn, play, and grow together! 🌱
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all duration-200 shadow-lg transform hover:scale-110 hover:rotate-2"
                  >
                    🏠 Visit Us Today!
                  </Link>
                  <Link
                    href="/enrollment"
                    className="border-4 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-lg transform hover:scale-110 hover:-rotate-2"
                  >
                    🎒 Start Your Journey!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}