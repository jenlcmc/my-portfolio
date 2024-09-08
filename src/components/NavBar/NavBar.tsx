//import React from "react";
import NavLink from "./NavLink";
import navigationLinks from "../../data/NavData";

import { useState, useEffect } from "react";

const NavBar = () => {
	const [showNav, setShowNav] = useState(true);
	let lastScrollY = 0;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				// User is scrolling down
				setShowNav(false);
			} else {
				// User is scrolling up
				setShowNav(true);
			}
			lastScrollY = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
				showNav ? "transform translate-y-0" : "transform -translate-y-full"
			}`}
		>
			<div className="mx-auto">
				<div className="relative flex items-center justify-between h-16 ">
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
};

export default NavBar;
