// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const siteTitle = 'Zia Dental Care';
  const defaultDescription = 'Professional dental care services in Swabi. We provide comprehensive dental treatments with a focus on patient comfort and satisfaction.';
  const defaultKeywords = 'dental clinic, dentist, dental care, teeth cleaning, dental implants, cosmetic dentistry, Dental Care';

  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={siteTitle} />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default SEO;






//there must a problem with this code snippet, because it is not working as expected. Please help me to fix it. I am stuck here for the last 120 hours and am not able to
//find the solution. I am using react, react-router-dom, and react-helmet-async