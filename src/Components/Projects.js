import React from "react";

export default function Projects() {
  return (
    <div className="text-fg mt-4 space-y-2">
      <p className=" font-bold">projects</p>
      <p>
        -{" "}
        <b>
          <a
            href="https://github.com/fahamx/dotfiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            dotfiles
          </a>
        </b>{" "}
        - my personal linux desktop and terminal config files
      </p>
      <p>
        -{" "}
        <b>
          <a
            href="https://github.com/fahamx/spotifydl"
            target="_blank"
            rel="noopener noreferrer"
          >
            spotify music downloader
          </a>
        </b>{" "}
        - can download any song from Youtube in an MP3 using spotify link
      </p>
      <p>
        -{" "}
        <b>
          <a
            href="https://github.com/WeebProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weeb Projekt
          </a>
        </b>{" "}
        - custom android operating system (rip)
      </p>
    </div>
  );
}
