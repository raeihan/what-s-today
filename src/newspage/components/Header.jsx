import React from "react";

const Header = ({ title }) => {
  return (
    <header className="text-center border-b-2 p-6 flex flex-col sm:flex-row sm:justify-between items-center">
      <h1 className="font-default font-black text-2xl sm:text-4xl py-3 pl-2 text-red-400">
        {title}
      </h1>
      <nav className="flex justify-center sm:justify-end sm:mt-0">
        <ul className="flex text-sm sm:flex-row sm:text-lg font-semibold space-y-0 space-x-3 sm:space-y-0 sm:space-x-6 pr-1 sm:pr-5 pt-5">
          <li>
            <a
              href="/id"
              className="text-black hover:text-red-400 font-default font-bold"
            >
              Indonesia
            </a>
          </li>
          <li>
            <a
              href="/us"
              className="text-black hover:text-red-400 font-default font-bold"
            >
              United States
            </a>
          </li>
          <li>
            <a
              href="/jp"
              className="text-black hover:text-red-400 font-default font-bold"
            >
              Japan
            </a>
          </li>
          <li>
            <a
              href="/kr"
              className="text-black hover:text-red-400 font-default font-bold"
            >
              South Korea
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
