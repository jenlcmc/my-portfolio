import DecryptText from './DecryptText';

interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="mb-8 section-enter">
      <div className="border border-line rounded bg-base-panel/80 backdrop-blur-sm overflow-hidden animate-glow-pulse">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-line bg-base-surface/90 select-none">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-2 text-txt-dim text-xs uppercase tracking-wider">
            <DecryptText text={label} speed={35} />
          </span>
          <span className="ml-auto text-[10px] text-txt-dim/50 hidden sm:inline">
            [{id.toUpperCase()}]
          </span>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </section>
  );
}
