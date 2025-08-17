import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enrollment | NeNe&apos;s Daycare Navasota",
  description: "Simple enrollment process for NeNe&apos;s Daycare. No specific criteria required - just quality childcare for your family. Schedule a tour today!",
};

export default function Enrollment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Enrollment Information
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Simple, straightforward enrollment process - if you need quality childcare, we&apos;re here to help
          </p>
        </div>
      </section>

      {/* Simple Enrollment Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              No Complicated Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              At NeNe&apos;s Daycare, we believe that if you need quality childcare for your family, 
              we should be able to help. Our enrollment process is designed to be simple and accessible.
            </p>
            <div className="bg-purple-50 p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Simple Philosophy</h3>
              <p className="text-lg text-gray-700">
                &quot;If you need childcare, we&apos;re here for you. No specific enrollment criteria - 
                just a commitment to providing excellent care for your child.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple Enrollment Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with NeNe&apos;s Daycare is easy and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule a Tour</h3>
              <p className="text-gray-600 mb-4">
                Visit our facility to see our programs, meet our staff, and ask any questions you have.
              </p>
              <Link
                href="/contact"
                className="text-purple-600 font-semibold hover:text-purple-700"
              >
                Schedule Tour →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Application</h3>
              <p className="text-gray-600 mb-4">
                Fill out our simple application form with basic information about your child and family.
              </p>
              <span className="text-gray-500">Available during tour</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Care</h3>
              <p className="text-gray-600 mb-4">
                Once approved, we&apos;ll work with you to determine the best start date for your child.
              </p>
              <span className="text-green-600 font-semibold">Welcome to the family!</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Required Information
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                To ensure the safety and proper care of your child, we do need some basic information and documentation:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Child&apos;s Information</h4>
                    <p className="text-gray-600">Basic details about your child, emergency contacts, and any special needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Immunization Records</h4>
                    <p className="text-gray-600">Up-to-date vaccination records as required by Texas state law</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medical Information</h4>
                    <p className="text-gray-600">Any allergies, medications, or medical conditions we should know about</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Information</h4>
                    <p className="text-gray-600">Preferred payment method and any assistance program details</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                The best way to begin the enrollment process is to schedule a tour. 
                During your visit, you can see our facilities, meet our team, and get all your questions answered.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  Schedule Your Tour
                </Link>
                <p className="text-sm text-gray-600 text-center">
                  Tours available by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Group Reminder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ages We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive care for children from 8 weeks to 12 years old
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-blue-600 mb-2">Infants</h3>
              <p className="text-sm text-gray-600">8 weeks - 17 months</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-green-600 mb-2">Toddlers</h3>
              <p className="text-sm text-gray-600">18 months - 2.5 years</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-orange-600 mb-2">Pre-K 1</h3>
              <p className="text-sm text-gray-600">2.5 - 3.5 years</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-purple-600 mb-2">Pre-K 2</h3>
              <p className="text-sm text-gray-600">3.5 - 4.5 years</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-teal-600 mb-2">School Age</h3>
              <p className="text-sm text-gray-600">4+ years</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/age-groups"
              className="text-purple-600 font-semibold hover:text-purple-700"
            >
              Learn More About Our Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Government Assistance Note */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Government Assistance Welcome
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            85% of our families use government assistance programs. We&apos;re experienced in working with CCAP, 
            Head Start, and Texas Workforce programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/government-assistance"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn About Assistance Programs
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some frequently asked questions about enrollment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you have a waiting list?
              </h3>
              <p className="text-gray-700">
                Availability varies by age group and time of year. We encourage you to schedule a tour 
                to discuss current openings and potential wait times for your child&apos;s age group.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I start mid-week or mid-month?
              </h3>
              <p className="text-gray-700">
                Yes! We understand that childcare needs don&apos;t always align with calendar months. 
                We work with families to find the best start date for their situation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What if my child has special needs?
              </h3>
              <p className="text-gray-700">
                We welcome children with various needs and work closely with families to ensure 
                proper care. Please discuss your child&apos;s specific needs during your tour.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can we start?
              </h3>
              <p className="text-gray-700">
                Once all paperwork is complete and we have availability, children can typically 
                start within a few days. Emergency situations are handled case-by-case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Take the First Step Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            The enrollment process begins with a simple tour. Come see why families 
            have trusted NeNe&apos;s Daycare since 2009.
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule Your Tour Today
          </Link>
        </div>
      </section>
    </div>
  );
}