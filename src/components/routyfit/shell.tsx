import { Link, useRouter } from "@tanstack/react-router";
import {
  Activity,
  Apple,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Home,
  User,
} from "lucide-react";
import type { ReactNode } from "react";

/** Bottom navigation with the 5 main sections. */
const mainNav = [
  { label: "Início", to: "/meu-dia", icon: Home },
  { label: "Treinos", to: "/treino-hoje", icon: Dumbbell },
  { label: "Atividade", to: "/atividade", icon: Activity },
  { label: "Dieta", to: "/dieta", icon: Apple },
  { label: "Perfil", to: "/perfil", icon: User },
] as const;

export type MainNavTab = (typeof mainNav)[number]["label"];

export function MainNav({ active }: { active: MainNavTab }) {
  return (
    <nav className="mt-auto flex items-center justify-between border-t border-white/8 px-4 pb-6 pt-3">
      {mainNav.map(({ label, to, icon: Icon }) => {
        const isActive = label === active;
        return (
          <Link
            key={label}
            to={to}
            className={`flex flex-1 flex-col items-center gap-1.5 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="size-[22px]" strokeWidth={isActive ? 2.4 : 1.7} />
            <span className={`text-[11px] ${isActive ? "font-semibold" : "font-medium"}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

/** Centered screen title with a back arrow and an optional trailing action. */
export function ScreenHeader({
  title,
  trailing,
  back = true,
}: {
  title: string;
  trailing?: ReactNode;
  back?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-[32px_minmax(0,1fr)_32px] items-center gap-2 px-5 pt-6">
      {back ? (
        <button
          type="button"
          aria-label="Voltar"
          onClick={() => router.history.back()}
          className="flex size-8 items-center justify-center text-foreground"
        >
          <ChevronLeft className="size-6" strokeWidth={2} />
        </button>
      ) : (
        <span />
      )}
      <h1 className="truncate text-center text-[17px] font-semibold text-foreground">{title}</h1>
      <span className="flex size-8 items-center justify-center text-foreground">{trailing}</span>
    </div>
  );
}

/** Row with icon, title, optional subtitle and a chevron / custom trailing element. */
export function ListRow({
  icon,
  title,
  subtitle,
  trailing,
  last = false,
  onClick,
  to,
}: {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  last?: boolean;
  onClick?: () => void;
  to?: string;
}) {
  const inner = (
    <>
      {icon ? <span className="shrink-0 text-foreground/85">{icon}</span> : null}
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block truncate text-[15px] text-foreground">{title}</span>
        {subtitle ? (
          <span className="mt-0.5 block truncate text-[12px] text-muted-foreground">
            {subtitle}
          </span>
        ) : null}
      </span>
      <span className="shrink-0 text-muted-foreground">
        {trailing ?? <ChevronRight className="size-[18px]" strokeWidth={2} />}
      </span>
    </>
  );

  const className = `flex w-full items-center gap-3 px-4 py-3.5 text-left ${
    last ? "" : "border-b border-white/8"
  }`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {inner}
    </button>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/8 bg-card ${className}`}>
      {children}
    </div>
  );
}
