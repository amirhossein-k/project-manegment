"use client";
import Link from "next/link";
import numberFormat from "number-formatierer";
import PersianDatePicker from "@skhazaei/persian-date-picker";
import {useState, useEffect} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {List, headerr} from "../../../types";

export interface Total {
  subtitle: string;
  title: string;
  fi: string;
  naa?: boolean;
}

const page = () => {
  const [dataa, setDataa] = useState("");
  const [repo, setRepo] = useState<List[]>();
  const [repo2, setRepo2] = useState<Total[]>();

  //
  const gett1 = async (dataa: any) => {
    const pro = await axios.post("/api/product/get", {dataa});
    return pro;
  };
  const gett2 = async (dataa: any) => {
    const pro = await axios.get("/api/product/get");
    return pro;
  };

  useEffect(() => {
    toast.promise(gett2(dataa), {
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
          return "چیزی موجود نیست هاهاهاها";
        },
      },
    });

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const repo = gett2(dataa);

        resolve(repo);
      }, 1000);
    });
    myPromise

      .then((repo: any) => {
        setRepo2(repo.data.data);
        console.log(repo.data.data);
      })

      .catch((err) => {
        console.log("err");
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (dataa !== "") {
      toast.promise(gett1(dataa), {
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
            return "چیزی موجود نیست هاهاهاها";
          },
        },
      });

      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const repo = gett1(dataa);

          resolve(repo);
        }, 1000);
      });
      myPromise

        .then((repo: any) => {
          setRepo(repo.data.data);
          console.log(repo.data.data);
        })

        .catch((err) => {
          console.log("err");
          console.error(err);
        });
    }
  }, [dataa]);

  return (
    <div className=" w-screen h-screen flex flex-col">
      <ToastContainer autoClose={2000} />
      {/* header */}
      <div className="bg-gray-500 ">
        <Link
          href={"/"}
          className="bg-blue-100 rounded p-2 relative top-4 hover:bg-blue-200 "
        >
          صفحه اصلی
        </Link>
      </div>
      <div className="text-center bg-gray-500 p-2 text-xl font-semibold text-white">
        جزییات دارایی
      </div>
      {/* body */}
      <div className="flex  gap-3 flex-wrap p-2 border-b border-blue-500 border-dotted ">
        {repo2 &&
          repo2.map((item) => {
            return (
              <div
                className={`w-[40%]  rounded p-2 mx-auto flex flex-col justify-center items-center  ${
                  item.title === "خرید"
                    ? "bg-sky-300"
                    : item.title === "فروش"
                    ? "bg-purple-300"
                    : item.title === "کومیسون"
                    ? "bg-green-300"
                    : item.title === "سود"
                    ? "bg-indigo-300"
                    : ""
                } `}
              >
                {/* header */}
                <div
                  className={` w-full p-2 justify-center items-center flex text-xl rounded rounded-br-none rounded-bl-none ${
                    item.title === "خرید"
                      ? "bg-sky-300"
                      : item.title === "فروش"
                      ? "bg-purple-300"
                      : item.title === "کومیسون"
                      ? "bg-green-300"
                      : item.title === "سود"
                      ? "bg-indigo-300"
                      : ""
                  }`}
                >
                  مقدار کل {item.title}
                </div>
                {/* body */}
                <div
                  className={`bg-gray-100  w-full p-2 justify-center items-center flex text-xl rounded rounded-tl-none rounded-tr-none ${
                    item.naa ? "text-red-600" : ""
                  }`}
                >
                  {numberFormat(item.subtitle)}
                  {item.fi}
                </div>
              </div>
            );
          })}
      </div>
      {/* footer */}
      <div className="flex  gap-3 flex-wrap p-2  flex-col">
        <div className="text-center text-lg">
          برای اینکه ببینی در چه تاریخی چه ماشین هایی فروختی کافی است روی تاریخ
          مد نظر کلیک کنی
        </div>
        {/* search */}
        <div className="">
          <PersianDatePicker
            input={false}
            onSelectDay={(e) =>
              setDataa(
                `${e.toLocaleDateString().split("/")[2]}-${
                  e.toLocaleDateString().split("/")[0]
                }-${e.toLocaleDateString().split("/")[1]}`
              )
            }
          />
          میلادی:{dataa}
        </div>
        {/* body  */}
        <div className=" flex flex-row flex-wrap gap-2" dir="rtl">
          {repo &&
            repo.map((item, inde) => {
              return (
                <div className="flex flex-col flex-wrap gap-2 bg-sky-100 w-fit h-fit p-2 rounded">
                  <span>{inde}</span>
                  {item.list.map((ite, index) => {
                    return (
                      <div
                        className="flex flex-row flex-wrap gap-2 w-[100%] mx-auto bg-white p-2 rounded"
                        key={ite.id}
                      >
                        <span className="text-red-800 font-semibold text-lg">
                          {headerr[index].subtitle}:
                        </span>
                        <span> {ite.subtitle}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default page;
