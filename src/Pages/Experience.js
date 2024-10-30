import React, { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    document.title = "faham.dev //experience";
  }, []);

  return (
    <div className="max-w-4xl mx-auto border-2 border-fg p-6 mt-16">
      <p className="text-xl font-bold text-fg">about / experience</p>
      <p className="text-fg2 mb-4">
        I have extensive experience in development using JavaScript and Java, as
        well as managing online communities. I've utilized a diverse array of
        modern technologies, thoughtfully selected for their performance and
        positive impact on the developer experience.
      </p>

      {/* <ExperienceItem
        title="stray.gg - administrator & back end developer (july 2022 - august 2024)"
        description="My role at stray involved frequent community interactions and consistent gathering of feedback to improve the service we provided and ensure player safety. I was involved in the development of several projects such as back end APIs, Discord integrations and contributing to core server plugins."
      />*/}

      <p className=" text-mt-6 text-fg2">
        <b className="text-fg">email:</b> nafidfaham08@gmail.com -{" "}
        <b className="text-fg">discord:</b> notkenzi -{" "}
        <b className="text-fg">github:</b>{" "}
        <a href="https://github.com/fahamx" className="text-fg underline">
          github.com/fahamx
        </a>
      </p>
    </div>
  );
}

const ExperienceItem = ({ title, description }) => (
  <>
    <p className="font-bold mt-4 text-fg">{title}</p>
    <p className="text-fg2 mb-4">{description}</p>
  </>
);
