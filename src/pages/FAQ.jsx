import SEO from '../components/utils/SEO';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import FAQHero from '../components/faq/FAQHero';
import FAQList from '../components/faq/FAQList';
import CTA from '../components/home/CTA';

function FAQ() {
  return (
    <>
      <SEO 
        title="FAQ"
        description="Frequently asked questions about my web development services."
        keywords="web development FAQ, freelance developer questions"
        url="https://gopikap05.github.io/freelance/faq"
      />
      <div>
        <Breadcrumbs />
        <FAQHero />
        <FAQList />
        <CTA />
      </div>
    </>
  );
}

export default FAQ;