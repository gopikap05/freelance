import { Box, Typography, Grid, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    text: "The website they built is not only beautiful but also fast and user-friendly. They understood my vision perfectly.",
    name: 'Sarah Johnson',
    role: 'Founder, Creative Studio',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    text: "The WordPress + Bricks e-commerce site has increased my sales by 40%. Highly recommend!",
    name: 'Michael Chen',
    role: 'E-commerce Owner',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  }
];

function TestimonialsPreview() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#ffffff'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '14px',
            color: '#8a9a5b',
            letterSpacing: '3px',
            mb: 2,
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
        >
          Testimonials
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Finlandica Headline', system-ui, sans-serif",
            fontSize: { xs: '32px', md: '42px' },
            color: '#3d3529',
            fontWeight: 500,
            mb: 2,
            textAlign: 'center'
          }}
        >
          What Clients Say
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '16px',
            color: '#6b5e4a',
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
            mb: 6
          }}
        >
          Don't just take my word for it. Here's what my clients have to say.
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: '#faf7f2',
                  borderRadius: 2,
                  border: '1px solid #e8e0d5',
                  position: 'relative'
                }}
              >
                <FormatQuoteIcon sx={{ fontSize: 40, color: 'rgba(138, 154, 91, 0.2)', position: 'absolute', top: 20, right: 20 }} />
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '15px',
                    color: '#3d3529',
                    lineHeight: 1.7,
                    mb: 3,
                    fontStyle: 'italic'
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50, border: '2px solid #8a9a5b' }} />
                  <Box>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8a9a5b' }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/work')}
            sx={{
              borderColor: '#8a9a5b',
              color: '#8a9a5b',
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'none',
              px: 4,
              '&:hover': {
                borderColor: '#7a8a4b',
                bgcolor: 'rgba(138, 154, 91, 0.1)'
              }
            }}
          >
            Read More Success Stories
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialsPreview;