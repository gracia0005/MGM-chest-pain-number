import React, { useState } from "react";

// Import your CSS file

const FloatingButton = ({ reference }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="floating-button" ref={reference}>
        <button onClick={() => setOpen(true)}>Enroll Now</button>
      </div>
    </>
  );
};

export default FloatingButton;
