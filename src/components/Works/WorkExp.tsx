import { useState } from "react";
import FolderIcon from "./FolderIcon";
import FolderDetails from "./FolderDetails";
import { workExperienceData } from "./WorkData";

function WorkExperience() {
	const [openFolder, setOpenFolder] = useState<number | null>(null);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-x-auto">
			{workExperienceData.map((work, index) => (
				<div key={index} className="flex flex-col space-y-4">
					<FolderIcon
						companyName={work.companyName}
						yearsWorked={work.yearsWorked}
						jobTitle={work.jobTitle}
						onClick={() => setOpenFolder(index)}
					/>
					{openFolder === index && (
						<FolderDetails
							jobDescription={work.jobDescription}
							onClose={() => setOpenFolder(null)}
						/>
					)}
				</div>
			))}
		</div>
	);
}

export default WorkExperience;
