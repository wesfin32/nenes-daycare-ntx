import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Age Groups & Programs | NeNe&apos;s Daycare Navasota",
  description: "Comprehensive childcare programs for ages 8 weeks to 12 years. Infant care, toddler programs, pre-K education, and school-age care in Navasota, Texas.",
};

export default function AgeGroups() {
  const ageGroups = [
    {
      title: "Infants",
      ageRange: "8 weeks to 17 months",
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Nurturing care for our youngest children with individualized attention and development focus.",
      features: [
        "Individualized feeding and sleeping schedules",
        "Diaper changing and potty training preparation", 
        "Sensory exploration activities",
        "Language development through reading and singing",
        "Safe, clean environment designed for infants",
        "Daily communication with parents about child&apos;s day"
      ],
      dailyActivities: [
        "Tummy time and motor skill development",
        "Sensory play with safe materials",
        "Story time and music",
        "Outdoor fresh air time (weather permitting)",
        "Individual play and interaction"
      ]
    },
    {
      title: "Toddlers", 
      ageRange: "18 months to 2.5 years",
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-10v20m5-20v20" />
        </svg>
      ),
      description: "Active learning environment that encourages exploration, independence, and social skills.",
      features: [
        "Potty training support and guidance",
        "Language development and vocabulary building",
        "Fine and gross motor skill activities",
        "Social interaction and sharing concepts",
        "Creative art and sensory activities",
        "Beginning structured learning routines"
      ],
      dailyActivities: [
        "Circle time with songs and stories",
        "Art and craft projects",
        "Playground and outdoor play",
        "Snack time social skills",
        "Free play and exploration time"
      ]
    },
    {
      title: "Pre-K Group 1",
      ageRange: "2.5 to 3.5 years", 
      color: "orange",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "Structured learning with focus on school readiness, cognitive development, and social skills.",
      features: [
        "Early literacy and pre-reading skills",
        "Number recognition and counting",
        "Fine motor skill development for writing",
        "Following directions and classroom routines",
        "Problem-solving and critical thinking",
        "Cooperative play and teamwork"
      ],
      dailyActivities: [
        "Educational circle time",
        "Letter and number activities",
        "Science exploration and experiments",
        "Music and movement activities", 
        "Dramatic play and imagination time"
      ]
    },
    {
      title: "Pre-K Group 2",
      ageRange: "3.5 to 4.5 years",
      color: "purple", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "Advanced pre-kindergarten preparation with comprehensive school readiness curriculum.",
      features: [
        "Advanced literacy and beginning reading",
        "Math concepts and problem solving",
        "Writing skills and fine motor development",
        "Science exploration and discovery",
        "Social studies and community awareness",
        "Independence and responsibility building"
      ],
      dailyActivities: [
        "Structured learning centers",
        "Reading comprehension activities",
        "Math manipulatives and games",
        "Art projects and creative expression",
        "Group projects and presentations"
      ]
    },
    {
      title: "School Age",
      ageRange: "4+ years (Kindergarten and up)",
      color: "teal",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Before and after school care with homework support and enrichment activities.",
      features: [
        "Before and after school transportation coordination",
        "Homework assistance and study support",
        "Educational enrichment activities",
        "Physical activities and sports",
        "STEM learning opportunities",
        "Leadership and responsibility development"
      ],
      dailyActivities: [
        "Quiet time for homework completion",
        "Educational games and challenges",
        "Physical activities and sports",
        "Creative projects and arts",
        "Field trips and special events"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      green: "bg-green-50 border-green-200 text-green-600", 
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      teal: "bg-teal-50 border-teal-200 text-teal-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      orange: "bg-orange-600", 
      purple: "bg-purple-600",
      teal: "bg-teal-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Age Groups & Programs
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive childcare programs designed for every stage of your child&apos;s development
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              From Infants to School Age
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs are designed to meet the unique developmental needs of children 
              at every stage, from 8 weeks old through 12 years.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {ageGroups.map((group, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 text-center ${getColorClasses(group.color)}`}>
                <div className={`w-12 h-12 ${getIconBgClasses(group.color)} rounded-full flex items-center justify-center mx-auto mb-2 text-white`}>
                  {group.icon}
                </div>
                <h3 className="font-semibold text-sm">{group.title}</h3>
                <p className="text-xs mt-1">{group.ageRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`p-6 ${getIconBgClasses(group.color)} text-white`}>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{group.title}</h3>
                      <p className="text-lg opacity-90">{group.ageRange}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-lg text-gray-700 mb-6">{group.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Features</h4>
                      <ul className="space-y-2">
                        {group.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className={`w-2 h-2 ${getIconBgClasses(group.color)} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Daily Activities</h4>
                      <ul className="space-y-2">
                        {group.dailyActivities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <span className={`w-2 h-2 ${getIconBgClasses(group.color)} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Educational Approach
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We partner with FrogStreet, a leading early childhood education curriculum, to ensure 
                your child receives the highest quality educational experience at every developmental stage.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our programs are designed to foster creativity, critical thinking, and social skills 
                while preparing children for future academic success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enrollment"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  Enroll Your Child
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-center"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Programs?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Age-appropriate curriculum for every stage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Small group sizes for individualized attention
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Experienced, caring teachers and staff
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Daily communication with parents
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Safe, nurturing learning environment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Preparation for kindergarten and beyond
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Find the Right Program for Your Child
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every child is unique, and our experienced team will work with you to ensure 
            your child is placed in the perfect program for their age and developmental needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Discuss Your Child&apos;s Needs
          </Link>
        </div>
      </section>
    </div>
  );
}