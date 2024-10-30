import React, { useEffect } from "react";
import Profile from "../Components/Profile";

export default function Home() {
  useEffect(() => {
    document.title = "faham.dev //home";
  }, []);

  return <Profile />;
}
