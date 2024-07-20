//import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
	name: string;
	href: string;
}

const NavLink = ({ name, href }: NavLinkProps) => (
	<Link
		to={href}
		className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
	>
		{name}
	</Link>
);

export default NavLink;
