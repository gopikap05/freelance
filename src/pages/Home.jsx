import SEO from '../components/utils/SEO';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import HeroSection from '../components/home/Herosection';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyMe from '../components/home/WhyMe';
import ProcessPreview from '../components/home/ProcessPreview';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CTA from '../components/home/CTA';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Gopika P - Freelance Web Developer specializing in React, WordPress, and e-commerce solutions. Modern, responsive websites that drive results."
        keywords="freelance web developer, React developer, WordPress developer, e-commerce, frontend developer India"
        url="https://gopikap05.github.io/freelance/"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gopika P",
              "jobTitle": "Freelance Web Developer",
              "url": "https://gopikap05.github.io/freelance/",
              "sameAs": [
                "https://www.linkedin.com/in/gopika05/"
              ],
              "knowsAbout": ["React", "WordPress", "JavaScript", "Frontend Development", "E-commerce", "Web Development"],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hosur",
                "addressCountry": "India"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Gopika P - Freelance Web Developer",
              "image": "https://gopikap05.github.io/freelance/logo.png",
              "url": "https://gopikap05.github.io/freelance/",
              "telephone": "",
              "email": "gopikap026@gmail.com",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hosur",
                "addressCountry": "India"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "availableTime": "10:00-18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/in/gopika05/"
              ]
            }
          `}
        </script>
      </Helmet>
      <div>
        <Breadcrumbs />
        <HeroSection />
        <Services />
        <FeaturedProjects />
        <WhyMe />
        <ProcessPreview />
        <TestimonialsPreview />
        <CTA />
      </div>
    </>
  );
}

export default Home;