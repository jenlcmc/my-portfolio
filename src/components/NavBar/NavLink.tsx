//import React from "react";
import "../../index.css";

interface NavLinkProps {
	name: string;
	href: string;
}

const NavLink = ({ name, href }: NavLinkProps) => (
	<a
		href={href}
		className="text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium custom-hover-underline"
	>
		{name}
	</a>
);

export default NavLink;
