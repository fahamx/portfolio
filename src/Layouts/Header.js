import React from "react";
import { Link } from "react-router-dom";
import Experience from "../Pages/Experience";
import Photos from "../Pages/Photos";

export default function Header() {
  return (
    <div>
      <header className=" flex justify-between items-center mb-8">
        <Link to="/" className="text-fg text-xl font-semibold cursor-pointer">
          faham.dev
        </Link>
        <nav className=" text-fg  hidden text-lg font-semibold  sm:flex space-x-4">
          <Link to="/experience" className="hover:text-gray-400">
            experience
          </Link>
          <Link to="/photos" className="hover:text-gray-400">
            photos
          </Link>
          <a
            className="hover:text-gray-400"
            href="https://github.com/fahamx"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </nav>
      </header>
    </div>
  );
}
