import React from 'react';
import { Grid, Typography, LinearProgress, Box } from '@mui/material';
import '../../../styles/skils/skils.scss';

interface Skill {
  name: string;
  percentage: number;
}

const skillsLeft: Skill[] = [
  { name: 'HTML', percentage: 100 },
  { name: 'CSS,SCSS', percentage: 90 },
  { name: 'JavaScript (ES6+).', percentage: 50 },
];

const skillsRight: Skill[] = [
  { name: 'REACT', percentage: 90 },
  { name: 'GIT', percentage: 60 },
  { name: 'FIGMA', percentage: 55 },
];

const Skills: React.FC = () => {
  return (
    <Box className="skills-section">
       <h2 className="skil-title">Skills</h2>
      <Typography variant="body1" className="skills-description">
      I am proficient in React, TypeScript, HTML5, CSS3, and JavaScript (ES6+), enabling me to build responsive and interactive web applications. I have hands-on experience with styling and component design, utilizing tools like SCSS, Material-UI, and Bootstrap to create visually appealing and user-friendly interfaces. Additionally, I am skilled in managing complex application states using React Context API and hooks, ensuring seamless and efficient data handling. My understanding of version control with Git and GitHub allows me to collaborate effectively and maintain a structured workflow in development projects.







      </Typography>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          {skillsLeft.map((skill) => (
            <Box key={skill.name} className="skill-box">
              <Box className="skill-header">
                <Typography variant="body1">{skill.name}</Typography>
                <Typography variant="body1">{skill.percentage}%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={skill.percentage} />
            </Box>
          ))}
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          {skillsRight.map((skill) => (
            <Box key={skill.name} className="skill-box">
              <Box className="skill-header">
                <Typography variant="body1">{skill.name}</Typography>
                <Typography variant="body1">{skill.percentage}%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={skill.percentage} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
