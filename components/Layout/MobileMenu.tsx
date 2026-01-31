"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
    <Link
        href={href}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
    >
        <Icon className="w-5 h-5" />
    </Link>
);

const ContactItem = ({ icon: Icon, title, content }: { icon: any; title: string; content: React.ReactNode }) => (
    <div className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-slate-500 text-sm font-medium">{title}</p>
            <div className="text-slate-900 font-semibold mt-0.5">{content}</div>
        </div>
    </div>
);

const InputField = ({ placeholder, type = "text", as = "input" }: { placeholder: string; type?: string; as?: "input" | "textarea" }) => {
    const Component = as;
    return (
        <Component
            type={as === "input" ? type : undefined}
            placeholder={placeholder}
            rows={as === "textarea" ? 3 : undefined}
            className="w-full px-4 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
        />
    );
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Transparent Backdrop for click-outside */}
                    <div
                        onClick={onClose}
                        className="fixed inset-0 z-[60]"
                    />

                    {/* Dropdown Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed top-[72px] right-4 w-[calc(100vw-32px)] sm:w-[340px] bg-[#EBF3FF] z-[70] rounded-3xl shadow-2xl border border-white/60 overflow-y-auto max-h-[calc(100vh-100px)] origin-top-right ring-1 ring-black/5"
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#CBD5E1 transparent'
                        }}
                    >
                        <div className="p-5">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Request A Quote */}
                            <div className="mt-1">
                                <h2 className="text-lg font-bold text-slate-900">Request A <span className="underline decoration-blue-500 underline-offset-4">Quote</span></h2>

                                <form className="mt-4 flex flex-col gap-3">
                                    <InputField placeholder="Enter Name" />
                                    <InputField placeholder="Enter Email" type="email" />
                                    <InputField placeholder="Mobile Number" type="tel" />
                                    <InputField placeholder="Subject" />
                                    <InputField placeholder="Message" as="textarea" />

                                    <Button variant="primary-blue" className="w-full mt-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:to-blue-800 shadow-blue-500/25 shadow-lg border-0 py-2.5 text-sm">
                                        Submit
                                    </Button>
                                </form>
                            </div>

                            {/* Get In Touch */}
                            <div className="mt-6">
                                <h3 className="text-base font-bold text-slate-900 mb-3">Get In Touch</h3>
                                <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                                    Please fill out the form below if you have a plan or project in mind that you&apos;d like to share with us.
                                </p>

                                <div className="flex flex-col gap-4">
                                    <ContactItem
                                        icon={Mail}
                                        title="Email"
                                        content={<a href="mailto:info@arcinit.com" className="hover:text-blue-600 transition-colors text-sm">info@arcinit.com</a>}
                                    />
                                    <ContactItem
                                        icon={Phone}
                                        title="Phone"
                                        content={<a href="tel:+31931234567" className="hover:text-blue-600 transition-colors text-sm">+31 93 123 4567</a>}
                                    />
                                    <ContactItem
                                        icon={MapPin}
                                        title="Address"
                                        content={<span className="text-sm">Hyderabad, India</span>}
                                    />
                                    <ContactItem
                                        icon={MapPin}
                                        title="Address"
                                        content={<span className="text-sm">Kuala Lumpur, Malaysia</span>}
                                    />
                                </div>
                            </div>

                            {/* Follow Us On */}
                            <div className="mt-6 mb-1">
                                <h3 className="text-sm font-bold text-slate-900 mb-3">Follow Us On</h3>
                                <div className="flex items-center gap-3">
                                    <SocialLink href="#" icon={Facebook} />
                                    <SocialLink href="#" icon={X} />
                                    <SocialLink href="#" icon={Instagram} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
