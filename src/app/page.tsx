"use client";
import Input from "./components/Input";
import Layout from "./components/layout/Layout";
import {Item} from "../../types";

const header = [
  {subtitle: "ماشین", id: 1, title: "car"},
  {subtitle: "مدل", id: 2, title: "model"},
  {subtitle: "بدنه", id: 3, title: "body"},
  {subtitle: "ویژگی", id: 4, title: "prope"},
  {subtitle: "شراکتی", id: 5, title: "some"},
  {subtitle: "خرید", id: 6, title: "buy"},
  {subtitle: "فروش", id: 7, title: "sale"},
  {subtitle: "کومیسیون", id: 8, title: "kom"},
  {subtitle: "سود", id: 9, title: "sod"},
  {subtitle: "ادیت", id: 10, title: "edite"},
];

const list: Item[] = [
  {subtitle: "ماشین", id: 1, title: "car"},
  {subtitle: "مدل", id: 2, title: "model"},
  {subtitle: "بدنه", id: 3, title: "body"},
  {subtitle: "ویژگی", id: 4, title: "prope"},
  {subtitle: "شراکتی", id: 5, title: "some"},
  {subtitle: "خرید", id: 6, title: "buy"},
  {subtitle: "فروش", id: 7, title: "sale"},
  {subtitle: "کومیسیون", id: 8, title: "kom"},
  {subtitle: "سود", id: 9, title: "sod"},
];

export default function Home() {
  const onSubmit = async (e: FormData) => {
    const car = e.get("car");
    const model = e.get("model");
    const body = e.get("body");
    const prope = e.get("prope");
    const buy = e.get("buy");
    const sale = e.get("sale");
    const kom = e.get("kom");
  };
  return (
    <main
      className="flex min-h-screen  flex-col items-center justify-between   "
      dir="rtl"
    >
      <div className="grid overflow-x-auto grid-flow-row auto-rows-[50px]  border-2   gap-2   h-full min-h-screen place-items-center  w-[99%] p-2">
        <ul className="  grid  auto-rows-[40px] row-span-full  border-2  col-span-13 grid-flow-col bg-gray-300  auto-cols-[150px]  gap-2  w-fit  ">
          {header.map((item) => {
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
                } w-[100%]  flex items-center justify-center border-r-2  `}
              >
                {item.subtitle}
              </li>
            );
          })}
        </ul>

        <form
          className=" col-span-full grid grid-flow-col auto-cols-[150px] gap-2 border-2 bg-slate-300"
          action={onSubmit}
        >
          {list.map((item) =>
            item.id === 6 || item.id === 7 || item.id === 8 || item.id === 9 ? (
              <Layout size={"price"} key={item.id}>
                <Input item={item} />
              </Layout>
            ) : (
              <Layout size={"noprice"} key={item.id}>
                <Input item={item} />
              </Layout>
            )
          )}
          <Layout size={"price"}>
            <div className=" flex flex-row gap-2 p-2 w-full h-full text-white font-semibold">
              <button
                type="submit"
                className="hover:bg-blue-600 bg-blue-300 flex-1 rounded"
              >
                ثبت
              </button>
              <button className="flex-1 hover:bg-purple-600 bg-purple-300 rounded">
                {" "}
                ادیت
              </button>
              <button className=" flex-1 hover:bg-red-600 h-full bg-red-300 rounded">
                حذف
              </button>
            </div>
          </Layout>
        </form>
      </div>
    </main>
  );
}
