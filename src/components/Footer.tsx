import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              NeNe&apos;s Daycare Navasota
            </h3>
            <p className="text-gray-300 mb-4">
              Trusted childcare since 2009. Serving families with children 8 weeks to 12 years old.
            </p>
            <p className="text-sm text-gray-400">
              Licensed and regulated by the Texas Department of Family and Protective Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/age-groups" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Age Groups
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/enrollment" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Enrollment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Infant Care (8 weeks+)</li>
              <li>Toddler Programs</li>
              <li>Pre-K Education</li>
              <li>School Age Care</li>
              <li>All Meals Included</li>
              <li>12-Hour Daily Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>Navasota, Texas</p>
              <p>Open 12 hours daily</p>
              <p className="text-blue-400 font-semibold">
                Schedule a tour today!
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NeNe&apos;s Daycare Navasota. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Proudly serving Navasota families since 2009
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;