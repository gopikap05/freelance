import SEO from '../components/utils/SEO';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCards from '../components/services/ServiceCards';
import TechIndustries from '../components/services/TechIndustries';
import CTA from '../components/home/CTA';

function Service() {
  return (
    <>
      <SEO 
        title="Services"
        description="Professional web development services including React development, WordPress websites, e-commerce solutions."
        keywords="web development services, React development, WordPress development"
        url="https://gopikap05.github.io/freelance/service"
      />
      <div>
        <Breadcrumbs />
        <ServicesHero />
        <ServiceCards />
        <TechIndustries />
        <CTA />
      </div>
    </>
  );
}

export default Service;