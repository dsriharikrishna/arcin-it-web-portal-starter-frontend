"use client";

import React, { useEffect } from "react";
import { X, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";
import Input from "./Input";
import TextAreaInput from "./TextAreaInput";
import { CONTACT_INFO, COMPANY_INFO } from "@/constants/app-constants";
import { useScrollLock } from "@/hooks/useScrollLock";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DesktopContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  useScrollLock(isOpen);

  // Outside click listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.getElementById("contact-dropdown");
      if (isOpen && modalElement && !modalElement.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Subtle Backdrop (invisible but catches clicks) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/5"
          />

          {/* Dropdown Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="pointer-events-none fixed top-20 right-4 z-[101] flex w-full max-w-5xl justify-end lg:right-20"
          >
            <div
              id="contact-dropdown"
              className="pointer-events-auto relative flex max-h-[85vh] w-full origin-top-right flex-col overflow-hidden rounded-3xl border border-blue-100 bg-[#f0f7ff] shadow-2xl ring-1 ring-black/5 md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                <X size={18} />
              </button>

              {/* LEFT SIDE: FORM */}
              <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
                <h2 className="mb-6 text-2xl font-bold text-slate-800">
                  Request A{" "}
                  <span className="underline decoration-blue-600 underline-offset-4">Q</span>uote
                </h2>

                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <Input label="Enter Name" type="text" placeholder="Enter Name" />
                  <Input label="Enter Email" type="email" placeholder="Enter Email" />
                  <Input label="Mobile Number" type="tel" placeholder="Mobile Number" />
                  <Input label="Subject" type="text" placeholder="Subject" />
                  <TextAreaInput label="Message" placeholder="Message" rows={5} />

                  <CustomButton
                    variant="solid"
                    type="submit"
                    rounded="lg"
                    className="mt-4 h-14 w-full py-4 text-lg font-bold tracking-tight shadow-xl shadow-blue-500/20"
                  >
                    Submit
                  </CustomButton>
                </form>
              </div>

              {/* RIGHT SIDE: INFO */}
              <div className="custom-scrollbar flex-1 overflow-y-auto border-l border-blue-50 bg-mesh-gradient-color p-5">
                <h2 className="mb-2 text-2xl font-bold text-slate-800">Get In Touch</h2>
                <p className="mb-6 text-sm leading-relaxed text-slate-500">
                  Please fill out the form below if you have a plan or project in mind that
                  you&apos;d like to share with us.
                </p>

                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-400">Email</p>
                      <p className="font-bold text-slate-900">{CONTACT_INFO.email.primary}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-400">Phone</p>
                      <p className="font-bold text-slate-900">{CONTACT_INFO.phone.display}</p>
                    </div>
                  </div>

                  {/* Address Head Office */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                      <MapPin size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <p className="text-sm font-medium text-slate-400">Address</p>
                        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                          Head Office
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed font-bold text-slate-900">
                        {COMPANY_INFO.location.address1}
                      </p>
                    </div>
                  </div>

                  {/* Address Branch Office */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                      <MapPin size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <p className="text-sm font-medium text-slate-400">Address</p>
                      </div>
                      <p className="text-sm leading-relaxed font-bold text-slate-900">
                        {COMPANY_INFO.location.address2}
                      </p>
                    </div>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="mt-4">
                  <p className="mb-2 font-bold text-slate-800">Follow Us On</p>
                  <div className="flex gap-4">
                    <a
                      href={CONTACT_INFO.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500 text-white shadow-md transition-transform hover:scale-110"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={CONTACT_INFO.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b5998] text-white shadow-md transition-transform hover:scale-110"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={CONTACT_INFO.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-md transition-transform hover:scale-110"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DesktopContactModal;
