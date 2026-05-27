import SEO from '../components/utils/SEO';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import WorkHero from '../components/work/WorkHero';
import ProjectsGrid from '../components/work/ProjectsGrid';
import CTA from '../components/home/CTA';

function Work() {
  return (
    <>
      <SEO 
        title="Work"
        description="View my portfolio of freelance web development projects."
        keywords="web development portfolio, React projects, WordPress websites"
        url="https://gopikap05.github.io/freelance/work"
      />
      <div>
        <Breadcrumbs />
        <WorkHero />
        <ProjectsGrid />
        <CTA />
      </div>
    </>
  );
}

export default Work;