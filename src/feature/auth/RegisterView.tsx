"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/button";
import { Input } from "components/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";

const registerFormSchema = z
  .object({
    name: z.string({ required_error: "Nama tidak boleh kosong" }),
    // Refine password sesuai kebutuhan aja
    password: z.string({ required_error: "Kata sandi tidak boleh kosong" }),
    password_confirmation: z.string({
      required_error: "Konfirmasi kata sandi tidak boleh kosong",
    }),
    email: z
      .string({
        required_error: "Email tidak boleh kosong",
      })
      .email({ message: "Email tidak valid" }),
    phone: z.string({
      required_error: "Nomor telepon tidak boleh kosong",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Kata sandi tidak sama",
    path: ["password_confirmation"],
  });

const RegisterView = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      password: "",
      password_confirmation: "",
      email: "",
      phone: "",
    },
  });
  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-screen min-h-screen py-20 bg-gradient-to-br from-white to-[#81DFFF]">
      <div className="max-w-xl  mx-auto bg-white p-10 rounded-2xl flex flex-col gap-10">
        <div className="mx-auto flex items-center flex-col gap-2">
          <Image
            alt="panduai logo"
            src="/images/logo.png"
            width={180}
            height={52}
          />
          <p className="text-center text-gray-600">
            Daftarkan dirimu untuk mengakses layanan PanduAI
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-16"
          >
            <div className="flex flex-col gap-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel isRequired>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tuliskan nama kamu"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel isRequired>Nomor Telepon</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tuliskan nomor telepon kamu"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel isRequired>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tuliskan email kamu"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel isRequired>Kata Sandi</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tuliskan kata sandi"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel isRequired>Ulangi Kata Sandi</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tuliskan ulang kata sandi"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-y-4 items-center justify-between">
              <Button>Daftar</Button>
              {/* <button className="bg-primary h-14 w-full text-white font-bold rounded-lg">
              Daftar
            </button> */}
              <p className="text-neutral-5">
                Sudah punya akun?{" "}
                <Link href="/login" className="link">
                  Masuk
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterView;
