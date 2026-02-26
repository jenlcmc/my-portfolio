export interface Semester {
  label: string;
  courses: string[];
}

export interface Degree {
  degree: string;
  school: string;
  period: string;
  current: boolean;
  gpa?: string;
  honors?: string;
  semesters: Semester[];
}

export const grad: Degree = {
  degree: 'M.S. Computer Science',
  school: 'University of Nevada, Las Vegas',
  period: '2024 -- Present',
  current: true,
  semesters: [
    {
      label: 'Spring 2025',
      courses: [
        'CS 622: Introduction to Machine Learning',
        'CS 657: Database Management Systems',
        'CS 677: Analysis of Algorithms',
      ],
    },
  ],
};

export const undergrad: Degree = {
  degree: 'B.S. Computer Science + Mathematics Minor',
  school: 'University of Nevada, Las Vegas',
  period: '2020 -- 2024',
  current: false,
  gpa: '3.90',
  honors: 'Magna Cum Laude',
  semesters: [
    {
      label: 'Year 1: Fall 2020 / Spring 2021',
      courses: [
        'CS 135: Computer Science I',
        'CS 202: Computer Science II',
        'MATH 181: Calculus I',
        'MATH 182: Calculus II',
        'CPE 100: Digital Logic Design I',
        'EGG 101: Intro Engineering Experience',
      ],
    },
    {
      label: 'Year 2: Fall 2021 / Spring 2022',
      courses: [
        'CS 218: Intro to System Programming',
        'CS 219: Computer Organization',
        'CS 302: Data Structures',
        'CS 443: Information Assurance',
        'MATH 251: Discrete Mathematics I',
        'MATH 351: Discrete Mathematics II',
        'MATH 365: Computer Linear Algebra',
        'EGG 202: 2nd Year Design Experience',
      ],
    },
    {
      label: 'Year 3: Fall 2022 / Spring 2023',
      courses: [
        'CS 301: Social Impact of Computing',
        'CS 326: Programming Languages',
        'CS 370: Operating Systems',
        'CS 442: Cloud Computing',
        'CS 456: Automata and Formal Languages',
        'STAT 411: Statistical Methods I',
        'PHYS 180: Physics for Scientists/Engineers I',
      ],
    },
    {
      label: 'Year 4: Fall 2023 / Spring 2024',
      courses: [
        'CS 460: Compiler Construction',
        'CS 469: Intro to Digital Image Processing',
        'CS 472: Software Product Design I',
        'CS 477: Analysis of Algorithms',
        'CS 489: Data Science Analysis & Presentation',
        'PHYS 196: Engineering Physics B',
      ],
    },
  ],
};
