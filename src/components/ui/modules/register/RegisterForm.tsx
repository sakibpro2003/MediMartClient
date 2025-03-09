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
import { Input } from "../../input";
import { Button } from "../../button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "./registerValidation";
import { registerUser } from "@/services/AuthService";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (userData) => {
    const res = await registerUser(userData);
    console.log(res);
    if (res.success === true) {
      //toast
      router.push("/login");
    }
  };

  const password = form.watch("password");
  const confirm_password = form.watch("confirm_password");
  return (
    <div className="max-w-md border-2 border-green-500 p-4 mx-auto rounded-lg shadow-lg">
      <h3 className="text-2xl text-center">Register Form</h3>
      {/*NOTE: providing useForm's all property in shadCn's Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <label>Name:</label>
          <FormField
            // form.control to get all input field's control
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input {...field} value={field.value || " "} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <label>Email:</label>

          <FormField
            // form.control to get all input field's control
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input {...field} value={field.value || " "} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <label>Phone:</label>

          <FormField
            // form.control to get all input field's control
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input {...field} value={field.value || " "} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <label>Password:</label>

          <FormField
            // form.control to get all input field's control
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <label>Confirm Password:</label>

          <FormField
            // form.control to get all input field's control
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormDescription />
                {/* if(!password === confirm_password) */}
                {(password === "" && confirm_password === "") ||
                !(password === confirm_password) ? (
                  <FormMessage>Password do not match!</FormMessage>
                ) : (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
          <Button
            disabled={password === "" && confirm_password === ""}
            className="w-full"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
