import { Link } from "@tanstack/react-router";
import { BarChart3, Dumbbell, Home, CalendarDays, User } from "lucide-react";
import type { ReactNode } from "react";

export function TextField({
  label,
  placeholder,
  type = "text",
  trailing,
}: {
  label: string;
  placeholder: string;
  type?: string;
  trailing?: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[13px] text-foreground/75">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="h-[52px] w-full rounded-xl border border-white/10 bg-card px-4 pr-11 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        {trailing ? (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            {trailing}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function SocialButton({ brand }: { brand: "google" | "apple" }) {
  return (
    <button
      type="button"
      className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-card text-[15px] font-medium text-foreground"
    >
      {brand === "google" ? (
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
          />
          <path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.8l4-3.1Z" />
          <path
            fill="#EA4335"
            d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M16.4 12.7c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.1-.8-1.6 0-3 .9-3.8 2.4-1.7 2.9-.4 7.1 1.2 9.4.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8 1.4 0 1.8.8 3.1.7 1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.7-3.6ZM14 4.9c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1 0 2.2-.6 2.9-1.4Z" />
        </svg>
      )}
      {brand === "google" ? "Google" : "Apple"}
    </button>
  );
}

export function Chip({
  label,
  selected = false,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-2.5 text-[14px] font-medium transition-colors ${
        selected
          ? "border-primary bg-primary/10 text-primary"
          : "border-white/10 bg-card text-foreground/85"
      }`}
    >
      {label}
    </button>
  );
}

export function Tabs({
  items,
  active,
  onChange,
}: {
  items: string[];
  active: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="flex rounded-xl bg-card p-1">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange?.(item)}
          className={`flex-1 rounded-lg py-2.5 text-[14px] font-semibold transition-colors ${
            item === active ? "bg-primary/15 text-primary" : "text-muted-foreground"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function StatCard({
  label,
  value,
  suffix,
  caption,
}: {
  label?: string;
  value: string;
  suffix?: string;
  caption?: string;
}) {
  return (
    <div className="flex-1 rounded-2xl border border-white/8 bg-card px-3 py-3 text-center">
      {label ? <div className="text-[11px] text-muted-foreground">{label}</div> : null}
      <div className="mt-1 text-[22px] font-extrabold leading-none text-foreground">
        {value}
        {suffix ? <span className="text-[12px] font-semibold"> {suffix}</span> : null}
      </div>
      {caption ? <div className="mt-1 text-[11px] text-muted-foreground">{caption}</div> : null}
    </div>
  );
}

const navItems = [
  { label: "Início", to: "/home", icon: Home },
  { label: "Treinos", to: "/treinos", icon: Dumbbell },
  { label: "Rotina", to: "/treino", icon: CalendarDays },
  { label: "Progresso", to: "/progresso", icon: BarChart3 },
  { label: "Perfil", to: "/onboarding", icon: User },
] as const;

export function BottomNav({ active }: { active: string }) {
  return (
    <nav className="mt-auto flex items-center justify-between border-t border-white/10 px-5 pb-5 pt-3">
      {navItems.map(({ label, to, icon: Icon }) => {
        const isActive = label === active;
        return (
          <Link
            key={label}
            to={to}
            className={`flex flex-1 flex-col items-center gap-1 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="size-[20px]" strokeWidth={isActive ? 2.5 : 1.8} />
            <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function WorkoutCard({
  image,
  title,
  subtitle,
  done = false,
  to,
}: {
  image: string;
  title: string;
  subtitle: string;
  done?: boolean;
  to?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-card p-2.5">
      <img
        src={image}
        alt=""
        loading="lazy"
        width={512}
        height={512}
        className="size-[52px] shrink-0 rounded-xl object-cover"
      />
      <div className="flex-1 leading-tight">
        <div className="text-[14px] font-semibold text-foreground">{title}</div>
        <div className="mt-0.5 text-[11px] text-muted-foreground">{subtitle}</div>
      </div>
      {done ? (
        <span className="flex size-[22px] items-center justify-center rounded-full bg-primary">
          <svg viewBox="0 0 24 24" className="size-3.5 text-primary-foreground" aria-hidden="true">
            <path
              d="m5 13 4 4 10-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        <span className="flex size-[22px] items-center justify-center rounded-full border border-white/25 text-white/40">
          <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
            <path
              d="m5 13 4 4 10-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );
  return to ? (
    <Link to={to} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
