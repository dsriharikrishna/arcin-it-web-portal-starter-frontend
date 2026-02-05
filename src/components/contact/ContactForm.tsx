"use client";

import CustomButton from "@/components/ui/CustomButton";
import Input from "../ui/Input";
import PhoneInput from "../ui/PhoneInput";
import { useCallback, useState } from "react";
import TextAreaInput from "../ui/TextAreaInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    message: "",
  });

  const validation = useCallback(() => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      return false;
    }
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      return false;
    }
    return true;
  }, [formData]);

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!validation()) {
        // Show error toast if available
        if (typeof window !== "undefined") {
          window.addToast?.("Please fill in all required fields correctly", "error");
        }
        return;
      }

      try {
        // TODO: Replace with actual API endpoint
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });

        // Simulate successful submission
        console.info("Form submitted:", formData);

        // Show success message
        if (typeof window !== "undefined") {
          window.addToast?.("Message sent successfully! We'll get back to you soon.", "success");
        }

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          countryCode: "+91",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Form submission error:", error);
        if (typeof window !== "undefined") {
          window.addToast?.("Failed to send message. Please try again.", "error");
        }
      }
    },
    [formData, validation]
  );
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-slate-100 bg-gradient-to-b from-[#EEF2FF] to-[#E0E7FF] p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-900">Send Us a Message</h2>
        <p className="max-w-xl text-sm text-slate-500">
          Please fill out the form below if you have a plan or project in mind that you&apos;d like
          to share with us.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-3" onSubmit={(e) => submit(e)}>
        <div className="grid gap-2 sm:grid-cols-2">
          <Input
            label="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
          <Input
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <PhoneInput
            label="Phone Number"
            value={formData.phone}
            countryCode={formData.countryCode}
            onPhoneChange={(value) => setFormData({ ...formData, phone: value })}
            onCountryCodeChange={(value) => setFormData({ ...formData, countryCode: value })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <TextAreaInput
          label="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />

        <div className="flex justify-end pt-10">
          <CustomButton
            type="submit"
            variant="primary-blue"
            className="w-full rounded-xl py-3 shadow-md shadow-blue-500/20"
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
