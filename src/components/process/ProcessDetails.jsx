import { Box, Typography, Grid, Paper, Chip } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TimelineIcon from '@mui/icons-material/Timeline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function ProcessDetails() {
  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#f5f0e8'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Grid container spacing={4}>
          {/* What I need from clients */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#ffffff',
                borderRadius: 2,
                border: '1px solid #e8e0d5',
                height: '100%'
              }}
            >
              <AssignmentIcon sx={{ fontSize: 40, color: '#8a9a5b', mb: 2 }} />
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '24px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                What I Need From You
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Clear Project Brief
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Share your vision, goals, and any references you like
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Timely Feedback
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Review and respond within 48 hours to keep momentum
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Content & Assets
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Provide text, images, logos, and brand guidelines
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Access & Credentials
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Hosting, domain, and any platform access needed
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Revisions & Feedback */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#ffffff',
                borderRadius: 2,
                border: '1px solid #e8e0d5',
                height: '100%'
              }}
            >
              <FeedbackIcon sx={{ fontSize: 40, color: '#8a9a5b', mb: 2 }} />
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '24px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Revisions & Feedback
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    2 Rounds of Revisions
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Included for design and development phases
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Regular Updates
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Weekly progress reports and demo links
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Feedback Tools
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Use comments, Loom videos, or live calls
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Flexible Process
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Adapt to your preferred communication style
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Project Timeline */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#ffffff',
                borderRadius: 2,
                border: '1px solid #e8e0d5',
                height: '100%'
              }}
            >
              <TimelineIcon sx={{ fontSize: 40, color: '#8a9a5b', mb: 2 }} />
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '24px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Project Timeline
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#3d3529' }}>
                    Small Website (1-5 pages)
                  </Typography>
                  <Chip label="1-2 weeks" size="small" sx={{ bgcolor: '#8a9a5b', color: '#fff' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#3d3529' }}>
                    Medium Website (6-15 pages)
                  </Typography>
                  <Chip label="3-4 weeks" size="small" sx={{ bgcolor: '#8a9a5b', color: '#fff' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#3d3529' }}>
                    E-Commerce Store
                  </Typography>
                  <Chip label="4-6 weeks" size="small" sx={{ bgcolor: '#8a9a5b', color: '#fff' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#3d3529' }}>
                    Custom Web Application
                  </Typography>
                  <Chip label="6-8+ weeks" size="small" sx={{ bgcolor: '#8a9a5b', color: '#fff' }} />
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  color: '#6b5e4a',
                  mt: 2,
                  fontStyle: 'italic'
                }}
              >
                *Timelines vary based on complexity and feedback speed
              </Typography>
            </Paper>
          </Grid>

          {/* Delivery & Launch Support */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#ffffff',
                borderRadius: 2,
                border: '1px solid #e8e0d5',
                height: '100%'
              }}
            >
              <SupportAgentIcon sx={{ fontSize: 40, color: '#8a9a5b', mb: 2 }} />
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '24px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Delivery & Launch Support
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Quality Assurance
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Thorough testing across devices and browsers
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Launch Assistance
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    I handle deployment to your hosting platform
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    30 Days Free Support
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Bug fixes and minor adjustments after launch
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#3d3529' }}>
                    Training Included
                  </Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#6b5e4a' }}>
                    Video tutorial or live walkthrough for CMS access
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProcessDetails;