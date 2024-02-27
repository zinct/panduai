import React from "react";
import Image from "next/image";

const OnboardingView = () => {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="flex flex-col gap-y-5 bg-white py-48 px-40">
        <Image alt="panduai logo" src={"/images/logo.png"} width={240} height={240} />
        <p className="text-[18px] text-neutral-5">
          Masuk sebagai guru untuk mengajar atau murid untuk belajar
        </p>
        <div className="flex flex-col gap-y-5 mt-10">
          <div className="bg-primary text-white text-[16px] text-mono-10 py-[14px] text-center rounded-lg">
            Masuk
          </div>
          <div className="flex items-center gap-x-5">
            <div className="bg-primary-accent w-full h-[1px]"></div>
            <p className="text-neutral-5">Atau</p>
            <div className="bg-primary-accent w-full h-[1px]"></div>
          </div>
          <div className="bg-white border-solid border-2 border-primary text-primary font-bold text-[16px] text-mono-10 py-[14px] text-center rounded-lg">
            Daftar
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-[#81DFFF] to-white"></div>
    </div>
  );
};

export default OnboardingView;
