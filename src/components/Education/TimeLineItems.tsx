interface TimeLineItemsProps {
	year: string;
	courses: string[];
}

const TimeLineItems = ({ year, courses }: TimeLineItemsProps) => {
	return (
		<div className="timeline-item flex-shrink-0 w-3/5 md:w-1/5 flex flex-col items-center">
			<h3 className="item-header mb-4">{year}</h3>
			<ul className="list-disc text-gray-200">
				{courses.map((course, index) => (
					<li key={index}>{course}</li>
				))}
			</ul>
		</div>
	);
};

export default TimeLineItems;
