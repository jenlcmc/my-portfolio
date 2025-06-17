import React from "react";

interface SectionWrapperProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
	title?: string;
	subtitle?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
	children,
	id,
	className = "",
	title,
	subtitle,
}) => {
	return (
		<section id={id} className={`relative section-compact ${className}`}>
			<div className="tech-card floating-elements cyber-border max-w-7xl mx-auto animate-fade-in-scale">
				{title && (
					<div className="text-center mb-6">
						<h2 className="text-2xl md:text-3xl font-bold holo-text font-mono mb-3 animate-slide-in">
							{title}
						</h2>
						{subtitle && (
							<p className="text-base md:text-lg text-terminal-muted font-mono opacity-90">
								{subtitle}
							</p>
						)}
						<div className="w-20 h-0.5 bg-gradient-to-r from-terminal-accent to-terminal-purple mx-auto mt-4 rounded-full animate-pulse-glow"></div>
					</div>
				)}
				<div className="relative z-10 space-y-compact">{children}</div>
			</div>
		</section>
	);
};

export default SectionWrapper;
