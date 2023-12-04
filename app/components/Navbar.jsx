import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className=" text-[9px] sm:text-base font-serif italic text-[white]">
          &quot;The cure for ignorance is to question.&quot; - Prophet Muhammad
          (PBUH)
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Navbar;
