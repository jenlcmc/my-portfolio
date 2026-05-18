export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  status: 'active' | 'in-progress' | 'complete';
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description:
      'Personal website built with React, Tailwind CSS, and TypeScript. Showcases background, projects, skills, and contact information.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
    github: 'https://github.com/jenlcmc/my-portfolio',
    status: 'active',
  },
  {
    title: 'Stock Return Prediction',
    description:
      'Transformer-based fusion ML (from TimeXer model) system that forecasts 7-day and 14-day stock returns across the S&P 100 by fusing price history, congressional STOCK Act filings, and SEC insider transactions. Uses multi-scale cross-sectional peer attention and quantile regression to generate directional buy/sell signals from alternative data.',
    tech: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'SQL', 'Transformer Models'],
    github: 'https://github.com/jenlcmc/stock_return_prediction',
    status: 'complete',
    image: 'projects/stock_prediction.png',
  },
  {
    title: 'GraphRAG Tax Assistant',
    description:
      'Hybrid retrieval-augmented generation system for federal income tax Q&A (Form 1040). Fuses dense vector search (FAISS), sparse BM25 keyword matching, and graph-based knowledge graph traversal via Reciprocal Rank Fusion to ground LLM answers in specific IRC sections and IRS publications.',
    tech: ['Python', 'PyTorch', 'FAISS', 'BM25', 'NetworkX', 'LLMs'],
    github: 'https://github.com/jenlcmc/graphrag_tax/tree/overhaul_architecture',
    status: 'in-progress',
    image: 'projects/rag.png',
  },
  {
    title: 'Fand -- Food Randomizer',
    description:
      'Helps indecisive people find new food by choosing random cuisines for them. Built with a modern component library and random generation logic.',
    tech: ['React', 'TypeScript', 'JavaScript', 'Vite', 'HTML/CSS'],
    github: 'https://fand-3lv.pages.dev',
    status: 'complete',
    image: 'projects/fand.png',
  },
  {
    title: 'HAR - Human Activity Recognition',
    description:
      'ML team project for classifying human activities from sensor data using custom EfficientNet, ResNet, and KNN models. Covers full pipeline: data preprocessing, feature engineering, and model training on a Kaggle dataset.',
    tech: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'R'],
    github: 'https://github.com/jenlcmc/Intro-to-ML-/tree/uyen_branch',
    status: 'complete',
    image: 'projects/har.png',
  },
  {
    title: 'Senior Design -- Travel Web App',
    description:
      'Full-stack team project for senior design. A travel web app for group trip planning, expense management, itinerary collaboration, and hotel booking with real-time features.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Jira'],
    github: 'https://github.com/UNLV-CS472-672/2024-S-GROUP6-RW',
    status: 'complete',
    image: 'projects/travel_planner.png',
  },
  {
    title: 'Gaming Data Visualization',
    description:
      'Two data analytics projects: Steam genre analysis against Metacritic scores, and Elden Ring in-game mechanics trend analysis. Explores correlation between game design choices and review outcomes.',
    tech: ['Python', 'Pandas', 'NumPy', 'R', 'Matplotlib'],
    github: 'https://github.com/jenlcmc/Gaming-Data-Viz',
    status: 'complete',
    image: 'projects/gaming_data_science.png',
  },
  {
    title: 'Historical Image Restoration',
    description:
      'Restoring historical images using classical image processing techniques — filters, color balance adjustments, and scratch removal to bring degraded photos back to life.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/jenlcmc/Historical-Image-Restoration',
    status: 'complete',
    image: 'projects/historical_pic.png',
  },
  {
    title: 'School Work Collection',
    description:
      'Collection of coursework spanning 4 years of undergrad across systems, algorithms, data structures, and scientific computing in multiple languages and paradigms.',
    tech: ['Java', 'C++', 'Python', 'JavaScript', 'R', 'SQL'],
    github: 'https://github.com/jenlcmc/School_Work_Collection',
    status: 'complete',
    image: 'projects/school_work.png',
  },
  {
    title: 'COVID-19 Data Visualization',
    description:
      'Interactive Jupyter notebook visualizing COVID-19 case trends across the US at national and state level based on user selection. Powered by the NYTimes dataset.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'R'],
    github: 'https://github.com/jenlcmc/COVID19-Data-Visualization',
    status: 'complete',
    image: 'projects/covid_19.png',
  },
  {
    title: 'Alien Invasion (Pygame)',
    description:
      'Clone of the classic space defender arcade game built with Pygame. Demonstrates Python game loop architecture, sprite management, and collision detection.',
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/jenlcmc/Alien_Invasion',
    status: 'complete',
    image: 'projects/alien_invasion.png',
  },
];
