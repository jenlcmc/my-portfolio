//import React from "react";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import navigationLinks from "../../data/NavData";

const NavBar = () => (
	<nav className="bg-blue-500">
		<Disclosure as="nav">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							{/* Mobile menu button */}
							<DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
								{open ? (
									<XMarkIcon
										className="block h-6 w-6"
										aria-hidden="true"
									/>
								) : (
									<Bars3Icon
										className="block h-6 w-6"
										aria-hidden="true"
									/>
								)}
							</DisclosureButton>
							{/* Navigation Links */}
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
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
					{/* Mobile Menu */}
					<DisclosurePanel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigationLinks.map((item) => (
								<DisclosureButton
									key={item.name}
									as="div"
									className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									<NavLink name={item.name} href={item.href} />
								</DisclosureButton>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	</nav>
);

export default NavBar;
