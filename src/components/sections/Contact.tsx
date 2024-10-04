"use client";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/_actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSuccess from "../common/FormSuccess";
import FormError from "../common/FormError";
import { contact_info } from "@/config/contact";
import ContactInfo from "../common/ContactInfo";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import { ColorType } from "@/shared";
import SectionTitle from "../common/SectionTitle";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { personal_data } from "@/config/home";
import SocialLinks from "../common/SocialLinks";

const sendEmailSchema = z.object({
  email: z.string().email({
    message: "This email is invalid",
  }),
  subject: z.string().min(8, {
    message: "subject at least has 8 characters",
  }),
  message: z.string().min(12, {
    message: "Message at least has 12 characters",
  }),
});

const Contact = () => {
  const [error, setError] = useState<string | "Network Error" | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const animate = true;

  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitHandler = (values: z.infer<typeof sendEmailSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      const { email, message, subject } = values;
      sendEmail(email, message, subject)
        .then((mes) => {
          if (mes != null) {
            setSuccess(mes);
          } else setError("Network Error");
        })
        .catch((m) => setError(m));
    });
  };

  const { cursorDefault, cursorFocus } = useCursorContext();

  return (
    <section id="contact">
      <MaxWidthWrapper>
        <SectionTitle
          title="contact"
          description="contact me now & get in touch !"
        />
        <div className="grid">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:order-1 order-2 lg:mt-0 mt-4">
            {contact_info.map((item, i) => (
              <ContactInfo key={i} {...item} color={item.color as ColorType} />
            ))}
          </div>

          <div
            className={cn(
              "grid duration-2000 mt-4 lg:order-2 order-1",
              animate ? "opacity-100" : "opacity-0"
            )}
          >
            <div>
              <Form {...form}>
                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(submitHandler)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="md:col-span-1 col-span-2">
                          <FormLabel className="text-[--pure-text]">
                            Email <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Email"
                              type="text"
                              disabled={isPending}
                              autoComplete="on"
                              className="bg-white dark:bg-[#161616] h-12 text-[--pure-text]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="md:col-span-1 col-span-2">
                          <FormLabel className="text-[--pure-text]">
                            Subject <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Subject"
                              type="text"
                              disabled={isPending}
                              autoComplete="on"
                              className="bg-white dark:bg-[#161616] h-12 text-[--pure-text]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel className="text-[--pure-text]">
                            Message <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Your Message"
                              disabled={isPending}
                              autoComplete="on"
                              className="bg-white dark:bg-[#161616] min-h-[184px] text-[--pure-text]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <Button
                    type="submit"
                    className="min-w-40 h-12 group bg-[--main]"
                    disabled={isPending}
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorDefault}
                  >
                    {isPending ? (
                      <span className="spinner"></span>
                    ) : (
                      <>
                        <span className="group-hover:scale-90 duration-200">
                          Send
                        </span>
                        <Send
                          size={18}
                          className="ml-1 group-hover:scale-110 group-hover:ml-2 group-hover:translate-y-[-2px] duration-200"
                        />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center flex flex-col items-center gap-2">
          <p>
            © 2024{" "}
            <span
              className="text-[--main]"
              onClick={() => window.scrollTo({ left: 0, top: 0 })}
            >
              {personal_data.name}
            </span>{" "}
            All Rights Reserved.
          </p>
          <SocialLinks />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
