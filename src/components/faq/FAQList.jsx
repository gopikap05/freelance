import { useState } from 'react';
import { Box, Typography } from '@mui/material';

const ACCENT = "#8a9a5b";

const faqCategories = [
  {
    title: "Common Questions",
    questions: [
      { id: 'c1', question: 'How do we get started?', answer: "Simply reach out through the contact form or email. We'll schedule a free discovery call to discuss your project goals, timeline, and budget." },
      { id: 'c2', question: 'Do you work with startups?', answer: "Absolutely! I love working with startups and small businesses. I offer flexible payment plans and scalable solutions that grow with you." },
      { id: 'c3', question: 'Can you redesign my existing website?', answer: "Yes, I specialize in redesigns. I'll audit your current site and create a modern, faster, and more effective version." },
      { id: 'c4', question: 'Do you provide ongoing maintenance?', answer: "Yes, I offer monthly maintenance packages that include updates, backups, security monitoring, and priority support." },
    ],
  },
  {
    title: "Project Timeline",
    questions: [
      { id: 't1', question: 'How long does a typical project take?', answer: "A standard 5-page website takes 2–4 weeks. E-commerce sites take 4–6 weeks. Complex web apps take 6–8+ weeks. Timelines depend on project scope and feedback speed." },
      { id: 't2', question: 'What affects the timeline?', answer: "Content delivery speed, feedback response time, project complexity, and revision rounds are the main factors." },
      { id: 't3', question: 'Can you work with tight deadlines?', answer: "Yes, for an additional rush fee, I can prioritize your project. Let's discuss your deadline during the discovery call." },
    ],
  },
  {
    title: "Pricing",
    questions: [
      { id: 'p1', question: 'How much does a website cost?', answer: "Pricing starts from ₹15,000. The final cost is based on your specific website requirements, features, and complexity. Contact me for a custom quote tailored to your needs." },
      { id: 'p2', question: 'Do you offer payment plans?', answer: "Yes, I offer flexible payment options: 50% upfront, 25% at milestone, 25% at launch. Custom plans available for larger projects." },
      { id: 'p3', question: "What's included in your pricing?", answer: "All pricing includes design, development, testing, launch support, and 30 days of free post-launch support. Hosting and domain are not included." },
      { id: 'p4', question: 'Do you charge for revisions?', answer: "Two rounds of revisions are included. Additional revisions are billed separately." },
    ],
  },
  {
    title: "Revisions & Support",
    questions: [
      { id: 's1', question: "What if I don't like the design?", answer: "I provide mockups before development. You get 2 revision rounds to ensure the design matches your vision." },
      { id: 's2', question: 'Do you provide training after launch?', answer: "Yes, I provide a video tutorial or live walkthrough showing you how to manage your website content." },
      { id: 's3', question: 'What happens after the project ends?', answer: "You get 30 days of free support. After that, you can purchase ongoing maintenance plans or hourly support." },
      { id: 's4', question: 'Can you fix bugs after launch?', answer: "Absolutely. Any bugs from my code are fixed for free within 30 days of launch." },
    ],
  },
];

function AccordionItem({ q, expanded, onToggle }) {
  const isOpen = expanded === q.id;

  return (
    <Box
      sx={{
        border: '1px solid #e8e0d5',
        borderTop: `3px solid ${isOpen ? ACCENT : 'transparent'}`,
        bgcolor: isOpen ? '#fdf9f4' : '#faf7f2',
        transition: 'background-color 0.25s, border-top-color 0.25s',
        '&:hover': { borderTopColor: ACCENT },
      }}
    >
      {/* Trigger */}
      <Box
        onClick={() => onToggle(q.id)}
        sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '16px',
          px: '28px', py: '20px',
          cursor: 'pointer',
        }}
      >
        <Typography sx={{
          fontFamily: 'var(--heading)', fontSize: { xs: '15px', md: '17px' },
          fontWeight: 500, color: '#2e2820', lineHeight: 1.3,
        }}>
          {q.question}
        </Typography>
        <Box sx={{
          flexShrink: 0, width: '28px', height: '28px',
          border: `1px solid ${isOpen ? ACCENT : '#e0d8cc'}`,
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: isOpen ? ACCENT : '#a89880',
          transition: 'border-color 0.25s, color 0.25s',
        }}>
          <svg
            width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{
              transition: 'transform 0.3s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </Box>
      </Box>

      {/* Collapsible body — max-height trick */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease',
        }}
      >
        <Box sx={{ overflow: 'hidden' }}>
          <Box sx={{
            px: '28px', pt: '18px', pb: '24px',
            borderTop: '1px solid #e8e0d5',
          }}>
            <Typography sx={{
              fontFamily: 'var(--sans)', fontSize: '13px',
              color: '#6b5e4a', lineHeight: 1.85,
            }}>
              {q.answer}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function FAQList() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (id) => {
    setExpanded(prev => prev === id ? false : id);
  };

  return (
    <Box sx={{ py: { xs: '60px', md: '100px' }, px: '5%', bgcolor: '#ffffff' }}>
      <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
        {faqCategories.map((cat, i) => (
          <Box key={i} sx={{ mb: '56px', '&:last-child': { mb: 0 } }}>

            {/* Category header */}
            <Box sx={{
              display: 'flex', alignItems: 'center', gap: '16px',
              mb: '24px', pb: '16px', borderBottom: '1px solid #e8e0d5',
            }}>
              <Box sx={{ width: '4px', height: '24px', bgcolor: ACCENT, borderRadius: '2px' }} />
              <Typography variant="h2" sx={{
                fontFamily: 'var(--heading)',
                fontSize: { xs: '22px', md: '26px' },
                fontWeight: 500, color: '#2e2820',
              }}>
                {cat.title}
              </Typography>
            </Box>

            {/* Questions */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {cat.questions.map((q) => (
                <AccordionItem
                  key={q.id}
                  q={q}
                  expanded={expanded}
                  onToggle={handleToggle}
                />
              ))}
            </Box>

          </Box>
        ))}
      </Box>
    </Box>
  );
}