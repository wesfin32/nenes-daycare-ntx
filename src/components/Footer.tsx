import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              NeNe&apos;s Daycare Navasota
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              Trusted childcare since 2009. Serving families with children 8 weeks to 12 years old.
            </p>
            <p className="text-xs text-gray-500">
              Licensed and regulated by the Texas Department of Family and Protective Services
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all shadow-sm font-semibold text-sm"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>

          {/* Quick Links & Services Combined */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-600">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/age-groups" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Age Groups
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/enrollment" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Enrollment
                  </Link>
                </li>
                <li>
                  <Link href="/government-assistance" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Government Assistance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-600">Our Services</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Infant Care (8 weeks+)</li>
                <li>Toddler Programs</li>
                <li>Pre-K Education</li>
                <li>School Age Care</li>
                <li>All Meals Included</li>
                <li>12-Hour Daily Care</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-600">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="font-medium">Location:</span> Navasota, Texas
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> 12 hours daily
              </p>
              <p className="text-blue-600 font-semibold">
                Schedule a tour today!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2024 NeNe&apos;s Daycare Navasota. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Proudly serving Navasota families since 2009</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;