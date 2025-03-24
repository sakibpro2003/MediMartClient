"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "@/services/AuthService";
import { loginSchema } from "./loginValidation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "", // Ensure email is always controlled
      password: "", // Ensure password is always controlled
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (loginData) => {
    const res = await loginUser(loginData);
    console.log(res, "login result");
    if (res?.success === true) {
      toast.success("Login successful");
      router.push("/");
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border border-gray-300">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Sign in to your account
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="name@company.com" className="w-full border border-gray-300 p-2 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" {...field} placeholder="••••••••" className="w-full border border-gray-300 p-2 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg p-2">
              Sign in
            </Button>
            <p className="text-sm text-gray-600 text-center">
              Don’t have an account yet? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Login;