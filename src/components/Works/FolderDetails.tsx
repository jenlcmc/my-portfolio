import "./Works.css";

interface FolderDetailProps {
	jobDescription: string[];
	onClose: () => void;
}

const FolderDetail = ({ jobDescription, onClose }: FolderDetailProps) => {
	return (
		<div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity">
			<div className="terminal-modal p-4 relative w-96 h-80 overflow-auto">
				<div className="absolute top-2 right-2 flex space-x-1">
					<button className="close-btn bg-red-600" onClick={onClose}>
						&times;
					</button>
				</div>
				<div className="space-y-2">
					{jobDescription.map((desc, index) => (
						<p key={index} className="text-white font-mono">
							{desc}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default FolderDetail;
