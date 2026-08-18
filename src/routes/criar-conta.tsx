import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Eye } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { SocialButton, TextField } from "@/components/routyfit/app";

export const Route = createFileRoute("/criar-conta")({
  head: () => ({
    meta: [
      { title: "Criar conta — RoutyFit" },
      { name: "description", content: "Crie sua conta RoutyFit em segundos. É rápido e fácil." },
      { property: "og:title", content: "Criar conta — RoutyFit" },
      { property: "og:description", content: "Crie sua conta RoutyFit em segundos." },
    ],
  }),
  component: CriarConta,
});

function CriarConta() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pt-8 pb-8">
        <h1 className="text-[28px] font-extrabold leading-none tracking-tight text-foreground">
          Criar conta
        </h1>
        <p className="mt-2 text-[14px] text-muted-foreground">É rápido e fácil.</p>

        <div className="mt-6 space-y-4">
          <TextField label="Nome completo" placeholder="Digite seu nome" />
          <TextField label="E-mail" placeholder="Digite seu e-mail" type="email" />
          <TextField
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            trailing={<Eye className="size-5" />}
          />
        </div>

        <div className="mt-5 flex items-start gap-3">
          <span className="mt-0.5 flex size-[20px] shrink-0 items-center justify-center rounded-md bg-primary">
            <Check className="size-[13px] stroke-[3.5] text-primary-foreground" />
          </span>
          <span className="text-[13px] leading-snug text-foreground/85">
            Quero receber dicas e novidades por e-mail
          </span>
        </div>

        <Link
          to="/onboarding"
          className="mt-6 flex h-[54px] w-full items-center justify-center rounded-xl bg-primary text-[17px] font-bold text-primary-foreground"
        >
          Criar conta
        </Link>

        <p className="mt-5 text-center text-[13px] text-muted-foreground">ou cadastre-se com</p>

        <div className="mt-4 flex gap-3">
          <SocialButton brand="google" />
          <SocialButton brand="apple" />
        </div>

        <p className="mt-auto pt-8 text-center text-[13px] text-muted-foreground">
          Já tem uma conta?{" "}
          <Link to="/entrar" className="font-semibold text-primary">
            Entrar
          </Link>
        </p>
      </div>
    </PhoneFrame>
  );
}
