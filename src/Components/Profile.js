import React from "react";
import Projects from "./Projects";

export default function Profile() {
  return (
    <div>
      <div className="max-w-4xl mx-auto border-2 border-fg p-6 mt-16">
        <div className="text-fg flex flex-col md:flex-row items-center md:items-start mb-6">
          <img
            src="pp.jpg"
            alt="Profile"
            className="pfp w-40 h-40 border-2 border-fg mr-6 mb-4 md:mb-0 object-cover hidden sm:block"
          />

          <div className="flex flex-col space-y-2">
            <p className="text-xl font-bold">
              faham <span className="font-normal text-sm">(he/him)</span>
            </p>
            <p>software engineer, graduate student, & linux enthusiast</p>
            {/* <p id="status" className="text-fg2">
              + loading...
            </p> */}

            {/* Links */}
            <div className="space-y-1">
              <p>
                <a
                  href="https://github.com/fahamx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/nfaham/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <p className="text-fg2">
          hey! i'm faham, a graduate software engineering student from
          Bangladesh currently living in Newfoundland, learning software
          engineering and full stack development. find more information about
          people i've worked with
          <b>
            {" "}
            <a className="text-fg" href="/experience">
              here{" "}
            </a>
          </b>
          or see my
          <b>
            {" "}
            <a className="text-fg" href="/photos">
              photos page
            </a>
          </b>{" "}
          instead.
        </p>

        <Projects />

        <p className="mt-4 text-fg2">
          the best way to contact me is via my discord: <b>notkenzi</b>
        </p>
      </div>
    </div>
  );
}
