"use client";

import React, { useEffect } from "react";
import { X, AlertCircle, CheckCircle2, BookmarkCheck, ExternalLink } from "lucide-react";
import { Opportunity } from "@/types/opportunity";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: Opportunity;
}

export function ApplyModal({ isOpen, onClose, opportunity }: ApplyModalProps) {
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
      aria-labelledby="apply-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all">
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
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div>
            <h3 id="apply-modal-title" className="text-lg font-bold text-slate-900">
              Demonstration Application Notice
            </h3>
            <p className="text-xs font-medium text-amber-700 uppercase tracking-wider">
              Phase 1 Prototype Notice
            </p>
          </div>
        </div>

        {/* Opportunity Context */}
        <div className="mb-4 rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-700">
          <p className="font-semibold text-slate-900">{opportunity.title}</p>
          <p className="text-slate-600 mt-0.5">
            {opportunity.organization} • {opportunity.location}
          </p>
        </div>

        {/* Honest Explanation */}
        <div className="space-y-3 mb-6 text-sm text-slate-600">
          <p className="leading-relaxed">
            Thank you for exploring this listing! In <strong>Phase 1</strong>, ConnectSphere is
            operating as a functional frontend prototype with verified sample opportunities.
          </p>
          <p className="leading-relaxed">
            Direct application submission, portfolio attachments, and employer screening pipelines
            will be activated in <strong>Phase 2</strong> after user authorization and backend
            infrastructure are deployed.
          </p>

          {/* Phase 2 Feature Preview */}
          <div className="rounded-xl border border-teal-100 bg-teal-50/60 p-3 text-xs text-slate-700">
            <p className="font-semibold text-teal-900 mb-1.5 flex items-center gap-1.5">
              <BookmarkCheck className="h-4 w-4 text-teal-700" />
              What to prepare for Phase 2:
            </p>
            <ul className="space-y-1 list-disc list-inside text-slate-600">
              <li>Curated GitHub repository links or design portfolio</li>
              <li>Proof of required skills: {opportunity.skills.slice(0, 3).join(", ")}</li>
              <li>Clear statement of availability for {opportunity.arrangement} arrangement</li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-100">
          <button
            onClick={onClose}
            className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            I Understand — Back to Listing
          </button>
        </div>
      </div>
    </div>
  );
}

