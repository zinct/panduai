"use client";
import { Button } from "@/components/button";
import Image from "next/image";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const TeacherBanner = () => {
  return (
    <header className="relative p-6 bg-primary rounded-2xl w-full text-white">
      <h5 className="font-medium text-sm">PanduGuru</h5>
      <h3 className="font-bold text-2xl mt-2">
        Buat Bahan Ajar dan Jadikan Proses <br />
        Pembelajaran Semudah Magic
      </h3>
      <Button
        className="bg-purple-90 hover:bg-purple-80 mt-6 flex items-center gap-2 rounded-full w-fit"
        size={"md"}
      >
        Coba AI untuk Pengajar
        {/* <Icon icon="icon-park-solid:right-c" width="24" height="24" /> */}
        <FaChevronCircleRight size={20} />
      </Button>
      <Image
        className="absolute right-0 top-0"
        src="/images/star-banner.svg"
        alt="star banner"
        width={240}
        height={240}
      />
    </header>
  );
};

export default TeacherBanner;
