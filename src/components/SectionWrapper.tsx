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
		<section id={id} className={`relative py-16 ${className}`}>
			<div className="glass-effect terminal-glow rounded-2xl p-8 md:p-12 max-w-7xl mx-auto">
				{title && (
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-accent font-mono mb-4 animate-glow">
							{title}
						</h2>
						{subtitle && (
							<p className="text-lg md:text-xl text-terminal-muted font-mono">
								{subtitle}
							</p>
						)}
						<div className="w-24 h-1 bg-gradient-to-r from-terminal-accent to-terminal-purple mx-auto mt-6 rounded-full"></div>
					</div>
				)}
				<div className="relative z-10">{children}</div>
			</div>
		</section>
	);
};

export default SectionWrapper;
