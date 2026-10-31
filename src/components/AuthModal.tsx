"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, UserCheck, Briefcase, Info } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: "seeker" | "employer";
}

export function AuthModal({ isOpen, onClose, initialRole = "seeker" }: AuthModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-slate-200 transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 id="auth-modal-title" className="text-xl font-bold text-slate-900">
              ConnectSphere Access
            </h3>
            <p className="text-xs font-medium text-teal-700 uppercase tracking-wider">
              Phase 1 Frontend Prototype
            </p>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mb-6 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">
          <div className="flex items-start gap-2.5">
            <Info className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900 mb-1">
                Authentication & Database Status
              </p>
              <p className="text-slate-600 text-xs leading-relaxed">
                ConnectSphere is currently operating as a high-fidelity frontend prototype. Real
                user accounts, database storage, and secure authentication will be integrated in
                Phase 2 following architecture approval.
              </p>
            </div>
          </div>
        </div>

        {/* Role options preview */}
        <div className="space-y-3 mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Explore Prototype Capabilities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200 p-3.5 bg-white hover:border-teal-500 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 mb-1.5">
                <UserCheck className="h-4 w-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-slate-900">Career Seeker</span>
              </div>
              <p className="text-xs text-slate-500">
                Browse verified demo listings, filter skills, and test the Career Navigator planner.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-3.5 bg-white hover:border-teal-500 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 mb-1.5">
                <Briefcase className="h-4 w-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-slate-900">Employer Portal</span>
              </div>
              <p className="text-xs text-slate-500">
                Preview job posting builders and candidate pipeline management features.
              </p>
            </div>
          </div>
        </div>

        {/* Modal actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
          >
            Continue Browsing Prototype
          </button>
        </div>
      </div>
    </div>
  );
}

