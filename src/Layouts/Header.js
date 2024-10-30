import React from "react";

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-black overflow-hidden ">
        <div className="text-white font-semibold cursor-pointer">faham.dev</div>

        <nav className="flex space-x-4">
          <a
            href="/experience"
            className="text-white font-semibold hover:text-blue-600"
          >
            experience
          </a>
          <a
            href="/photos"
            className="text-white font-semibold hover:text-blue-600"
          >
            photos
          </a>
          <a
            href="https://github.com/fahamx"
            target="_blank"
            className="text-white font-semibold hover:text-blue-600"
          >
            github
          </a>
        </nav>
      </header>
    </div>
  );
}
