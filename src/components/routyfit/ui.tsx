import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[13px] font-semibold text-foreground">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" aria-hidden="true">
          <path d="M7.5 10.5 5.6 8.5a2.7 2.7 0 0 1 3.8 0L7.5 10.5Zm4-4.2-1.3 1.4a5.6 5.6 0 0 0-5.4 0L3.5 6.3a7.5 7.5 0 0 1 8 0Zm2.3-2.4-1.3 1.4a9 9 0 0 0-10 0L1.2 3.9a10.9 10.9 0 0 1 12.6 0Z" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" aria-hidden="true">
          <rect
            x="0.5"
            y="0.5"
            width="21"
            height="11"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.5"
          />
          <rect x="2" y="2" width="18" height="8" rx="1.8" fill="currentColor" />
          <path d="M23 4v4a2 2 0 0 0 0-4Z" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen justify-center bg-black">
      <div
        className={`relative flex min-h-screen w-full max-w-[420px] flex-col overflow-hidden bg-background ${className}`}
      >
        <StatusBar />
        {children}
      </div>
    </div>
  );
}

export function ProgressBar({ step, total = 7 }: { step: number; total?: number }) {
  return (
    <div className="flex items-center gap-3 px-6 pt-6">
      <div className="h-[6px] flex-1 rounded-full bg-track">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
      <span className="text-[13px] font-medium text-muted-foreground">
        {step} / {total}
      </span>
    </div>
  );
}

export function OptionCard({
  icon,
  label,
  selected = false,
  onClick,
}: {
  icon?: ReactNode;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left text-[15px] transition-colors ${
        selected
          ? "border-primary bg-card text-foreground"
          : "border-transparent bg-card text-foreground/90"
      }`}
    >
      {icon ? <span className="shrink-0 text-foreground/80">{icon}</span> : null}
      <span className="flex-1 font-medium">{label}</span>
      {selected ? (
        <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-primary">
          <Check className="size-[14px] stroke-[3] text-primary-foreground" />
        </span>
      ) : null}
    </button>
  );
}

export function PrimaryButton({
  children,
  to,
  arrow = false,
}: {
  children: ReactNode;
  to: string;
  arrow?: boolean;
}) {
  return (
    <Link
      to={to}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-[17px] font-bold text-primary-foreground transition-opacity hover:opacity-90"
    >
      {children}
      {arrow ? <ArrowRight className="size-5 stroke-[2.5]" /> : null}
    </Link>
  );
}

export function FeatureItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-primary">{icon}</span>
      <span className="text-[14px] leading-snug text-foreground/90">{label}</span>
    </div>
  );
}

export function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-primary">
        <Check className="size-[12px] stroke-[3.5] text-primary-foreground" />
      </span>
      <span className="text-[14px] text-foreground/90">{label}</span>
    </div>
  );
}

export function SummaryRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 ${last ? "" : "border-b border-white/10"}`}
    >
      <span className="shrink-0 text-primary">{icon}</span>
      <div className="leading-tight">
        <div className="text-[11px] text-muted-foreground">{label}</div>
        <div className="text-[13px] font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
