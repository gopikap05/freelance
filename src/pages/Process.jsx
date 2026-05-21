import ProcessHero from '../components/process/ProcessHero';
import ProcessSteps from '../components/process/ProcessSteps';
import ProcessDetails from '../components/process/ProcessDetails';
import CTA from '../components/home/CTA';

function Process() {
  return (
    <div>
      <ProcessHero />
      <ProcessSteps />
      <ProcessDetails />
      <CTA />
    </div>
  );
}

export default Process;