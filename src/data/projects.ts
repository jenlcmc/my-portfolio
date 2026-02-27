export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  status: 'active' | 'in-progress' | 'complete';
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description:
      'Personal website built with React, Tailwind CSS, and TypeScript. Showcases background, projects, skills, and contact information.',
    tech: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    github: 'https://github.com/jenlcmc/my-portfolio',
    status: 'active',
  },
  {
    title: 'Fand -- Food Randomizer',
    description:
      'Helps indecisive people find new food by choosing random cuisines for them. Built with a modern component library and random generation logic.',
    tech: ['React', 'MUI', 'TypeScript', 'Vite'],
    github: 'https://github.com/jenlcmc/Fand',
    status: 'in-progress',
  },
  {
    title: 'HAR - Human Activity Recognition',
    description:
      'Machine Learning team project for recognizing human activities using machine learning and kaggle dataset. Involves data preprocessing, feature engineering, and model training for activity classification. This include using custom EfficentNet and RestNet along with KNN',
    tech: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Pytorch',
      'Jupyter',
      'NumPy',
      'Matplotlib',
      'Seaborn',
    ],
    github: 'https://github.com/jenlcmc/Intro-to-ML-/tree/uyen_branch',
    status: 'complete',
  },
  {
    title: 'Senior Design -- Travel Web App',
    description:
      'Team project for senior design class. A travel web app for trip planning, expense management, itinerary collaboration, and hotel booking among group members.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'MUI', 'TypeScript', 'Go'],
    github: 'https://github.com/UNLV-CS472-672/2024-S-GROUP6-RW',
    status: 'complete',
  },
  {
    title: 'Gaming Data Visualization',
    description:
      'Two projects: Steam genre analysis against Metacritic scores using data viz techniques, and Elden Ring game data analysis exploring trends across different in-game mechanics.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter', 'NumPy'],
    github: 'https://github.com/jenlcmc/Gaming-Data-Viz',
    status: 'complete',
  },
  {
    title: 'Historical Image Restoration',
    description:
      'Restoring historical images using Python and image processing techniques. Includes filters, color balance adjustments, and scratch removal to bring old photos back to life.',
    tech: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'Matplotlib'],
    github: 'https://github.com/jenlcmc/Historical-Image-Restoration',
    status: 'complete',
  },
  {
    title: 'School Work Collection',
    description:
      'Collection of coursework and projects spanning 4 years of undergrad across multiple languages and paradigms.',
    tech: ['Java', 'C', 'C++', 'Python', 'Assembly', 'R'],
    github: 'https://github.com/jenlcmc/School_Work_Collection',
    status: 'complete',
  },
  {
    title: 'COVID-19 Data Visualization',
    description:
      'Jupyter notebook showcasing COVID-19 case trends in the United States or by state based on user selection. Uses NYTimes dataset.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    github: 'https://github.com/jenlcmc/COVID19-Data-Visualization',
    status: 'complete',
  },
  {
    title: 'Alien Invasion (Pygame)',
    description:
      'Clone of the classic arcade game built with Pygame. A space defender game showcasing Python game development fundamentals.',
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/jenlcmc/Alien_Invasion',
    status: 'complete',
  },
];
