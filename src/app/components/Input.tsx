import React from "react";
import {Item} from "../../../types";

const Input = ({item, edit}: {item: Item; edit: boolean}) => {
  return (
    <>
      {item.id === 9 ? (
        <p>سود</p>
      ) : (
        <input
          placeholder={item.subtitle + "..."}
          name={item.title}
          className={`${edit ? "p-2 w-full h-full" : "w-full h-[100%] "}`}
        />
      )}
    </>
  );
};

export default Input;
