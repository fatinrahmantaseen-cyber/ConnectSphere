"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Platform Feedback");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact ConnectSphere
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Have feedback on the Phase 1 prototype, feature requests for the AI Career Navigator, or
          employer partnership inquiries? Send us your message.
        </p>
      </div>

      <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-4 sm:p-5 text-xs sm:text-sm text-slate-800">
        <div className="flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900">Prototype Contact Notice</p>
            <p className="text-slate-600 leading-relaxed mt-0.5">
              This form functions as an interactive frontend preview. Form submissions simulate the
              receipt workflow on the client side without storing records in an external database
              during Phase 1.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="md:col-span-7">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="space-y-4 py-6 text-center animate-in fade-in">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>! Your inquiry regarding &quot;{category}&quot;
                  has been simulated successfully in this prototype session.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage("");
                    }}
                    className="text-xs font-semibold text-teal-700 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Your Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Farhan Chowdhury"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email-addr"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email-addr"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="farhan@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Platform Feedback">Prototype Feedback & UX Suggestions</option>
                    <option value="Employer Partnership">Employer Partnership / Pilot Interest</option>
                    <option value="University Campus Ambassador">
                      Campus Ambassador & Student Program
                    </option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts, suggestions, or questions..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-xs cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Prototype Feedback</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white space-y-3">
            <h3 className="font-bold text-sm text-slate-900">Regional Presence</h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Dhaka Hub: Gulshan & Banani Tech Corridor, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Regional Circles: Chattogram, Sylhet & Distributed Remote</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 space-y-2 text-xs text-slate-600">
            <p className="font-bold text-slate-900">Open Communication</p>
            <p className="leading-relaxed">
              We welcome early architectural feedback from software engineers, student leaders, and
              tech hiring managers across Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

