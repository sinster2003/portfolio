"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import zod from "zod";
import FormComponent from "./FormComponent";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // initialise the email client on mount
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_API_KEY
    })
  }, []);

  const onSubmit = async (data: zod.infer<typeof formSchema>) => {
    try{
      setLoading(true);
      await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string, {
          from_name: data.name,
          user_email: data.email,
          message: data.message,
          recipient: process.env.NEXT_PUBLIC_EMAIL_ADDRESS
        }
      );
      setLoading(false);
      form.reset();
      toast.success("Message sent successfully", {
        className: "font-sans",
        position: "bottom-right"
      });
    } 
    catch(error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong, try again later", {
        className: "font-sans",
        position: "bottom-right"
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 py-10 items-center md:items-start">
        <p className="text-4xl text-primary-foreground">Contact</p>
      </div>
      <div className="flex flex-col md:flex-row gap-20 md:gap-4">
      <div className="border-2 rounded-lg border-primary py-8 px-6 mx-5 md:mx-0">
        <FormComponent form={form} onSubmit={onSubmit} loading={loading}/>
      </div>
        <div className="relative flex flex-col gap-2 w-full h-80 md:w-2/3 md:h-auto bg-primary rounded-lg rounded-b-none md:rounded-lg">
          <div className="rounded-full w-40 h-40 border-4 border-primary absolute -top-[15%] left-1/2 -translate-x-1/2 bg-background">
            <Image src="/avatar.png" alt="sindhur-avatar" fill style={{ objectFit: "contain" }} className="rounded-full"/>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center mt-[120px]">
            <div className="flex flex-col gap-1 items-center">
              <p className="text-2xl font-semibold text-center">Sindhur Vasudeva Shabaraya</p>
              <p>Web developer</p>
            </div>
            <Link href="mailto:sindhurvshabaraya2318@gmail.com">
              <Button className="text-primary bg-white hover:bg-gray-200 w-40">Hire Me</Button>
            </Link>
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
