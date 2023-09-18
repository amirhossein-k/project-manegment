"use client";
import axios from "axios";
import React from "react";
import {ToastContainer, toast} from "react-toastify";
import {useRouter} from "next/navigation";
const page = () => {
  const router = useRouter();
  const onLogin = async (e: FormData) => {
    try {
      const name = e.get("name") as string;

      const login = axios.post("/api/user", {name});

      toast.promise(login, {
        pending: "لطفا صبر کنید",
        success: "خوش امدید",
        error: "متاسفم",
      });
      const res = await login;

      setTimeout(() => {
        router.push(`/`);
      }, 1000);
    } catch (err: any) {
      console.log(err, "login failed");
    }
  };
  return (
    <form
      dir="rtl"
      action={onLogin}
      className="flex justify-center items-center gap-3 flex-col  w-screen h-screen bg-slate-800"
    >
      <ToastContainer autoClose={2000} />
      <input
        name="name"
        type="text"
        className="rounded p-2 w-[40%]"
        placeholder="اسمی که بهت گفتمو واردکن"
      />
      <button type="submit" className="bg-sky-400 px-3 py-2 rounded">
        ورود
      </button>
    </form>
  );
};

export default page;
