"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  ariaLabel = "Détails",
}: ModalProps) {
  // État interne pour gérer l'unmount différé (laisser jouer la transition out)
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Délai d'un tick pour permettre au CSS de transitionner
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      // Démonter après la transition (300ms)
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // ESC + scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`alia-modal fixed inset-0 z-[60] flex items-center justify-center p-4 lg:p-8 ${
        visible ? "is-open" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-alia-dark/90 backdrop-blur-md cursor-default"
      />

      {/* Bouton close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-alia-orange backdrop-blur-md text-white flex items-center justify-center transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Container */}
      <div className="alia-modal-content relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-alia-dark rounded-lg shadow-2xl border border-white/10">
        {children}
      </div>
    </div>
  );
}
