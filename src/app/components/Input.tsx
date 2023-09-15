import React from "react";
import {Item} from "../../../types";

const Input = ({item}: {item: Item}) => {
  return (
    <>
      {item.id === 9 ? (
        <p>سود</p>
      ) : (
        <input
          placeholder={item.subtitle + "..."}
          name={item.title}
          className="w-full h-[70%]"
        />
      )}
    </>
  );
};

export default Input;
