import ServicesHero from '../components/services/ServicesHero';
import ServiceCards from '../components/services/ServiceCards';
import TechIndustries from '../components/services/TechIndustries';
import CTA from '../components/home/CTA';

function Service() {
  return (
    <div>
      <ServicesHero />
      <ServiceCards />
      <TechIndustries />
      <CTA />
    </div>
  );
}

export default Service;