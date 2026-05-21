import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQList() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqCategories = [
    {
      title: "Common Questions",
      icon: "💬",
      questions: [
        {
          id: 'common1',
          question: 'How do we get started?',
          answer: 'Simply reach out through the contact form or email. We\'ll schedule a free discovery call to discuss your project goals, timeline, and budget.'
        },
        {
          id: 'common2',
          question: 'Do you work with startups?',
          answer: 'Absolutely! I love working with startups and small businesses. I offer flexible payment plans and scalable solutions that grow with you.'
        },
        {
          id: 'common3',
          question: 'Can you redesign my existing website?',
          answer: 'Yes, I specialize in redesigns. I\'ll audit your current site and create a modern, faster, and more effective version.'
        },
        {
          id: 'common4',
          question: 'Do you provide ongoing maintenance?',
          answer: 'Yes, I offer monthly maintenance packages that include updates, backups, security monitoring, and priority support.'
        }
      ]
    },
    {
      title: "Project Timeline",
      icon: "⏱️",
      questions: [
        {
          id: 'timeline1',
          question: 'How long does a typical project take?',
          answer: 'A standard 5-page website takes 2-4 weeks. E-commerce sites take 4-6 weeks. Complex web apps take 6-8+ weeks. Timelines depend on project scope and feedback speed.'
        },
        {
          id: 'timeline2',
          question: 'What affects the timeline?',
          answer: 'Content delivery speed, feedback response time, project complexity, and revision rounds are the main factors.'
        },
        {
          id: 'timeline3',
          question: 'Can you work with tight deadlines?',
          answer: 'Yes, for an additional rush fee, I can prioritize your project. Let\'s discuss your deadline during the discovery call.'
        }
      ]
    },
    {
      title: "Pricing",
      icon: "💰",
      questions: [
        {
          id: 'pricing1',
          question: 'How much does a website cost?',
          answer: 'Pricing varies based on complexity. A simple landing page starts at $800, a 5-page business site at $1500, and e-commerce at $2000+. Contact me for a custom quote.'
        },
        {
          id: 'pricing2',
          question: 'Do you offer payment plans?',
          answer: 'Yes, I offer flexible payment options: 50% upfront, 25% at milestone, 25% at launch. Custom plans available for larger projects.'
        },
        {
          id: 'pricing3',
          question: 'What\'s included in your pricing?',
          answer: 'All pricing includes design, development, testing, launch support, and 30 days of free post-launch support. Hosting and domain are not included.'
        },
        {
          id: 'pricing4',
          question: 'Do you charge for revisions?',
          answer: 'Two rounds of revisions are included. Additional revisions are billed at $50/hour.'
        }
      ]
    },
    {
      title: "Revisions & Support",
      icon: "🛠️",
      questions: [
        {
          id: 'support1',
          question: 'What if I don\'t like the design?',
          answer: 'I provide mockups before development. You get 2 revision rounds to ensure the design matches your vision.'
        },
        {
          id: 'support2',
          question: 'Do you provide training after launch?',
          answer: 'Yes, I provide a video tutorial or live walkthrough showing you how to manage your website content.'
        },
        {
          id: 'support3',
          question: 'What happens after the project ends?',
          answer: 'You get 30 days of free support. After that, you can purchase ongoing maintenance plans or hourly support.'
        },
        {
          id: 'support4',
          question: 'Can you fix bugs after launch?',
          answer: 'Absolutely. Any bugs from my code are fixed for free within 30 days of launch.'
        }
      ]
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#ffffff'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        {faqCategories.map((category, catIndex) => (
          <Box key={catIndex} sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '28px'
                }}
              >
                {category.icon}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: { xs: '28px', md: '32px' },
                  color: '#3d3529',
                  fontWeight: 500
                }}
              >
                {category.title}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {category.questions.map((q) => (
                <Accordion
                  key={q.id}
                  expanded={expanded === q.id}
                  onChange={handleChange(q.id)}
                  sx={{
                    bgcolor: '#faf7f2',
                    border: '1px solid #e8e0d5',
                    borderRadius: '8px !important',
                    boxShadow: 'none',
                    '&:before': { display: 'none' }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#8a9a5b' }} />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#3d3529'
                      }
                    }}
                  >
                    {q.question}
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#6b5e4a',
                      lineHeight: 1.6,
                      borderTop: '1px solid #e8e0d5'
                    }}
                  >
                    {q.answer}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FAQList;