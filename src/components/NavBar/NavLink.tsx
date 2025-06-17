import "../../index.css";

interface NavLinkProps {
	name: string;
	href: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLink = ({ name, href, onClick }: NavLinkProps) => (
	<a
		href={href}
		className="relative text-terminal-text hover:text-terminal-accent px-4 py-2 rounded-lg text-lg font-medium font-mono transition-all duration-300 hover:bg-terminal-surface/50 border border-transparent hover:border-terminal-border custom-hover-underline group"
		onClick={onClick}
	>
		<span className="relative z-10">{name}</span>
		<div className="absolute inset-0 bg-gradient-to-r from-terminal-accent/10 to-terminal-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
	</a>
);

export default NavLink;
