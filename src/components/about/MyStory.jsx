import { Box, Typography, Grid } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HandshakeIcon from '@mui/icons-material/Handshake';

function MyStory() {
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
          {/* Left Side - Story */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                color: '#8a9a5b',
                letterSpacing: '3px',
                mb: 2,
                textTransform: 'uppercase'
              }}
            >
              My Journey
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '32px', md: '42px' },
                color: '#3d3529',
                fontWeight: 500,
                mb: 3
              }}
            >
              From passionate coder to trusted developer
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '15px',
                color: '#6b5e4a',
                lineHeight: 1.8,
                mb: 3
              }}
            >
              My journey into web development started 3 years ago when I built my first website. 
              What began as curiosity quickly turned into passion. I realized that coding allows 
              me to solve real problems and help businesses establish their online presence.
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '15px',
                color: '#6b5e4a',
                lineHeight: 1.8,
                mb: 3
              }}
            >
              Since then, I've worked with 50+ clients across various industries — from startups 
              to established businesses. Each project taught me something new about technology, 
              design, and what truly makes a website successful.
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '15px',
                color: '#6b5e4a',
                lineHeight: 1.8
              }}
            >
              Today, I focus on delivering high-quality React and WordPress solutions that not only 
              look great but also perform exceptionally well. My goal is simple: help you succeed online.
            </Typography>
          </Grid>

          {/* Right Side - Values & Why Choose Me */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                color: '#8a9a5b',
                letterSpacing: '3px',
                mb: 2,
                textTransform: 'uppercase'
              }}
            >
              My Values
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '32px', md: '42px' },
                color: '#3d3529',
                fontWeight: 500,
                mb: 3
              }}
            >
              What guides my work
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <EmojiEventsIcon sx={{ color: '#8a9a5b', fontSize: 28 }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '20px',
                      color: '#3d3529',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Quality First
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#6b5e4a',
                      lineHeight: 1.6
                    }}
                  >
                    I never compromise on code quality. Clean, maintainable code means your website will be reliable and easy to update.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <PsychologyIcon sx={{ color: '#8a9a5b', fontSize: 28 }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '20px',
                      color: '#3d3529',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    User Focused
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#6b5e4a',
                      lineHeight: 1.6
                    }}
                  >
                    Every decision I make considers the end user. A website should be intuitive, accessible, and a joy to use.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <HandshakeIcon sx={{ color: '#8a9a5b', fontSize: 28 }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '20px',
                      color: '#3d3529',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Transparent Communication
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#6b5e4a',
                      lineHeight: 1.6
                    }}
                  >
                    Regular updates, honest timelines, and clear explanations. You'll never be left wondering about your project's status.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MyStory;