import React from "react";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center mb-8">
        <div className="text-xl font-bold cursor-pointer">faham.dev</div>
        <nav className="hidden text-lg font-bold sm:flex space-x-4">
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
