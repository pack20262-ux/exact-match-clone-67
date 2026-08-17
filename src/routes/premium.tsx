import { createFileRoute } from "@tanstack/react-router";
import { Crown, Lock } from "lucide-react";
import { PhoneFrame, CheckItem, PrimaryButton } from "@/components/routyfit/ui";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "RoutyFit Premium — R$ 19,90/mês" },
      {
        name: "description",
        content: "Desbloqueie planos personalizados, ajustes com IA e acompanhamento completo.",
      },
      { property: "og:title", content: "RoutyFit Premium — R$ 19,90/mês" },
      {
        property: "og:description",
        content: "Desbloqueie planos personalizados, ajustes com IA e acompanhamento completo.",
      },
    ],
  }),
  component: Premium,
});

const benefits = [
  "Planos 100% personalizados",
  "Ajustes inteligentes com IA",
  "Acompanhamento completo",
  "Vídeos dos exercícios",
  "Suporte sempre que precisar",
  "Novos treinos toda semana",
];

function Premium() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pt-8 pb-8">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-[30px] font-extrabold leading-[1.05] tracking-tight text-foreground">
            Routy<span className="text-primary">Fit</span>
            <br />
            <span className="text-primary">Premium</span>
          </h1>
          <Crown className="mt-2 size-8 shrink-0 text-primary" />
        </div>
        <p className="mt-3 text-[15px] leading-snug text-foreground/85">
          Desbloqueie tudo e transforme seu corpo com a gente.
        </p>
        <div className="mt-6 space-y-3.5">
          {benefits.map((benefit) => (
            <CheckItem key={benefit} label={benefit} />
          ))}
        </div>
        <div className="mt-7 rounded-2xl border border-primary bg-card px-5 py-5">
          <div className="text-[14px] font-medium text-foreground">Plano mensal</div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-[20px] font-bold text-primary">R$</span>
            <span className="text-[40px] font-extrabold leading-none text-primary">19,90</span>
            <span className="text-[15px] font-medium text-foreground/80">/mês</span>
          </div>
          <div className="mt-2 text-[13px] text-muted-foreground">Cancele quando quiser.</div>
        </div>
        <div className="mt-auto pt-7">
          <PrimaryButton to="/pagamento">Quero meu plano</PrimaryButton>
          <p className="mt-4 flex items-center justify-center gap-2 text-[13px] text-foreground/85">
            <Lock className="size-4 text-primary" />
            Ambiente 100% seguro
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}
