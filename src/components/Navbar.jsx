import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wide">MyWebsite</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium'
                    : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium'
                    : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium'
                    : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-purple-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu button */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  : 'text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  : 'text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  : 'text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
