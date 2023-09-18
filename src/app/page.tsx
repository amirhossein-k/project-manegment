"use client";
import Layout from "./components/layout/Layout";
import {Item, List, headerr} from "../../types";
import {useRouter} from "next/navigation";
import numberFormat from "number-formatierer";
import ParentButton from "./components/buttons/ParentButton";
import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {GetList} from "../../utils/Product/Getlist";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";

import Input from "./components/Input";
import Header from "./components/header/Header";
import Add from "./components/add/Add";
import DefultBody from "./components/defaultBody/DefultBody";
import Link from "next/link";

export default function Home() {
  const [repo, setRepo] = useState<List[]>();
  const [pre, setPre] = useState(false);
  const [add, setAdd] = useState(false);

  const [edit, setEdit] = useState({id: "", edit: false});
  var router = useRouter();
  const gett = async () => {
    const pro = await axios.get("/api/product");
    return pro;
  };

  const fif = (item: string) => {
    switch (item.length) {
      case 4:
        return "هزار";
      case 5:
        return "هزار";
      case 6:
        return "هزار";
      case 7:
        return "میلیون";
      case 8:
        return "میلیون";
      case 9:
        return "میلیون";
      case 10:
        return "میلیارد";
      case 11:
        return "میلیارد";
      case 12:
        return "میلیارد";
      default: {
        return "";
      }
    }
  };

  useEffect(() => {
    // setPre(false);
    // const ge = gett();
    toast.promise(gett(), {
      pending: {
        render() {
          return "عجله کار شیطونه صبر کن";
        },
      },
      success: {
        render({data}: any) {
          return "همه چی عالیه دیدی صبر کردی ";
        },
      },

      error: {
        render({data}: any) {
          console.log(data);
          return "!!!اینترنت وصل نیستی چرا";
        },
      },
    });

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const repo = gett();

        resolve(repo);
      }, 1000);
    });
    myPromise

      .then((repo: any) => {
        // console.log(repo.data);
        setRepo(repo.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [pre]);

  const Remove = async (id: string) => {
    console.log(id);

    // const deletee = await axios.put(`/api/product`, {id});
    // console.log(deletee);
    toast.promise(axios.put(`/api/product`, {id}), {
      pending: {
        render() {
          return "عجله کار شیطونه صبر کن";
        },
      },
      success: {
        render({data}: any) {
          setPre(!pre);
          return data.data.message;
        },
      },

      error: {
        render({data}: any) {
          console.log(data.data.error);
          return "پاک نشد";
        },
      },
    });
  };

  const onSubmit = async (e: FormData, id: string) => {
    const car = e.get("car");
    const model = e.get("model");
    const body = e.get("body");
    const prope = e.get("prope");
    const buy = e.get("buy");
    const sale = e.get("sale");
    const kom = e.get("kom");
    const som = e.get("som");

    if (id) {
      toast.promise(
        axios.put(`/api/product/update`, {
          car,
          model,
          body,
          prope,
          buy,
          sale,
          kom,
          som,
          id,
        }),
        {
          pending: {
            render() {
              return "عجله کار شیطونه صبر کن";
            },
          },
          success: {
            render({data}: any) {
              setAdd(false);
              setEdit({id: "", edit: false});
              setPre(!pre);
              return data.data.message;
            },
          },

          error: {
            render({data}: any) {
              // console.log(data.data.error);
              return "پاک نشد";
            },
          },
        }
      );
    } else {
      toast.promise(
        axios.post(`/api/product`, {
          car,
          model,
          body,
          prope,
          buy,
          sale,
          kom,
          som,
        }),
        {
          pending: {
            render() {
              return "عجله کار شیطونه صبر کن";
            },
          },
          success: {
            render({data}: any) {
              setAdd(false);
              setPre(!pre);
              return data.data.message;
            },
          },

          error: {
            render({data}: any) {
              console.log(data.data.error);
              return "پاک نشد";
            },
          },
        }
      );
    }
  };

  return (
    <main
      className="flex min-h-screen  flex-col items-center justify-between   overflow-x-hidden "
      dir="rtl"
    >
      <ToastContainer autoClose={2000} />
      <div className="grid  grid-flow-row auto-rows-min  border-2   gap-1    h-full min-h-screen   w-[99%] p-2">
        <ul className="  grid   auto-rows-[40px] row-span-full  border-2  col-span-13 grid-flow-col bg-gray-300  auto-cols-[150px]  gap-2  w-fit  ">
          {headerr.map((item) => {
            return <Header item={item} />;
          })}
        </ul>
        {/* body */}
        <div className=" w-full ">
          {repo?.map((i) => {
            return (
              <div
                className=" col-span-full grid grid-flow-col auto-cols-[150px] gap-2 border-2 bg-slate-300 "
                key={i.id}
              >
                {edit?.edit === false && edit.id === "" ? (
                  i.list.map((item) => {
                    return item.title === "buy" ||
                      item.title === "sale" ||
                      item.title === "kom" ||
                      item.title === "sod" ? (
                      <Layout size={"price"} key={item.title}>
                        {item.subtitle ? (
                          <>
                            {numberFormat(item.subtitle)}
                            {fif(item.subtitle)}

                            {/* <ShippingForm item={item.subtitle} /> */}
                          </>
                        ) : (
                          <p> </p>
                        )}
                      </Layout>
                    ) : (
                      <Layout size={"noprice"} key={item.id}>
                        {item.subtitle ? <Layout>{item.subtitle}</Layout> : ""}
                      </Layout>
                    );
                  })
                ) : //  else
                edit.id === i.id && edit.edit ? (
                  <form
                    action={(e) => onSubmit(e, edit.id)}
                    className="absolute w-[50%] top-[0%] h-fit bg-slate-400 p-2 translate-x-[-50%] translate-y-[30%] left-[50%]"
                  >
                    <span
                      className="relative p-2 text-xl bg-red-400 hover:bg-red-600 cursor-pointer"
                      onClick={() => setEdit({id: i.id, edit: false})}
                    >
                      x
                    </span>
                    {i.list.map((item) => {
                      return (
                        <>
                          {item.title === "buy" ||
                          item.title === "sale" ||
                          item.title === "kom" ||
                          item.title === "sod" ? (
                            <Layout size={"form"} key={item.title}>
                              {headerr.map((er) => {
                                return (
                                  <label htmlFor="" key={er.id + "e2"}>
                                    {er.title === item.title && er.subtitle}
                                  </label>
                                );
                              })}
                              <Input item={item} edit={true} />
                            </Layout>
                          ) : (
                            <Layout size={"form"} key={item.id}>
                              {headerr.map((er) => {
                                return (
                                  <label
                                    htmlFor=""
                                    className={`${
                                      er.title === item.title
                                        ? "flex-1"
                                        : "hidden"
                                    }`}
                                    key={er.title + "w2"}
                                  >
                                    {er.title === item.title ? er.subtitle : ""}
                                  </label>
                                );
                              })}
                              <Input item={item} edit={true} />
                            </Layout>
                          )}
                        </>
                      );
                    })}
                    {/* <Layout size={"form"}> */}
                    <div className="   h-full text-black font-semibold ">
                      <button
                        type="submit"
                        className="hover:bg-blue-600 bg-blue-300  p-4 rounded h-full w-full"
                      >
                        ثبت
                      </button>
                    </div>
                    {/* </Layout> */}
                  </form>
                ) : (
                  i.list.map((item) => {
                    return <DefultBody item={item} />;
                  })
                )}
                <Layout size={"price"}>
                  <div className=" flex flex-row gap-2 p-2 w-full h-full text-white font-semibold">
                    <button
                      type="submit"
                      className="hover:bg-blue-600 bg-blue-300 flex-1 rounded"
                    >
                      ثبت
                    </button>
                    <button
                      className="flex-1 hover:bg-purple-600 bg-purple-300 rounded"
                      onClick={() => setEdit({id: i.id, edit: true})}
                    >
                      ادیت
                    </button>
                    <button
                      onClick={() => Remove(i.id)}
                      name={i.id}
                      className=" flex-1 hover:bg-red-600 h-full bg-red-300 rounded"
                    >
                      حذف
                    </button>
                  </div>
                </Layout>
              </div>
            );
          })}
          {add && (
            <form
              className="col-span-full grid grid-flow-col auto-cols-[150px] gap-2 border-2 bg-slate-300"
              action={(e) => onSubmit(e, edit.id)}
            >
              {headerr.map((item) => {
                return <Add item={item} />;
              })}
            </form>
          )}
        </div>
        <div className="flex text-xl gap-2 font-medium">
          <button
            className=" h-full px-3 py-2 bg-blue-300 text-gray-700 w-fit rounded   hover:bg-blue-400 hover:text-white"
            onClick={() => setAdd(!add)}
          >
            اضافه کردن
          </button>
          <Link
            className=" h-full px-3 py-2 bg-emerald-500 text-gray-700 w-fit rounded  hover:bg-blue-400 hover:text-white"
            href={"/detail"}
          >
            امار کلی
          </Link>
        </div>
      </div>
    </main>
  );
}
