import HeroSection from '../components/home/Herosection';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyMe from '../components/home/WhyMe';
import ProcessPreview from '../components/home/ProcessPreview';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CTA from '../components/home/CTA';

function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <FeaturedProjects />
      <WhyMe />
      <ProcessPreview />
      <TestimonialsPreview />
      <CTA />
    </div>
  );
}

export default Home;