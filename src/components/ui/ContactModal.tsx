"use client";

import React, { useEffect } from "react";
import { X, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";
import Input from "./Input";
import TextAreaInput from "./TextAreaInput";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
                        className="fixed top-20 right-4 lg:right-20 z-[101] w-full max-w-5xl pointer-events-none flex justify-end"
                    >
                        <div
                            id="contact-dropdown"
                            className="bg-[#f0f7ff] w-full rounded-3xl overflow-hidden shadow-2xl relative pointer-events-auto flex flex-col md:flex-row max-h-[85vh] border border-blue-100 origin-top-right ring-1 ring-black/5"
                        >

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
                            >
                                <X size={18} />
                            </button>

                            {/* LEFT SIDE: FORM */}
                            <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                                <h2 className="text-2xl font-bold text-slate-800 mb-8">
                                    Request A <span className="underline decoration-blue-600 underline-offset-4">Q</span>uote
                                </h2>

                                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                    <Input
                                        label="Enter Name"
                                        type="text"
                                        placeholder="Enter Name"
                                    />
                                    <Input
                                        label="Enter Email"
                                        type="email"
                                        placeholder="Enter Email"
                                    />
                                    <Input
                                        label="Mobile Number"
                                        type="tel"
                                        placeholder="Mobile Number"
                                    />
                                    <Input
                                        label="Subject"
                                        type="text"
                                        placeholder="Subject"
                                    />
                                    <TextAreaInput
                                        label="Message"
                                        placeholder="Message"
                                        rows={5}
                                    />

                                    <CustomButton
                                        variant="solid"
                                        type="submit"
                                        rounded="lg"
                                        className="w-full py-4 text-lg font-bold tracking-tight mt-4 h-14 shadow-blue-500/20 shadow-xl"
                                    >
                                        Submit
                                    </CustomButton>
                                </form>
                            </div>

                            {/* RIGHT SIDE: INFO */}
                            <div className="flex-1 bg-white p-8 border-l border-blue-50 overflow-y-auto custom-scrollbar">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                                <p className="text-slate-500 text-sm mb-10 leading-relaxed">
                                    Please fill out the form below if you have a plan or project in mind that you'd like to share with us.
                                </p>

                                <div className="flex flex-col gap-6">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-blue-600 shadow-sm">
                                            <Mail size={22} />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm font-medium mb-1">Email</p>
                                            <p className="text-slate-900 font-bold">info@arcinit.com</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-blue-600 shadow-sm">
                                            <Phone size={22} />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm font-medium mb-1">Phone</p>
                                            <p className="text-slate-900 font-bold">+60-1151106263</p>
                                        </div>
                                    </div>

                                    {/* Address Head Office */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-blue-600 shadow-sm">
                                            <MapPin size={22} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <p className="text-slate-400 text-sm font-medium">Address</p>
                                                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                    Head Office
                                                </span>
                                            </div>
                                            <p className="text-slate-900 font-bold leading-relaxed text-sm">
                                                E111, Block E, Phileo Damansara I, 9, Jalan 16/11, Pusat Perdagangan Phileo Damansara, 46350 Petaling Jaya, Selangor, Malaysia
                                            </p>
                                        </div>
                                    </div>

                                    {/* Address Secondary */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-blue-600 shadow-sm">
                                            <MapPin size={22} />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm font-medium mb-1">Address</p>
                                            <p className="text-slate-900 font-bold leading-relaxed text-sm">
                                                P. No:8-3-293/82/B/98, G Hills, Banjara Hills, Hyderabad, Telangana, India, 500034
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* SOCIALS */}
                                <div className="mt-8">
                                    <p className="text-slate-800 font-bold mb-4">Follow Us On</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                                            <Instagram size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-xl bg-[#3b5998] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                                            <Facebook size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
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

export default ContactModal;
