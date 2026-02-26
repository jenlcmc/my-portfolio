export interface Experience {
  company: string;
  title: string;
  period: string;
  current: boolean;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: 'University of Nevada, Las Vegas',
    title: 'Student System Administrator/Engineer, Level 1',
    period: 'Jun 2025 -- Present',
    current: true,
    description: [
      'Build, deploy, and administer systems. Perform OS upgrades, patching, and performance tuning while providing technical support and documenting infrastructure.',
      'Leverage cloud platforms (AWS, Azure) and infrastructure automation tools (GitLab, Ansible, Terraform, Packer) to manage system lifecycles and disaster recovery.',
    ],
    tech: ['Python', 'GitLab', 'Ansible', 'Terraform', 'Packer', 'AWS', 'Azure'],
  },
  {
    company: 'Batchl',
    title: 'Project Engineer -- MVP Development Intern',
    period: 'May 2025 -- Present',
    current: true,
    description: [
      'Developing a mobile-first MVP by translating Figma designs into a functional application using React Native and Python.',
      'Collaborating directly with the founder to define product vision, contribute to the development roadmap, and implement features in a lean environment.',
    ],
    tech: ['Python', 'React Native', 'Figma', 'TypeScript', 'Git'],
  },
  {
    company: 'University of Nevada, Las Vegas',
    title: 'Computer Science Graduate Assistant',
    period: 'Jan 2025 -- May 2025',
    current: false,
    description: [
      'Selected for a competitive assistantship to support the CS department. Assisted in teaching and grading for Introduction to Python for Data Science.',
      'Graded assignments and quizzes, assisted students with programming concepts, and supported the professor in OOP and data science topics.',
    ],
    tech: ['Python', 'Jupyter Notebook', 'NumPy', 'Pandas'],
  },
  {
    company: 'Mission Support and Test Services',
    title: 'Casual Employee',
    period: 'Aug 2023 -- May 2024',
    current: false,
    description: [
      'Modernized internal websites using Angular and TypeScript, integrating automated data validation and customizable interfaces. Improved data accuracy by 30% and reduced user input errors by 20%.',
      'Collaborated with scientists and engineers throughout design, development, and testing phases, boosting platform responsiveness and user engagement by 20%.',
    ],
    tech: ['Angular', 'TypeScript', 'JavaScript', 'Azure DevOps', 'Agile'],
  },
  {
    company: 'Mission Support and Test Services',
    title: 'Science & Engineering Summer Intern',
    period: 'May 2023 -- Aug 2023',
    current: false,
    description: [
      'Designed a field sample simulation tool, reducing data entry time by 40% and auto-calculating values to streamline training for Nuclear Emergency Responders during FRMAC events.',
      'Enhanced simulation capabilities to support Nuclear Emergency Response training across the NNSA complex using Angular and TypeScript.',
    ],
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Azure DevOps'],
  },
  {
    company: 'University of Nevada, Las Vegas',
    title: 'Undergraduate Research Assistant',
    period: 'Aug 2023 -- Dec 2023',
    current: false,
    description: [
      'Used Python-based machine learning techniques to process simulation snapshots and compare against different simulation methods.',
      'Analyzed simulated astronomy data including reading large datasets, performing mathematical analysis, and generating visualizations.',
    ],
    tech: ['Python', 'Jupyter', 'NumPy', 'Matplotlib', 'Pandas', 'Scikit-learn'],
  },
  {
    company: 'University of Nevada, Las Vegas',
    title: 'Computer Science I Teaching Assistant',
    period: 'Jan 2022 -- May 2023',
    current: false,
    description: [
      'Guided over 30 students weekly during office hours in mastering C++ concepts, leading to an average grade improvement of one letter.',
      'Graded assignments and delivered constructive feedback, maintaining a turnaround time of under 48 hours.',
    ],
    tech: ['C++', 'VS Code', 'GDB', 'LLDB'],
  },
  {
    company: 'IBM',
    title: '2022 Accelerate Program: Software Track',
    period: 'Jun 2022 -- Aug 2022',
    current: false,
    description: [
      'Built a front-end application in React utilizing backend services with Express and Node.js.',
      'Grew programming skills while working in agile teams, thinking critically, and sharpening problem-solving abilities.',
    ],
    tech: ['React', 'Express', 'Node.js', 'JavaScript', 'Agile'],
  },
  {
    company: 'AT&T',
    title: 'Summer Learning Academy Extern',
    period: 'Jun 2021 -- Jul 2021',
    current: false,
    description: [
      'Acquired technical acumen in Cybersecurity, Machine Learning, and Design Thinking across 80 hours of structured learning.',
      'Gained insights from 50+ business executives and completed 30+ entry-level training modules in communication, leadership, and technology.',
    ],
    tech: ['Cybersecurity', 'Machine Learning', 'Design Thinking'],
  },
];
