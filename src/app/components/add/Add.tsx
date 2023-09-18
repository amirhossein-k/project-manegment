import React from "react";
import Layout from "../layout/Layout";
import Input from "../Input";

const Add = ({item}: {item: any}) => {
  return (
    <div
      key={item.id}
      className={`${
        item.id === 6 ||
        item.id === 7 ||
        item.id === 8 ||
        item.id === 9 ||
        item.id === 10
          ? "col-span-2 "
          : ""
      } w-[100%]  flex items-center justify-center border-r-2  border h-full`}
    >
      {item.id === 10 ? (
        <Layout size={"price"}>
          <div className=" flex flex-row gap-2 p-2 w-full h-full text-white font-semibold">
            <button
              type="submit"
              className="hover:bg-blue-600 bg-blue-300 flex-1 rounded"
            >
              ثبت
            </button>
          </div>
        </Layout>
      ) : (
        <Layout size={"noprice"}>
          <Input item={item} edit={false} />
        </Layout>
      )}
    </div>
  );
};

export default Add;
