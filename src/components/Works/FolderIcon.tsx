import "./Works.css";

interface FolderIconProps {
	companyName: string;
	yearsWorked: string;
	jobTitle: string;
	onClick: () => void;
}

const FolderIcon = ({
	companyName,
	yearsWorked,
	jobTitle,
	onClick,
}: FolderIconProps) => {
	return (
		<div
			className="cursor-pointer flex items-center space-x-4"
			onClick={onClick}
		>
			<div className="flex space-x-2 hover:opacity-80 retro-button">
				<img
					src="https://img.icons8.com/?size=100&id=71186&format=png&color=000000"
					alt="Folder Icon"
					className="w-10 h-10 filter invert "
				/>
			</div>{" "}
			{/* Folder Icon */}
			<div>
				<p className="text-green-500">{companyName}</p>
				<p className="text-gray-50">{yearsWorked}</p>
				<p className="text-gray-50">{jobTitle}</p>
			</div>
		</div>
	);
};

export default FolderIcon;
