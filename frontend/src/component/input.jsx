import { useState } from "react";

export const InputComp = (props) => {
  const [val, setVal] = useState("");
  return (
    <>
      <div>
        <input
          onChange={(e) => setVal(e.target.val)}
          type="text"
          placeholder={props.holdertext}
        />
      </div>
    </>
  );
};
