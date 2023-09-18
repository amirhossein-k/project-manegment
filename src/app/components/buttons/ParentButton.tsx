import React from "react";

const ParentButton = () => {
  return (
    <div className=" flex flex-row gap-2 p-2 w-full h-full text-white font-semibold">
      <button
        type="submit"
        className="hover:bg-blue-600 bg-blue-300 flex-1 rounded"
      >
        ثبت
      </button>
      <button className="flex-1 hover:bg-purple-600 bg-purple-300 rounded">
        ادیت
      </button>
      <button className=" flex-1 hover:bg-red-600 h-full bg-red-300 rounded">
        حذف
      </button>
    </div>
  );
};

export default ParentButton;
