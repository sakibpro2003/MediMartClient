
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useUser } from "@/context/UserContext";

const Login = () => {
  const router = useRouter();
  const { setIsLoading } = useUser();
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (loginData) => {
    setLoading(true);
    try {
      const res = await loginUser(loginData);
      if (res?.success === true) {
        toast.success("Login successful");
        setIsLoading(true);
        router.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) return null; // Prevents hydration mismatch

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border border-gray-300">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Sign in to your account
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="name@domain.com"
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        autoComplete="off" // Prevent LastPass from modifying HTML
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="••••••••"
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        autoComplete="new-password" // Prevent autofill issues
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="btn-custom w-full text-white font-medium rounded-lg p-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Logging in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>

            <p className="text-sm text-gray-600 text-center">
              Don’t have an account yet?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Login;
