import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
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
              <Label isMarked>Email</Label>
              <Input placeholder="Tuliskan email kamu" type="text" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label isMarked>Kata Sandi</Label>
              <Input placeholder="Tuliskan kata sandi" type="password" />
              <div className="flex items-center justify-between">
                <p className="font-medium">Ingat saya</p>
                <Link href={"/"} className="text-primary font-semibold">
                  Lupa Kata Sandi?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-between">
            <Button>
              Masuk
            </Button>
            <p className="text-neutral-5">
              Belum punya akun?{" "}
              <Link href={"/register"} className="link">
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
