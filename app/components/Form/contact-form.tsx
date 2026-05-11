"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { useContactForm } from "./useContactForm";
import Input from "./input";
import TextArea from "./text-area";
import { PrimaryButton } from "@/app/components/PrimaryButton";

export const ContactForm = () => {
  const { formik, isSubmitting, recaptchaRef } = useContactForm();

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="name"
          name="name"
          type="text"
          label="Full Name"
          placeholder="John Doe"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name ? formik.errors.name : undefined}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email ? formik.errors.email : undefined}
        />
      </div>

      <Input
        id="subject"
        name="subject"
        type="text"
        label="Subject"
        placeholder="What is this about?"
        required
        value={formik.values.subject}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.subject ? formik.errors.subject : undefined}
      />

      <TextArea
        id="message"
        name="message"
        rows={5}
        label="Message"
        placeholder="How can I help you?"
        required
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message ? formik.errors.message : undefined}
      />
      <div className="flex  items-center  justify-between">
        <PrimaryButton>
          {isSubmitting ? "Sending..." : "Send Message"}
        </PrimaryButton>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        />
      </div>
    </form>
  );
};