import { useState } from 'react';
import { Box } from '@mui/material';
import { projects, ProjectCard } from './ProjectCard';
import CaseStudy from './CaseStudy';

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Box sx={{ py: { xs: '60px', md: '100px' }, px: '5%', bgcolor: '#ffffff' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>

        {/* Project Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: '24px',
            mb: '80px',
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject.id === project.id}
              onClick={setSelectedProject}
            />
          ))}
        </Box>

        {/* Case Study */}
        {selectedProject && <CaseStudy project={selectedProject} />}

      </Box>
    </Box>
  );
}