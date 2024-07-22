//import React from "react";
import NavLink from "./NavLink";
import navigationLinks from "../../data/NavData";

const NavBar = () => (
	<nav className="bg-transparent">
		<div className="mx-auto">
			<div className="relative flex items-center justify-between h-16">
				{/* Navigation Links */}
				<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-middle">
					<div className="hidden sm:block sm:ml-6">
						<div className="flex space-x-4">
							{navigationLinks.map((item) => (
								<NavLink
									key={item.name}
									name={item.name}
									href={item.href}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
);

export default NavBar;
