import React, { useState } from "react";

function AppButton({ btnName, value, change }) {
  //Check Toggle class for button state active
  //const [btnState, setBtnState] = useState(false);
  //let toggleCheck = btnState ? " active" : " ";
  const HandleClick = () => {
    //setBtnState((btnState) => !btnState);
    change(value);
  };

  return (
    <button onClick={HandleClick} className="btn">
      {btnName}
    </button>
  );
}

export default AppButton;
