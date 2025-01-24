import "../../index.css";

interface NavLinkProps {
	name: string;
	href: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLink = ({ name, href, onClick }: NavLinkProps) => (
	<a
		href={href}
		className="text-green-500 hover:text-gray-50 px-3 py-2 rounded-md text-2xl font-medium custom-hover-underline"
		onClick={onClick}
	>
		{name}
	</a>
);

export default NavLink;
