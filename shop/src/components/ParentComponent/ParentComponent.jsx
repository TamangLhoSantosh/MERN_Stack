import React from "react";
import ChildComponent from "../ChildComponent/ChildComponent";

const ParentComponent = ({ message }) => {
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
