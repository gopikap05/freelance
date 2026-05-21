import { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSnackbar({ open: true, message: 'Message sent successfully! I\'ll get back to you within 24 hours.', severity: 'success' });
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#ffffff'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Grid container spacing={6}>
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#f5f0e8',
                borderRadius: 2,
                border: '1px solid #e8e0d5',
                height: '100%'
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '28px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Contact Information
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  color: '#6b5e4a',
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: '#8a9a5b', fontSize: 28 }} />
                  <Box>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8a9a5b' }}>
                      Email
                    </Typography>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', color: '#3d3529', fontWeight: 500 }}>
                      hello@freelancedev.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon sx={{ color: '#8a9a5b', fontSize: 28 }} />
                  <Box>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8a9a5b' }}>
                      Phone
                    </Typography>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', color: '#3d3529', fontWeight: 500 }}>
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#8a9a5b', fontSize: 28 }} />
                  <Box>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8a9a5b' }}>
                      Location
                    </Typography>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', color: '#3d3529', fontWeight: 500 }}>
                      Available Worldwide (Remote)
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <ScheduleIcon sx={{ color: '#8a9a5b', fontSize: 28 }} />
                  <Box>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#8a9a5b' }}>
                      Response Time
                    </Typography>
                    <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', color: '#3d3529', fontWeight: 500 }}>
                      Within 24 hours
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 3,
                  bgcolor: '#ffffff',
                  borderRadius: 2,
                  border: '1px solid #e8e0d5',
                  textAlign: 'center'
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '13px',
                    color: '#8a9a5b',
                    lineHeight: 1.6
                  }}
                >
                  ⚡ Weekend replies may take slightly longer. 
                  For urgent inquiries, please mention "URGENT" in your message subject.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                bgcolor: '#faf7f2',
                borderRadius: 2,
                border: '1px solid #e8e0d5'
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '28px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Tell Me About Your Project
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#ffffff',
                        '& fieldset': { borderColor: '#e8e0d5' },
                        '&:hover fieldset': { borderColor: '#8a9a5b' }
                      },
                      '& .MuiInputLabel-root': { color: '#6b5e4a' }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#ffffff',
                        '& fieldset': { borderColor: '#e8e0d5' },
                        '&:hover fieldset': { borderColor: '#8a9a5b' }
                      },
                      '& .MuiInputLabel-root': { color: '#6b5e4a' }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number (Optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#ffffff',
                        '& fieldset': { borderColor: '#e8e0d5' },
                        '&:hover fieldset': { borderColor: '#8a9a5b' }
                      },
                      '& .MuiInputLabel-root': { color: '#6b5e4a' }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Project Type *"
                    name="projectType"
                    placeholder="e.g., React Website, WordPress + Bricks, E-Commerce"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#ffffff',
                        '& fieldset': { borderColor: '#e8e0d5' },
                        '&:hover fieldset': { borderColor: '#8a9a5b' }
                      },
                      '& .MuiInputLabel-root': { color: '#6b5e4a' }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Budget Range *"
                    name="budget"
                    placeholder="e.g., $1000-$2000"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#ffffff',
                        '& fieldset': { borderColor: '#e8e0d5' },
                        '&:hover fieldset': { borderColor: '#8a9a5b' }
                      },
                      '& .MuiInputLabel-root': { color: '#6b5e4a' }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Expected Timeline *"
                    name="timeline"
                    placeholder="e.g., 2-4 weeks, 1-2 months"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#ffffff',
                        '& fieldset': { borderColor: '#e8e0d5' },
                        '&:hover fieldset': { borderColor: '#8a9a5b' }
                      },
                      '& .MuiInputLabel-root': { color: '#6b5e4a' }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Details *"
                    name="message"
                    multiline
                    rows={6}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#ffffff',
                        '& fieldset': { borderColor: '#e8e0d5' },
                        '&:hover fieldset': { borderColor: '#8a9a5b' }
                      },
                      '& .MuiInputLabel-root': { color: '#6b5e4a' }
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 4,
                  bgcolor: '#8a9a5b',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'none',
                  fontSize: '16px',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#7a8a4b'
                  }
                }}
              >
                Send Message
              </Button>

              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  color: '#6b5e4a',
                  textAlign: 'center',
                  mt: 2
                }}
              >
                * Required fields. I'll respond within 24 hours.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactForm;