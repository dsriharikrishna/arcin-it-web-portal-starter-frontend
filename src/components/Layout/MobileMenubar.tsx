"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Facebook, Instagram, LucideIcon } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import { CONTACT_INFO, COMPANY_INFO } from "@/constants/app-constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; label: string }[];
}

/* Social Icon */
const SocialLink = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <Link
    href={href}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-500 hover:text-white"
  >
    <Icon className="h-5 w-5" />
  </Link>
);

/* Contact Row */
const ContactItem = ({
  icon: Icon,
  title,
  content,
}: {
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <div className="mt-0.5 font-semibold text-slate-900">{content}</div>
    </div>
  </div>
);

/* Input */
const InputField = ({
  placeholder,
  type = "text",
  as = "input",
}: {
  placeholder: string;
  type?: string;
  as?: "input" | "textarea";
}) => {
  const Component = as;
  return (
    <Component
      type={as === "input" ? type : undefined}
      rows={as === "textarea" ? 3 : undefined}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
    />
  );
};

export default function MobileMenubar({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div onClick={onClose} className="fixed inset-0 z-[60]" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] right-4 z-[70] max-h-[calc(100vh-100px)] w-[calc(100vw-32px)] overflow-y-auto rounded-lg border border-white/60 bg-[#EBF3FF] shadow-xl ring-1 ring-black/5 sm:w-[340px]"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#CBD5E1 transparent",
            }}
          >
            <div className="relative p-4">
              <div className="flex items-center justify-end">
                {/* Close */}
                <CustomButton
                  onClick={onClose}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <X className="h-4 w-4" />
                </CustomButton>
              </div>

              {/* NAV — HIDDEN ON MOBILE */}
              <div className="mb-6 block lg:hidden">
                <h2 className="mb-4 text-lg font-bold text-slate-900">Menu</h2>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-500 hover:text-white"
                    >
                      {item.label}
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-200" />

              {/* Quote Form */}
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Request A{" "}
                  <span className="underline decoration-blue-500 underline-offset-4">Quote</span>
                </h2>

                <form className="mt-4 flex flex-col gap-3">
                  <InputField placeholder="Enter Name" />
                  <InputField placeholder="Enter Email" type="email" />
                  <InputField placeholder="Mobile Number" type="tel" />
                  <InputField placeholder="Subject" />
                  <InputField placeholder="Message" as="textarea" />

                  <CustomButton
                    variant="primary-blue"
                    className="w-full border-0 bg-gradient-to-r from-blue-500 to-blue-700 py-2.5 text-sm shadow-lg shadow-blue-500/25 hover:to-blue-800"
                  >
                    Submit
                  </CustomButton>
                </form>
              </div>

              {/* Contact */}
              <div className="mt-6">
                <h3 className="mb-3 text-base font-bold text-slate-900">Get In Touch</h3>

                <div className="flex flex-col gap-4">
                  <ContactItem
                    icon={Mail}
                    title="Email"
                    content={
                      <a
                        href={`mailto:${CONTACT_INFO.email.primary}`}
                        className="text-sm hover:text-blue-600"
                      >
                        {CONTACT_INFO.email.primary}
                      </a>
                    }
                  />
                  <ContactItem
                    icon={Phone}
                    title="Phone"
                    content={
                      <a
                        href={`tel:${CONTACT_INFO.phone.primary}`}
                        className="text-sm hover:text-blue-600"
                      >
                        {CONTACT_INFO.phone.display}
                      </a>
                    }
                  />
                  <ContactItem
                    icon={MapPin}
                    title="Address"
                    content={
                      <span className="text-sm">
                        {COMPANY_INFO.location.city}, {COMPANY_INFO.location.country}
                      </span>
                    }
                  />
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-bold text-slate-900">Follow Us On</h3>
                <div className="flex gap-3">
                  <SocialLink href={CONTACT_INFO.social.facebook} icon={Facebook} />
                  <SocialLink href={CONTACT_INFO.social.instagram} icon={Instagram} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
