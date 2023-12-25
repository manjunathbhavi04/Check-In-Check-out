import { useContext, useState } from "react";
import { ArrayList } from "../store/Data";
import Items from "./Items";

const Display = () => {
  const { arr, handleOnChange, check } = useContext(ArrayList);

  return (
    <>
      <div className="form-check">
        {arr.map((items, i) => (
          <Items
            flag={check.includes(items)}
            handleOnChange={handleOnChange}
            key={items}
            items={items}
          />
        ))}
      </div>
    </>
  );
};

export default Display;
