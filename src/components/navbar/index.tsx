import Logo from '../Logo';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import NavLinks from './NavLinks';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const listener = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <div
      className={cn('fixed top-0 left-0 w-full z-10', {
        'bg-white shadow-sm': scroll
      })}
    >
      <header className="wrapper flex justify-between items-center h-16">
        <Logo />
        <div className="hidden md:block">
          <NavLinks
            className="flex gap-4"
            linkClassName="flex items-center gap-1 font-semibold text-gray hover:text-primary"
            activeLinkClassName="text-primary underline"
          />
        </div>

        <div className="md:hidden">
          <FaBars className="text-lg" onClick={() => setShowMenu(true)} />
          {showMenu && (
            <div className="w-full h-full bg-white fixed top-0 left-0">
              <div className="flex justify-between items-center h-16 px-4">
                <Logo />
                <button>
                  <FaTimes
                    onClick={() => setShowMenu(false)}
                    className="text-lg ml-auto"
                  />
                </button>
              </div>

              <NavLinks
                className="flex flex-col mt-8"
                linkClassName="text-xl text-gray hover:text-primary flex items-center justify-center gap-2 py-2"
                activeLinkClassName="bg-primaryLight text-primary"
                onLinkClick={() => setShowMenu(false)}
              />
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
