"use client";

import Button from "@/components/ui/Button";
import Input from "../ui/Input";
import { useCallback, useState } from "react";
import TextAreaInput from "../ui/TextAreaInput";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        message: "",
    });

    const validation = useCallback(() => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            return false;
        }
        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            return false;
        }
        return true;
    }, [formData])

    const submit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validation()) {
            // Show error toast if available
            if (typeof window !== 'undefined') {
                window.addToast?.('Please fill in all required fields correctly', 'error');
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
            console.info('Form submitted:', formData);

            // Show success message
            if (typeof window !== 'undefined') {
                window.addToast?.('Message sent successfully! We\'ll get back to you soon.', 'success');
            }

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                website: "",
                message: "",
            });
        } catch (error) {
            console.error('Form submission error:', error);
            if (typeof window !== 'undefined') {
                window.addToast?.('Failed to send message. Please try again.', 'error');
            }
        }
    }, [formData, validation])
    return (
        <div className="bg-gradient-to from-[#FFFFFF] to-[#D9E5FF] rounded-2xl p-6 shadow-sm border border-slate-100 w-full flex flex-col gap-4">

            {/* Header */}
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-slate-900">
                    Send Us a Message
                </h2>
                <p className="text-sm text-slate-500 max-w-xl">
                    Have a project or idea in mind? Share the details and our team will get back to you within 24 hours.
                </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-3" onSubmit={(e) => submit(e)}>
                <div className="grid sm:grid-cols-2 gap-2">
                    <Input label="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
                    <Input label="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
                </div>

                <div className="grid sm:grid-cols-2 gap-2">
                    <Input label="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    <Input label="Website" type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                </div>

                <TextAreaInput label="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />

                {/* Trust note */}
                <p className="text-xs text-slate-400">
                    🔒 Your information is safe. We never share your data with third parties.
                </p>

                <Button
                    type="submit"
                    variant="primary-blue"
                    className="w-full py-3 rounded-xl shadow-md shadow-blue-500/20"
                >
                    Submit Message
                </Button>
            </form>
        </div>
    );
}



