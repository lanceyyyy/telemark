export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Telemark Trade AS",
  "url": "https://telemark-trade.no",
  "logo": "https://telemark-trade.no/logo.jpg",
  "description": "Telemark Trade leverer båtmotorer og anleggsmaskiner som holder i alle værforhold. Kvalitet, service og erfaring siden 2000.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gravevegen 64",
    "addressLocality": "Bø i Telemark",
    "postalCode": "3803",
    "addressCountry": "NO"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+47-900-33-402",
    "contactType": "customer service",
    "availableLanguage": ["Norwegian", "English"]
  },
  "sameAs": [
    "https://www.telemark-trade.no"
  ],
  "foundingDate": "2000",
  "areaServed": "Norway"
});

export const getProductStructuredData = (productName: string, description: string, image?: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": productName,
  "description": description,
  "image": image ? `https://telemark-trade.no${image}` : "https://telemark-trade.no/logo.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Telemark Trade AS"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Telemark Trade AS"
    }
  }
});

export const getServiceStructuredData = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Telemark Trade AS"
  },
  "areaServed": "Norway",
  "serviceType": "Marine Engine Sales and Service"
});

export const getBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": `https://telemark-trade.no${breadcrumb.url}`
  }))
});
