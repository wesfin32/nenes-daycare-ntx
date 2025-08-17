import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | NeNe&apos;s Daycare Navasota",
  description: "Learn about NeNe&apos;s Daycare&apos;s 14+ year history, team-based philosophy, and commitment to supporting Navasota families since 2009.",
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About NeNe&apos;s Daycare
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Serving Navasota families with dedication, care, and professionalism since September 11, 2009
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                NeNe&apos;s Daycare Navasota opened its doors on September 11, 2009, with a simple but powerful mission: 
                to provide exceptional childcare that supports working families in our community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                For over 14 years, we have been a trusted partner to Navasota families, understanding that quality 
                childcare is essential for parents to pursue their careers while knowing their children are safe, 
                happy, and learning.
              </p>
              <p className="text-lg text-gray-700">
                We take pride in our deep roots in the Navasota community and our commitment to supporting families 
                from all backgrounds, with 85% of our families benefiting from government assistance programs.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Founded: September 11, 2009
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  14+ years of service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ages served: 8 weeks to 12 years
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  12-hour daily operation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  85% families use government assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a team-based approach that puts children and families first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team-Based Care</h3>
              <p className="text-gray-600">
                Our collaborative approach ensures every child receives comprehensive attention from multiple caring adults.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Parent Partnership</h3>
              <p className="text-gray-600">
                We work closely with parents, maintaining open communication and building strong relationships with families.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship Approach</h3>
              <p className="text-gray-600">
                We provide mentorship and support, especially for women, helping families navigate childcare and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Partnerships</h3>
              <p className="text-gray-700 mb-4">
                We are proud partners with leading educational and workforce development organizations:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  FrogStreet Educational Programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  CCS (Child Care Services)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  CCMS (Texas Workforce)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Head Start Programs
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to Families
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We understand that every family&apos;s situation is unique. That&apos;s why we maintain a simple philosophy: 
                if you need quality childcare, we&apos;re here to help.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our enrollment process has no specific criteria beyond the need for reliable, caring childcare. 
                We welcome families from all backgrounds and work to support your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enrollment"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Learn About Enrollment
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              These principles guide everything we do at NeNe&apos;s Daycare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Safety First</h3>
              <p className="text-blue-100">Your child&apos;s safety and security is our top priority in everything we do.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Inclusive Care</h3>
              <p className="text-blue-100">We welcome all families regardless of background or financial situation.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Open Communication</h3>
              <p className="text-blue-100">We maintain transparent, ongoing communication with all families.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Community Support</h3>
              <p className="text-blue-100">We&apos;re committed to supporting our Navasota community and working families.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}