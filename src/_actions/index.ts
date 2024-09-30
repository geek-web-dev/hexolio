"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendEmail = async (
  senderEmail: string,
  message: string,
  subject: string
) => {
  try {
    await transporter.sendMail({
      from: senderEmail,
      to: process.env.APP_EMAIL,
      subject,
      html: message,
    });
    return "Your Email Sent Successfully !";
  } catch {
    return null;
  }
};
