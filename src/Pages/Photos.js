import React, { useEffect } from "react";

function Photos() {
  useEffect(() => {
    document.title = "faham.dev //photos";
  }, []);
  return <div>Photos</div>;
}

export default Photos;
