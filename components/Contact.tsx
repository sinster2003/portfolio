"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import FormComponent from "./FormComponent";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

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
      <div className="flex flex-row gap-4">
      <div className="border-2 rounded-lg border-primary py-8 px-6">
        <FormComponent form={form} onSubmit={onSubmit}/>
      </div>
        <div className="relative flex flex-col gap-2 w-2/3 bg-primary rounded-lg">
          <div className="rounded-full w-40 h-40 border-4 border-primary absolute -top-[15%] left-1/2 -translate-x-1/2 bg-background">
            <Image src="/avatar.png" alt="sindhur-avatar" fill style={{ objectFit: "contain" }} className="rounded-full"/>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center mt-[120px]">
            <div className="flex flex-col gap-1 items-center">
              <p className="text-2xl font-semibold">Sindhur Vasudeva Shabaraya</p>
              <p>Web developer</p>
            </div>
            <Button className="text-primary bg-white hover:bg-gray-200 w-40">Hire Me</Button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-2">
            <Link href="https://github.com/sinster2003" target="_blank">
              <Image src="/github-white.png" alt="github" width={30} height={30}/>
            </Link>
            <Link href="https://www.linkedin.com/in/sindhurvshabaraya" target="_blank">
              <Image src="/linkedin.png" alt="linkedin" width={30} height={30}/>
            </Link>
            <Link href="https://www.instagram.com/sindhur.aarya" target="_blank">
              <Image src="/instagram.png" alt="instagram" width={30} height={30}/>
            </Link>
            <Link href="https://x.com/sinster_21" target="_blank">
              <Image src="/x.png" alt="x" width={30} height={30}/>
            </Link>
            <Link href="mailto:sindhurvshabaraya2318@gmail.com" target="_blank">
              <Image src="/mail.png" alt="mail" width={30} height={30}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
