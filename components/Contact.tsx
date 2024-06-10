"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import FormComponent from "./FormComponent";

const formSchema = zod.object({
  name: zod.string().min(2, {
    message: "Name has to contain at least 2 characters",
  }),
  email: zod.string().email({
    message: "Email is invalid",
  }),
  message: zod.string().min(5, {
    message: "Message has to contain at least 5 characters",
  }),
});

formSchema.required();

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: zod.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 py-10">
        <p className="text-4xl text-primary-foreground">Contact</p>
      </div>
      <div className="relative flex gap-4 w-full border-2 rounded-lg border-primary py-8 px-6">
        <div></div>
        <FormComponent form={form} onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default Contact;
