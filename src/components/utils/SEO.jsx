import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords = "", 
  url = "https://gopikap05.github.io/freelance/",
  image = "/logo.png",
  type = "website"
}) {
  const fullTitle = title ? `${title} | Gopika P - Freelance Web Developer` : "Gopika P | Freelance Web Developer";
  const fullDescription = description || "Professional freelance web development services specializing in React, WordPress, and e-commerce solutions.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Gopika P" />
      <meta name="robots" content="index, follow" />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Gopika P | Freelance Web Developer" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
}