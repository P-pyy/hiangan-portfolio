"use client";
import { useState } from "react";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { jetbrainsMono } from "@/app/font";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error: unknown) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again!");
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className={`${jetbrainsMono.className} w-full flex items-center justify-center px-4 sm:px-6 py-16 md:py-24 relative overflow-hidden`}>
      <style>{`
        @keyframes float-glow {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -15px); }
          66% { transform: translate(-15px, 25px); }
        }

        @keyframes corner-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.4); }
          50% { box-shadow: 0 0 8px 2px rgba(255, 68, 68, 0.2); }
        }

        @keyframes border-glow {
          0%, 100% { box-shadow: inset 0 0 20px rgba(255, 68, 68, 0.1), 0 0 20px rgba(255, 68, 68, 0.15); }
          50% { box-shadow: inset 0 0 30px rgba(255, 68, 68, 0.15), 0 0 30px rgba(255, 68, 68, 0.25); }
        }

        @keyframes accent-line-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }

        @keyframes button-hover-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .contact-section {
          position: relative;
          max-width: 600px;
          width: 100%;
        }

        .floating-glow {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255, 68, 68, 0.3), transparent);
          border-radius: 50%;
          filter: blur(50px);
          animation: float-glow 8s ease-in-out infinite;
          pointer-events: none;
        }

        .floating-glow-top-right {
          top: -40px;
          right: -40px;
          animation-delay: 0s;
        }

        .contact-panel {
          background: linear-gradient(to bottom, rgba(120, 0, 0, 0.12), rgba(0, 0, 0, 0.92));
          border: 1px solid rgba(255, 70, 70, 0.18);
          border-radius: 24px;
          padding: 50px 40px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
          animation: border-glow 4s ease-in-out infinite;
          box-shadow: 0 0 40px rgba(255, 68, 68, 0.1);
        }

        .bg-gradient-radial-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle at top-left, rgba(127, 29, 29, 0.15), transparent);
          pointer-events: none;
        }

        .bg-gradient-radial-bottom {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle at bottom-right, rgba(127, 29, 29, 0.15), transparent);
          pointer-events: none;
        }

        .accent-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #ff4444, transparent);
          opacity: 0.7;
          animation: accent-line-glow 3s ease-in-out infinite;
        }

        .corner {
          position: absolute;
          width: 28px;
          height: 28px;
          border: 1px solid rgba(255, 68, 68, 0.4);
          animation: corner-pulse 4s ease-in-out infinite;
        }

        .corner-top-left {
          top: 12px;
          left: 12px;
          border-right: none;
          border-bottom: none;
          border-radius: 8px 0 0 0;
        }

        .corner-top-right {
          top: 12px;
          right: 12px;
          border-left: none;
          border-bottom: none;
          border-radius: 0 8px 0 0;
          animation-delay: 0.5s;
        }

        .corner-bottom-left {
          bottom: 12px;
          left: 12px;
          border-right: none;
          border-top: none;
          border-radius: 0 0 0 8px;
          animation-delay: 1s;
        }

        .corner-bottom-right {
          bottom: 12px;
          right: 12px;
          border-left: none;
          border-top: none;
          border-radius: 0 0 8px 0;
          animation-delay: 1.5s;
        }

        .form-content {
          position: relative;
          z-index: 10;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: flex-start;
        }

        .textarea-group {
          align-items: flex-start;
        }

        .input-icon {
          position: absolute;
          left: 4px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          border: 1px solid rgba(255, 68, 68, 0.35);
          background: rgba(255, 68, 68, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 68, 68, 0.9);
          z-index: 10;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .textarea-icon {
          top: 12px;
          transform: none;
        }

        .input-field {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 68, 68, 0.15);
          border-radius: 12px;
          padding: 14px 18px 14px 44px;
          width: 100%;
          color: rgba(255, 255, 255, 0.95);
          font-family: inherit;
          font-size: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.35);
          opacity: 1;
          font-size: 12px;
        }

        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .input-field:hover {
          border-color: rgba(255, 68, 68, 0.35);
          background: rgba(0, 0, 0, 0.5);
        }

        .input-field:focus {
          outline: none;
          border-color: rgba(255, 68, 68, 0.6);
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 20px rgba(255, 68, 68, 0.25), inset 0 0 10px rgba(255, 68, 68, 0.05);
          transform: translateY(-2px);
        }

        .input-group:focus-within .input-icon {
          color: rgba(255, 68, 68, 1);
          transform: translateY(calc(-50% - 2px));
        }

        .textarea-group:focus-within .textarea-icon {
          transform: translateY(-2px);
        }

        .textarea-field {
          resize: vertical;
          max-height: 300px;
          min-height: 140px;
          padding-top: 24px;
        }

        .submit-button {
          background: linear-gradient(90deg, #7f1d1d, #991b1b, #7f1d1d);
          background-size: 200% 100%;
          border: 1px solid rgba(255, 68, 68, 0.4);
          color: white;
          font-weight: 600;
          font-size: 14px;
          padding: 14px 28px;
          border-radius: 12px;
          width: 100%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
          margin-top: 24px;
        }

        .submit-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .submit-button:hover:not(:disabled) {
          transform: scale(1.05);
          border-color: rgba(255, 68, 68, 0.8);
          box-shadow: 0 0 30px rgba(255, 68, 68, 0.4), inset 0 0 15px rgba(255, 68, 68, 0.1);
          background-position: 200% 0;
        }

        .submit-button:hover:not(:disabled):before {
          left: 100%;
        }

        .submit-button:active:not(:disabled) {
          transform: scale(1.02);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .submit-button:hover:not(:disabled) .button-icon {
          transform: translateX(4px);
        }

        .status-text {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 18px;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.55);
          letter-spacing: 1px;
          position: relative;
          text-transform: none;
        }

        .status-text::before,
        .status-text::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 68, 68, 0.25);
          min-width: 20px;
        }

        .status-dot {
          color: rgba(255, 68, 68, 0.85);
          font-size: 16px;
          line-height: 0;
        }

        .status-copy {
          color: rgba(255, 255, 255, 0.55);
          font-size: 8px;
          white-space: nowrap;
          text-transform: none;
        }

        @media (max-width: 640px) {
          .contact-panel {
            padding: 36px 24px;
            border-radius: 18px;
          }

          .input-field {
            padding: 12px 16px 12px 50px;
            font-size: 12px;
          }

          .input-icon {
            left: 14px;
          }

          .corner {
            width: 20px;
            height: 20px;
          }

          .submit-button {
            padding: 12px 24px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="contact-section">
        <div className="floating-glow floating-glow-top-right"></div>

        <div className="contact-panel">
          <div className="bg-gradient-radial-top"></div>
          <div className="bg-gradient-radial-bottom"></div>
          <div className="accent-line"></div>

          <div className="corner corner-top-left"></div>
          <div className="corner corner-top-right"></div>
          <div className="corner corner-bottom-left"></div>
          <div className="corner corner-bottom-right"></div>

          <div className="form-content">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Contact Me</h2>
              <p className="text-xs md:text-sm text-gray-400 tracking-wide">Let's work together or just say hi</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="input-group">
                <div className="input-icon">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div className="input-group textarea-group">
                <div className="input-icon textarea-icon">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="input-field textarea-field"
                />
              </div>

              <button type="submit" disabled={loading} className="submit-button">
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} className="button-icon" />
              </button>
            </form>

            <div className="status-text">
              <span className="status-dot">•</span>
              <span className="status-copy">I'll get back to you as soon as possible!</span>
              <span className="status-dot">•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
