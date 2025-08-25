import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
                width={120}
                height={120}
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
    </div>
  );
}
