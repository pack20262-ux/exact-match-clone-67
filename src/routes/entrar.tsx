import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PAYWALL_ENABLED, readIsSubscribed } from "@/lib/subscription";
import { Eye } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { SocialButton, TextField } from "@/components/routyfit/app";

export const Route = createFileRoute("/entrar")({
  head: () => ({
    meta: [
      { title: "Entrar na sua conta — RoutyFit" },
      { name: "description", content: "Acesse sua conta RoutyFit e continue seus treinos." },
      { property: "og:title", content: "Entrar na sua conta — RoutyFit" },
      { property: "og:description", content: "Acesse sua conta RoutyFit e continue seus treinos." },
    ],
  }),
  component: Entrar,
});

function Entrar() {
  const navigate = useNavigate();

  // Subscribed users land on the dashboard; everyone else goes to the offer.
  const handleSignIn = () => {
    navigate({ to: PAYWALL_ENABLED && !readIsSubscribed() ? "/premium" : "/home", replace: true });
  };

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pt-8 pb-8">
        <h1 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-foreground">
          Entrar na sua
          <br />
          conta
        </h1>

        <div className="mt-7 space-y-4">
          <TextField label="E-mail" placeholder="Digite seu e-mail" type="email" />
          <TextField
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            trailing={<Eye className="size-5" />}
          />
        </div>

        <button type="button" className="mt-3 self-end text-[13px] font-medium text-primary">
          Esqueceu sua senha?
        </button>

        <button
          type="button"
          onClick={handleSignIn}
          className="mt-6 flex h-[54px] w-full items-center justify-center rounded-xl bg-primary text-[17px] font-bold text-primary-foreground"
        >
          Entrar
        </button>

        <p className="mt-5 text-center text-[13px] text-muted-foreground">ou entre com</p>

        <div className="mt-4 flex gap-3">
          <SocialButton brand="google" />
          <SocialButton brand="apple" />
        </div>

        <p className="mt-auto pt-8 text-center text-[13px] text-muted-foreground">
          Ainda não tem conta?{" "}
          <Link to="/criar-conta" className="font-semibold text-primary">
            Criar conta
          </Link>
        </p>
      </div>
    </PhoneFrame>
  );
}
