import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterView = () => {
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
          Daftarkan dirimu untuk mengakses layanan PanduAI
          </p>
        </div>
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <Label isMarked>Nama Lengkap</Label>
              <Input placeholder="Tuliskan nama kamu" type="text" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label isMarked>Nomor Telepon</Label>
              <Input placeholder="Tuliskan nomor telepon kamu" type="text" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label isMarked>Email</Label>
              <Input placeholder="Tuliskan email kamu" type="text" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label isMarked>Kata Sandi</Label>
              <Input placeholder="Tuliskan kata sandi" type="password" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label isMarked>Ulangi Kata Sandi</Label>
              <Input placeholder="Tuliskan ulang kata sandi" type="password" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-between">
            <Button>
              Daftar
            </Button>
            {/* <button className="bg-primary h-14 w-full text-white font-bold rounded-lg">
              Daftar
            </button> */}
            <p className="text-neutral-5">
              Sudah punya akun?{" "}
              <Link href={"/login"} className="link">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
