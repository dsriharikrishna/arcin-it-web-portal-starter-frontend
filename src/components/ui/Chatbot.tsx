"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import Image from "next/image";
import { CHATBOT_CONFIG, CONTACT_INFO, COMPANY_INFO } from "@/constants/app-constants";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const generateId = (prefix: string) => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-bot-1",
      text: `Hi! 👋 I'm ${COMPANY_INFO.name} Assistant. How can I help you today?`,
      sender: "bot",
      timestamp: new Date("2024-01-01T00:00:00Z"),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: generateId("user"),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: generateId("bot"),
        text: CHATBOT_CONFIG.botResponses[text] || CHATBOT_CONFIG.botResponses.default,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handlePredefinedMessage = (message: string) => {
    handleSendMessage(message);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-6 bottom-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl transition-shadow hover:shadow-blue-500/50"
            aria-label="Open chat"
          >
            <Image
              src={"/svgs/chatbot.svg"}
              alt="Chatbot"
              width={28}
              height={28}
              className="animate-bounce object-contain"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-6 bottom-6 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <Image
                    src="/Arcin_logo_Name.png"
                    alt="ArcinIT"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {COMPANY_INFO.name} Assistant
                  </h3>
                  <p className="text-xs text-blue-100">Online • Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-white transition-colors hover:bg-white/20"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex max-w-[80%] gap-2 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar */}
                    {message.sender === "bot" && (
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800">
                        <Bot size={18} className="text-white" />
                      </div>
                    )}

                    {/* Message Bubble */}
                    <div
                      className={`rounded-2xl px-4 py-2.5 ${
                        message.sender === "user"
                          ? "rounded-tr-sm bg-blue-600 text-white"
                          : "rounded-tl-sm bg-white text-slate-800 shadow-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-t border-slate-200 bg-white px-4 py-3"
              >
                <p className="mb-2 text-xs font-medium text-slate-500">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {CHATBOT_CONFIG.predefinedMessages.map((msg) => (
                    <button
                      key={msg}
                      onClick={() => handlePredefinedMessage(msg)}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs text-blue-700 transition-colors hover:bg-blue-100"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Input Area */}
            <div className="border-t border-slate-200 bg-white p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white transition-shadow hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
