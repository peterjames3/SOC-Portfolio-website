'use client';
import { useRef, useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import useToast from "@/app/components/useToast";
import { validate, FormValues } from "./validation";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notifySuccess, notifyError } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const serviceId  = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID as string;
  const publicKey  = process.env.NEXT_PUBLIC_KEY as string;
  
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
  const token = recaptchaRef.current?.getValue();
  if (!token) {
    notifyError("Please complete the reCAPTCHA.");
    return;
  }

  setIsSubmitting(true);

  emailjs.send(serviceId, templateId, {
    ...values,
    "g-recaptcha-response": token, // ← this is what EmailJS expects
  }, publicKey).then(
    () => {
      notifySuccess("Thank you for contacting Me! I'll get back to you soon.");
      setIsSubmitting(false);
      formik.resetForm();
      recaptchaRef.current?.reset();
    },
    (error) => {
      const message = error?.text || error?.message || JSON.stringify(error);
      notifyError(`Message sending failed! ${message}`);
      setIsSubmitting(false);
      recaptchaRef.current?.reset();
    }
  );
},
  });

  return { formik, isSubmitting, recaptchaRef };
};