"use client";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CircleX, Send } from "lucide-react";
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
import FormSuccess from "../common/contact/FormSuccess";
import FormError from "../common/contact/FormError";
import { contact_info } from "@/config/contact";
import ContactInfo from "../common/contact/ContactInfo";
import { useCursorContext } from "@/context/CursorContext";
import SectionTitle from "../common/global/SectionTitle";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import Footer from "../common/contact/Footer";
import { useServiceContext } from "@/context/ServiceContext";
import { services } from "@/config/services";
import { useInView } from "react-intersection-observer";
import styles from "@/app/styles.module.css";
import { cn } from "@/lib/utils";
const { spinner } = styles;

const Contact = () => {
  const { ref: contactFormRef, inView: animate } = useInView({
    triggerOnce: true,
  });
  const { isGetService, setIsGetService, serviceIdx } = useServiceContext();

  const sendEmailSchema = z.object({
    email: z.string().email({
      message: "This email is invalid",
    }),
    subject: z.string().min(isGetService ? 0 : 8, {
      message: "subject at least has 8 characters",
    }),
    message: z.string().min(12, {
      message: "Message at least has 12 characters",
    }),
  });

  const [error, setError] = useState<string | "Network Error" | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

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
      sendEmail(
        email,
        message,
        isGetService
          ? `I am looking for ( ${services[serviceIdx].service} ) service`
          : subject
      )
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
          title="Let's Talk!"
          description="Contact me now & get in touch !"
        />

        <div
          className={cn(
            "grid lg:grid-cols-12 gap-4 duration-1000 transition-opacity",
            animate ? "opacity-100" : "opacity-0"
          )}
          ref={contactFormRef}
        >
          <div className="lg:col-span-5 flex flex-col gap-12 lg:mt-0 mt-8 lg:order-1 order-2">
            {contact_info.map((item, i) => (
              <ContactInfo key={i} {...item} />
            ))}
          </div>

          <div className="lg:col-span-7 lg:order-2 order-1">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(submitHandler)}
              >
                <div className="flex flex-col gap-4">
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
                            className="bg-[--pure-background] h-14 text-[--pure-text] rounded-b-lg"
                            onMouseEnter={cursorFocus}
                            onMouseLeave={cursorDefault}
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
                      <FormItem className="relative md:col-span-1 col-span-2">
                        {isGetService ? (
                          <CircleX
                            className="absolute  right-4 top-12 z-10 text-red-500 hover:opacity-50 duration-300"
                            onClick={() => setIsGetService(false)}
                            onMouseEnter={cursorFocus}
                            onMouseLeave={cursorDefault}
                          />
                        ) : null}

                        <FormLabel className="text-[--pure-text]">
                          Subject <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Subject"
                            type="text"
                            disabled={isPending || isGetService}
                            autoComplete="on"
                            className="bg-[--pure-background] h-14 text-[--pure-text] rounded-lg"
                            onMouseEnter={cursorFocus}
                            onMouseLeave={cursorDefault}
                            value={
                              isGetService
                                ? `I am looking for ( ${services[serviceIdx].service} ) service`
                                : field.value
                            }
                            onChange={field.onChange}
                          />
                        </FormControl>
                        {isGetService ? null : <FormMessage />}
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
                            className="bg-[--pure-background] min-h-48 text-[--pure-text]"
                            onMouseEnter={cursorFocus}
                            onMouseLeave={cursorDefault}
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
                  className="w-40 h-14 group bg-[--main] rounded-t-lg"
                  disabled={isPending}
                  onMouseEnter={cursorFocus}
                  onMouseLeave={cursorDefault}
                >
                  {isPending ? (
                    <span className={spinner}></span>
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
        <Footer />
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
