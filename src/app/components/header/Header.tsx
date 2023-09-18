import React from "react";

const Header = ({item}: {item: any}) => {
  return (
    <li
      key={item.id}
      className={`${
        item.id === 6 ||
        item.id === 7 ||
        item.id === 8 ||
        item.id === 9 ||
        item.id === 10
          ? "col-span-2 "
          : ""
      } w-[100%]  flex items-center justify-center border-r-2  border`}
    >
      {item.subtitle}
    </li>
  );
};

export default Header;
