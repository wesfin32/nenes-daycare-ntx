const Schema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "NeNe&apos;s Daycare Navasota",
    "description": "Professional daycare in Navasota, Texas serving children 8 weeks to 12 years old. 12-hour daily care with all meals included.",
    "url": "https://nenes-daycare-navasota.com",
    "foundingDate": "2009-09-11",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Navasota",
      "addressRegion": "Texas",
      "addressCountry": "US"
    },
    "telephone": "Contact for phone number",
    "openingHours": "Mo-Fr 12:00-24:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Government Assistance Programs",
    "areaServed": {
      "@type": "City",
      "name": "Navasota",
      "sameAs": "https://en.wikipedia.org/wiki/Navasota,_Texas"
    },
    "hasCredential": [
      {
        "@type": "EducationalOrganizationCredential",
        "name": "Licensed by Texas Department of Family and Protective Services"
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Age Range",
        "value": "8 weeks to 12 years"
      },
      {
        "@type": "PropertyValue", 
        "name": "Hours of Operation",
        "value": "12 hours daily"
      },
      {
        "@type": "PropertyValue",
        "name": "Meals Included",
        "value": "Breakfast, lunch, and snacks included"
      },
      {
        "@type": "PropertyValue",
        "name": "Government Assistance",
        "value": "CCAP, Head Start accepted"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/nenes-daycare-navasota",
      "https://www.google.com/business/nenes-daycare-navasota"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NeNe&apos;s Daycare Navasota",
    "image": "/logo.png",
    "description": "Trusted childcare since 2009. Professional daycare serving families in Navasota, Texas.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Navasota",
      "addressLocality": "Navasota", 
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3879",
      "longitude": "-96.0877"
    },
    "url": "https://nenes-daycare-navasota.com",
    "telephone": "Contact for details",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "12:00",
        "closes": "24:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
};

export default Schema;