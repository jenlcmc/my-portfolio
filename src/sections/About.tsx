import { useState } from 'react';
import Section from '../components/Section';

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C++', 'SQL', 'HTML/CSS', 'R'],
  },
  {
    category: 'Frameworks',
    items: [
      'React/Native',
      'Node.js',
      'Spring Boot',
      'Flask',
      'Tailwind CSS',
      'Next.js',
      'Angular',
    ],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Linux', 'Jira', 'Figma'],
  },
  {
    category: 'Domains',
    items: ['SWE', 'Cloud Computing', 'Machine Learning', 'Data Analytics', 'CI/CD'],
  },
];

/* ── Interactive skill tag ── */
function SkillTag({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[11px] rounded border transition-all duration-200 cursor-default ${
        hovered
          ? 'text-term-green border-term-green/40 bg-term-green/10 shadow-[0_0_8px_rgba(0,204,136,0.15)]'
          : 'text-txt-dim border-line bg-transparent'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
    </span>
  );
}

/* ── Character class badge ── */
function ClassBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 border border-term-cyan/30 rounded bg-term-cyan/5 text-[10px] tracking-wider uppercase text-term-cyan mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-term-cyan animate-pulse-slow" />
      class: SWE
    </div>
  );
}

export default function About() {
  const base = import.meta.env.BASE_URL;

  return (
    <Section id="about" label="~/about">
      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <ClassBadge />

          <p className="text-txt leading-relaxed text-sm">
            I am a computer science graduate student at Univeristy of Nevada, Las Vegas and also
            currently student system enginneering. I enjoy building tools that are practical,
            well-structured, and pleasant to use. Outside of coding, I am into gaming, music, and
            learning about systems that make things work under the hood. Feel free to explore my
            portfolio and reach out if you want to connect!
          </p>
          <br />
          <p className="text-txt leading-relaxed text-sm">
            &quot;I used to be an adventurer like you, then I took a code to the knee.&quot;
          </p>

          {/* Skill inventory */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {SKILLS.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-term-amber text-xs font-semibold uppercase tracking-wider mb-2">
                  [{category}]
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <SkillTag key={item} name={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-3">
          <img
            src={`${base}UT_Draw.png`}
            alt="Uyen Tran illustration"
            width={180}
            height={180}
            className="rounded border border-line opacity-90 animate-float"
            loading="lazy"
          />
          <div className="text-[10px] text-txt-dim/40 text-center uppercase tracking-widest">
            player avatar
          </div>
        </div>
      </div>
    </Section>
  );
}
