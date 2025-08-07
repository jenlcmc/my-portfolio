import NavLink from './NavLink';
import navigationLinks from '../../data/NavData';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        showNav ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="mx-auto backdrop-blur-md bg-terminal-surface/80 border-b border-terminal-border/50">
        <div className="relative flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-1 sm:space-x-2">
                {navigationLinks.map((item) => (
                  <NavLink key={item.name} name={item.name} href={item.href} />
                ))}
              </div>
            </div>
            {/* Mobile menu - simplified for small screens */}
            <div className="sm:hidden">
              <div className="flex space-x-1">
                {navigationLinks.slice(0, 3).map((item) => (
                  <NavLink key={item.name} name={item.name} href={item.href} />
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
