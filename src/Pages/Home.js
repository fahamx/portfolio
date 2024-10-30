import React, { useEffect } from "react";
import Header from "../Layouts/Header";
import Profile from "../Components/Profile";

function Home() {
  useEffect(() => {
    document.title = "faham.dev //home";
  }, []);

  return (
    <div className="  font-mono p-6 bg-black min-h-screen">
      <Header />
      <Profile />
    </div>
  );
}

export default Home;
