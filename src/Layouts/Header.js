import React from "react";

export default function Header() {
  return (
    <div>
      <header className=" flex justify-between items-center mb-8">
        <div className="text-fg text-xl font-semibold cursor-pointer">
          faham.dev
        </div>
        <nav className=" text-fg  hidden text-lg font-semibold  sm:flex space-x-4">
          <a href="/experience">experience</a>
          <a href="/photos">photos</a>
          <a
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
