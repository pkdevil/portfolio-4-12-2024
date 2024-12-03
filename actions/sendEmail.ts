"use server";

import { TFormSchema } from "@/app/contact/page";
import { Resend } from "resend";
import { z } from "zod";

export async function sendEmail(values: TFormSchema) {
  const resend = new Resend("re_7E8AtYFH_3u1rps944yyKcG5EQ4EHhS9f");
  const { data, error } = await resend.emails.send({
    from: `${values.name} <onboarding@resend.dev>`,
    to: ["virusalert005@gmail.com"],
    subject: "Customer Email",
    text: `Email = ${values.email} \n\nName = ${values.name} \n\nMessage = ${values.message}`,
  });
  if (error) {
    return false;
  }

  return data !== null;
}
