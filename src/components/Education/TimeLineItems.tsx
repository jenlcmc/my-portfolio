interface TimeLineItemsProps {
	year: string;
	courses: string[];
}

const TimeLineItems = ({ year, courses }: TimeLineItemsProps) => {
	return (
		<div className="timeline-item flex-shrink-0 w-full min-w-[200px] flex flex-col items-center space-y-4">
			<h3 className="text-terminal-accent font-mono font-bold text-lg mb-4 border-b-2 border-terminal-accent/50 pb-2">
				{year}
			</h3>
			<ul className="space-y-2 text-terminal-text text-sm">
				{courses.map((course, index) => (
					<li key={index} className="flex items-start space-x-2">
						<span className="text-terminal-green text-xs mt-1">▸</span>
						<span className="leading-relaxed">{course}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TimeLineItems;
