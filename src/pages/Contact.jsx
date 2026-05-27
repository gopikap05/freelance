import SEO from '../components/utils/SEO';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';

function Contact() {
  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with Gopika P for freelance web development projects."
        keywords="contact web developer, hire freelance developer"
        url="https://gopikap05.github.io/freelance/contact"
      />
      <div>
        <Breadcrumbs />
        <ContactHero />
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;