import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government Assistance | NeNe&apos;s Daycare Navasota",
  description: "We accept CCAP, Head Start, and work with Texas Workforce programs. 85% of our families use government assistance for childcare in Navasota.",
};

export default function GovernmentAssistance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Government Assistance Programs
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            We welcome families using government assistance - 85% of our families benefit from these valuable programs
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Supporting Working Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that quality childcare can be expensive. That&apos;s why we actively participate 
              in government assistance programs to help make childcare accessible to all families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-lg text-gray-700">of our families use government assistance</div>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <div className="text-5xl font-bold text-teal-600 mb-2">14+</div>
              <div className="text-lg text-gray-700">years of experience with assistance programs</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-lg text-gray-700">committed to helping every family</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs We Accept */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Programs We Accept
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with several government assistance programs to help make quality childcare affordable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">CCAP</h3>
                  <p className="text-gray-600">Child Care Assistance Program</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The Child Care Assistance Program helps low-income families pay for childcare while they work, 
                attend school, or participate in job training.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Financial assistance for working families
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Support for students and job training participants
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Income-based eligibility requirements
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Direct payment to approved childcare providers
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Head Start</h3>
                  <p className="text-gray-600">Early Childhood Education Program</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Head Start promotes school readiness for children from birth to age 5 from low-income families 
                by supporting their development in a comprehensive way.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Comprehensive early childhood education
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Health and nutrition services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Family engagement and support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Preparation for kindergarten success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Program Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work closely with several organizations to ensure families receive the support they need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CCS</h3>
              <p className="text-gray-600">Child Care Services - helping families access quality childcare options</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CCMS</h3>
              <p className="text-gray-600">Texas Workforce Commission - connecting families with workforce development programs</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FrogStreet</h3>
              <p className="text-gray-600">Educational curriculum partner providing quality early childhood learning programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How We Support Families
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our experienced team understands the assistance program process and works closely with families 
                to ensure they receive the support they&apos;re entitled to.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Application Assistance</h4>
                    <p className="text-gray-600">Help navigating the application process for assistance programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Documentation Support</h4>
                    <p className="text-gray-600">Assistance with required paperwork and documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direct Communication</h4>
                    <p className="text-gray-600">We work directly with assistance program coordinators</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600">Continued assistance with renewals and program changes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h3>
              <p className="text-gray-700 mb-6">
                If you&apos;re interested in applying for government assistance or already have benefits, 
                we&apos;re here to help make the process as smooth as possible.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Discuss Your Situation
                </Link>
                <p className="text-sm text-gray-600 text-center">
                  We&apos;ll help you understand your options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Links to important resources for government assistance programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Texas Workforce Commission</h3>
              <p className="text-gray-600 mb-4">
                Apply for child care assistance and find information about eligibility requirements.
              </p>
              <a
                href="https://www.twc.texas.gov/programs/child-care-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Visit TWC Website →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Head Start Locator</h3>
              <p className="text-gray-600 mb-4">
                Find local Head Start programs and learn about early childhood education services.
              </p>
              <a
                href="https://eclkc.ohs.acf.hhs.gov/center-locator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Find Head Start Programs →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Texas HHSC</h3>
              <p className="text-gray-600 mb-4">
                Texas Health and Human Services information on various family support programs.
              </p>
              <a
                href="https://www.hhs.texas.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-semibold hover:text-teal-700"
              >
                Visit HHSC →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let Us Help You Access Quality Childcare
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t let financial concerns prevent your family from accessing quality childcare. 
            We&apos;re experienced in working with assistance programs and are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Help with Applications
            </Link>
            <Link
              href="/enrollment"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn About Enrollment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}