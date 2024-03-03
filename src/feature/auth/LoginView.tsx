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

const loginFormSchema = z.object({
  email: z.string({ required_error: "Nama tidak boleh kosong" }),
  password: z.string({ required_error: "Kata sandi tidak boleh kosong" }),
});

const LoginView = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
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
            Masuk akun kamu yang sudah terdaftar di PanduAI
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
              <div className="flex flex-col gap-y-2">
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
                <div className="flex items-center justify-between">
                  <p className="font-medium">Ingat saya</p>
                  <Link href="/" className="text-primary font-semibold">
                    Lupa Kata Sandi?
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 items-center justify-between">
              <Button>Masuk</Button>
              <p className="text-neutral-5">
                Belum punya akun?{" "}
                <Link href="/register" className="link">
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginView;
