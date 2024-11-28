import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import logo from "../assets/logo.svg";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/postjob", title: "Post A Job" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4 md:py-6">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary transition-colors duration-200 hover:text-primary/80">
            <img
              src={logo}
              alt="Career Jobs Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="hidden sm:inline">Career Jobs</span>
          </Link>

          {/* Nav Items for Large Devices */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, title }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-200 hover:text-primary ${
                      isActive ? "text-primary" : "text-gray-600"
                    }`
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          

          {/* Nav Items for Small Devices */}
          <div className="md:hidden">
            <button
              onClick={handleToggler}
              className="p-2 text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-md"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* SignUp and Login */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="py-2 px-4 text-sm font-medium text-primary border border-primary rounded-md transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="py-2 px-4 text-sm font-medium text-white bg-blue border  rounded-md transition-colors duration-200 hover:bg-primary/90"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>

      {/* NavItems for Mobile */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="px-4 py-2 space-y-2">
          {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block py-2 px-4 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="block py-2 px-4 text-base font-medium text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="block py-2 px-4 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;