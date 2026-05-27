import SEO from '../components/utils/SEO';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import AboutHero from '../components/about/AboutHero';
import MyStory from '../components/about/MyStory';
import SkillsTools from '../components/about/SkillsTools';
import CTA from '../components/home/CTA';

function About() {
  return (
    <>
      <SEO 
        title="About Me"
        description="Learn about Gopika P - freelance web developer with 4+ years of experience in React, WordPress, and modern web technologies."
        keywords="about web developer, freelance developer, React developer India, web developer portfolio"
        url="https://gopikap05.github.io/freelance/about"
      />
      <div>
        <Breadcrumbs />
        <AboutHero />
        <MyStory />
        <SkillsTools />
        <CTA />
      </div>
    </>
  );
}

export default About;