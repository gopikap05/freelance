import { Box, Typography, Grid, LinearProgress } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';

function SkillsTools() {
  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'WordPress / Bricks', level: 88 },
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'HTML / CSS / MUI', level: 92 }
  ];

  const tools = [
    'VS Code', 'Git / GitHub', 'Figma', 'Bricks Builder',
    'WooCommerce', 'Tailwind CSS', 'Framer Motion', 'Vite / Webpack'
  ];

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#f5f0e8'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Grid container spacing={6}>
          {/* Left Side - Skills */}
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
              My Expertise
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '32px', md: '42px' },
                color: '#3d3529',
                fontWeight: 500,
                mb: 4
              }}
            >
              Skills & Strengths
            </Typography>

            {skills.map((skill, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#3d3529',
                      fontWeight: 500
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#8a9a5b'
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: '#e8e0d5',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#8a9a5b',
                      borderRadius: 3
                    }
                  }}
                />
              </Box>
            ))}
          </Grid>

          {/* Right Side - Tools */}
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
              My Toolkit
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '32px', md: '42px' },
                color: '#3d3529',
                fontWeight: 500,
                mb: 4
              }}
            >
              Tools I Use Daily
            </Typography>

            <Grid container spacing={2}>
              {tools.map((tool, index) => (
                <Grid item xs={6} sm={4} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      bgcolor: '#ffffff',
                      p: 1.5,
                      borderRadius: 2,
                      border: '1px solid #e8e0d5'
                    }}
                  >
                    <CodeIcon sx={{ fontSize: 18, color: '#8a9a5b' }} />
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '13px',
                        color: '#3d3529'
                      }}
                    >
                      {tool}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Work Style Highlight */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                bgcolor: '#ffffff',
                borderRadius: 2,
                borderLeft: '4px solid #8a9a5b'
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '18px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 1
                }}
              >
                My Work Style
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  color: '#6b5e4a',
                  lineHeight: 1.6
                }}
              >
                I believe in iterative development — delivering value early and often. 
                You'll receive regular updates, and your feedback is always incorporated 
                throughout the process. No surprises, just results.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SkillsTools;