"use client";

import { StatusBadge } from "./StatusBadge";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  status: "Active" | "Completed" | "In Progress";
  credentialId?: string;
  link?: string;
}

export function CertificationCard({
  title,
  issuer,
  date,
  status,
  credentialId,
  link,
}: CertificationCardProps) {
  return (
    <div className="flex border border-border rounded-r bg-surface transition-all duration-300 ease-out hover:border-border-light overflow-hidden">
      <div className="w-[3px] bg-primary flex-shrink-0" />
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="mb-2">
              <StatusBadge status={status} />
            </div>
            <h3 className="font-body text-lg font-medium text-text-primary">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
          </div>
        </div>
        <p className="font-body text-sm text-text-secondary">{issuer}</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="font-mono text-xs text-text-tertiary">{date}</span>
          {credentialId && (
            <span className="font-mono text-[11px] text-text-tertiary">
              ID: {credentialId}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
