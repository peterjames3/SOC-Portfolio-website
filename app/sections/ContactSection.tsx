"use client";

import { useState, FormEvent } from "react";
import { SectionLabel } from "../components/SectionLabel";
import { PrimaryButton } from "../components/PrimaryButton";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Mail, MessageSquare, Clock } from "lucide-react";

export function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <SectionLabel label="CONTACT" />
            <h2 className="font-display text-[28px] md:text-[42px] font-normal leading-[1.15] text-text-primary mt-4">
              Get in Touch
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mt-3 max-w-[600px]">
              Ready to strengthen your security posture or discuss a role? I
              respond to all inquiries within 24-48 hours. Let's build something
              secure together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[rgba(232,104,26,0.1)] border border-[rgba(232,104,26,0.2)] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-primary mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:analyst@secops.dev"
                    className="font-body text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    analyst@secops.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[rgba(232,104,26,0.1)] border border-[rgba(232,104,26,0.2)] flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-primary mb-1">
                    LinkedIn
                  </h3>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    linkedin.com/in/secops-analyst
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[rgba(232,104,26,0.1)] border border-[rgba(232,104,26,0.2)] flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium uppercase tracking-[0.08em] text-text-primary mb-1">
                    Availability
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    Currently accepting new opportunities
                  </p>
                  <p className="font-body text-xs text-text-tertiary mt-1">
                    Response time: 24-48 hours (EAT)
                  </p>
                </div>
              </div>

              {/* Status note */}
              <div className="mt-8 p-4 border border-border rounded bg-[rgba(26,20,18,0.4)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-success">
                    Available for Hire
                  </span>
                </div>
                <p className="font-body text-sm text-text-secondary">
                  Open to SOC Analyst roles, security consulting engagements,
                  and freelance incident response contracts.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-medium uppercase tracking-[0.08em] text-text-tertiary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-surface border border-border rounded-sm px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(232,104,26,0.1)] focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-medium uppercase tracking-[0.08em] text-text-tertiary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-surface border border-border rounded-sm px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(232,104,26,0.1)] focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-medium uppercase tracking-[0.08em] text-text-tertiary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-surface border border-border rounded-sm px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(232,104,26,0.1)] focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-medium uppercase tracking-[0.08em] text-text-tertiary mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-surface border border-border rounded-sm px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(232,104,26,0.1)] focus:outline-none resize-none"
                    placeholder="Tell me about your project, role, or security challenge..."
                  />
                </div>

                <PrimaryButton>
                  {submitted ? "Message Sent ✓" : "Send Message"}
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
