// components/PageWrapper.jsx
import React from 'react';
import SEO from './SEO';

const PageWrapper = ({ component: Component, title, description, keywords }) => {
  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      <Component />
    </>
  );
};

export default PageWrapper;