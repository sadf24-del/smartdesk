import React from 'react';
import ProjectList from '../Components/ProjectList';
import Sidebar, { DrawerHeader } from '../Components/Sidebar';
import { Box } from '@mui/material';

const ProjectPage = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ProjectList />
      </Box>
    </div>
  );
};

export default ProjectPage;
