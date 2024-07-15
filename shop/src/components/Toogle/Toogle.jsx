import { useState } from "react";
import ToogleChild from "./ToogleChild";

const ToggleParent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <ToogleChild isOn={isOn} toggleSwitch={toggleSwitch} />
    </div>
  );
};

export default ToggleParent;
