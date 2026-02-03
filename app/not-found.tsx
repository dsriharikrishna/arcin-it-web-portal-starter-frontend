"use client";

import { MoveLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white overflow-hidden">
            {/* 404 Text */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[8rem] sm:text-[10rem] font-bold text-slate-100 leading-none select-none"
            >
                404
            </motion.h1>

            <div className="-mt-12 sm:-mt-16 flex flex-col items-center gap-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl sm:text-4xl font-bold text-slate-900"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-slate-600 text-lg max-w-md mx-auto"
                >
                    Oops! The page you are looking for doesn&apos;t exist or has been
                    moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button href="/" variant="primary-blue" size="lg" rounded="full">
                        <MoveLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
