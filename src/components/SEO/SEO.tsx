import React from 'react';
import { Helmet } from 'react-helmet';

// import * as styles from './SEO.module.scss';

export interface ISEOProps {
  children?: React.ReactNode;
  title: React.ReactNode;
  keywords: string;
  description: string;
}

const SEO = ({ title, keywords, description }: ISEOProps) => {
  // The reason why Gatsby HEAD API is not being used is because of:
  // https://github.com/gatsbyjs/gatsby/issues/36458#issuecomment-1334232043

  return (
    <Helmet defer={false} htmlAttributes={{ lang: `en` }}>
      <meta charSet="utf-8" />

      {/* Render Chrome if available or using latest version of Internet Explorer (Recommended). */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge; chrome=1" />

      <title>{`${title}`}</title>

      {/* Description content should ideally be between 160 - 200 characters */}
      <meta name="description" content={description} />

      {/* Keyword content should list the top 10 words in order of relevance. The words chosen need
        to appear on every page. These words were chosen from the header as it appears on each page */}
      <meta name="keywords" content={keywords} />

      {/* Allows for Open Graph meta tags */}
      <meta property="og:url" content="https://environmentaljustice.gov" />
      <meta property="og:title" content="Environmental Justice.gov" />
      <meta property="og:site_name" content="Environmental Justice.gov" />
      <meta property="og:description" content={description} />

      {/* DAP Tag */}
      {/* // Todo: Add DAP Tag */}
      <script></script>
    </Helmet>
  );
};

export default SEO;
