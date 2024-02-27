import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginView = () => {
  return (
    <div className="w-screen min-h-screen py-20 bg-gradient-to-br from-white to-[#81DFFF]">
      <div className="max-w-xl  mx-auto bg-white p-10 rounded-2xl flex flex-col gap-10">
        <div className="mx-auto flex items-center flex-col gap-2">
          <Image
            alt="panduai logo"
            src={"/images/logo.png"}
            width={180}
            height={52}
          />
          <p className="text-center text-gray-600">
            Masuk akun kamu yang sudah terdaftar di PanduAI
          </p>
        </div>
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label className="font-medium tracking-tight">Email <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Tuliskan email kamu"
                className="w-full text-sm rounded-lg border-[1.5px] border-gray-300 p-[14px] focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-medium tracking-tight">Kata Sandi <span className="text-red-500">*</span></label>
              <input
                type="password"
                placeholder="Tuliskan kata sandi"
                className="w-full text-sm rounded-lg border-[1.5px] border-gray-300 p-[14px] focus:border-primary outline-none"
              />
              <div className="flex items-center justify-between">
                <p className="font-medium">Ingat saya</p>
                <Link href={"/"} className="text-primary font-semibold">
                  Lupa Kata Sandi?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-between">
            <button className="bg-primary h-14 w-full text-white font-bold rounded-lg">
              Masuk
            </button>
            <p className="text-neutral-5">
              Belum punya akun?{" "}
              <Link href={"/register"} className="text-primary font-bold">
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
