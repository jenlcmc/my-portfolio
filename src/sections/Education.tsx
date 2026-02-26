import { useState } from 'react';
import Section from '../components/Section';
import { grad, undergrad, type Degree, type Semester } from '../data/education';

function SemesterBlock({ semester }: { semester: Semester }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-2 last:mb-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full text-left group"
      >
        <span className="text-[10px] text-txt-dim/40">{open ? '[-]' : '[+]'}</span>
        <h4 className="text-xs text-term-amber font-medium group-hover:text-term-cyan transition-colors">
          {semester.label}
        </h4>
        <span className="text-[10px] text-txt-dim/30">{semester.courses.length} courses</span>
      </button>

      {open && (
        <ul className="space-y-0.5 mt-1 ml-4 animate-fade-in">
          {semester.courses.map((course) => (
            <li key={course} className="text-xs text-txt-dim pl-4 relative">
              <span className="absolute left-0 text-term-green/30">|-</span>
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DegreeBlock({ degree }: { degree: Degree }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
        <h3 className="text-sm text-txt-bright font-medium glitch-hover">
          {degree.degree}
          {degree.current && (
            <span className="ml-2 text-[10px] text-term-green uppercase tracking-wider flex-inline items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-term-green animate-pulse-slow" />{' '}
              in progress
            </span>
          )}
        </h3>
        <span className="text-xs text-txt-dim whitespace-nowrap">{degree.period}</span>
      </div>

      <p className="text-xs text-txt-dim mb-3">
        {degree.school}
        {degree.gpa && <span className="ml-2 text-term-cyan">GPA: {degree.gpa}</span>}
        {degree.honors && <span className="ml-2 text-term-amber">{degree.honors}</span>}
      </p>

      <div className="border-l border-line/50 pl-3">
        {degree.semesters.map((sem) => (
          <SemesterBlock key={sem.label} semester={sem} />
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  const totalCourses = [...grad.semesters, ...undergrad.semesters].reduce(
    (sum, s) => sum + s.courses.length,
    0,
  );

  return (
    <Section id="education" label="~/education">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 text-[10px] text-txt-dim/60 uppercase tracking-widest">
        <span>Skill Tree</span>
        <span className="flex-1 border-t border-line/50" />
        <span>{totalCourses} nodes unlocked</span>
      </div>

      <DegreeBlock degree={grad} />
      <DegreeBlock degree={undergrad} />
    </Section>
  );
}
