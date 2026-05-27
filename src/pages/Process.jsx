import SEO from '../components/utils/SEO';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ProcessHero from '../components/process/ProcessHero';
import ProcessSteps from '../components/process/ProcessSteps';
import ProcessDetails from '../components/process/ProcessDetails';
import CTA from '../components/home/CTA';

function Process() {
  return (
    <>
      <SEO 
        title="My Process"
        description="Understand my web development process from discovery to launch."
        keywords="web development process, freelance workflow, project timeline"
        url="https://gopikap05.github.io/freelance/process"
      />
      <div>
        <Breadcrumbs />
        <ProcessHero />
        <ProcessSteps />
        <ProcessDetails />
        <CTA />
      </div>
    </>
  );
}

export default Process;