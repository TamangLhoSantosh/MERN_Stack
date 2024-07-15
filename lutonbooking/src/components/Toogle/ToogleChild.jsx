const ToggleChild = ({ isOn, toggleSwitch }) => {
  return (
    <div>
      <p>The switch is {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggleSwitch}>Toggle Switch</button>
    </div>
  );
};

export default ToggleChild;
