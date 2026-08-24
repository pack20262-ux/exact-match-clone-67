import { createFileRoute } from "@tanstack/react-router";
import { Check, Dumbbell, TrendingUp, CalendarDays, Timer, Crosshair } from "lucide-react";
import { PhoneFrame, PrimaryButton, SummaryRow } from "@/components/routyfit/ui";

export const Route = createFileRoute("/plano")({
  head: () => ({
    meta: [
      { title: "Seu plano personalizado está pronto | RoutyFit" },
      {
        name: "description",
        content: "Com base nas suas respostas, montamos o plano de treino ideal para você.",
      },
      { property: "og:title", content: "Seu plano personalizado está pronto | RoutyFit" },
      {
        property: "og:description",
        content: "Com base nas suas respostas, montamos o plano de treino ideal para você.",
      },
    ],
  }),
  component: Plano,
});

function Plano() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pt-8 pb-8 text-center">
        <div className="relative mx-auto">
          <div className="flex size-[54px] items-center justify-center rounded-full border-[3px] border-primary">
            <Check className="size-7 stroke-[3] text-primary" />
          </div>
          <span className="absolute -left-4 -top-1 h-[10px] w-[2px] rotate-[-35deg] bg-primary" />
          <span className="absolute -top-4 left-2 h-[10px] w-[2px] rotate-[-15deg] bg-primary" />
          <span className="absolute -top-4 right-2 h-[10px] w-[2px] rotate-[15deg] bg-primary" />
          <span className="absolute -right-4 -top-1 h-[10px] w-[2px] rotate-[35deg] bg-primary" />
        </div>
        <h1 className="mt-5 text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground">
          Seu plano
          <br />
          personalizado
          <br />
          está <span className="text-primary">pronto!</span>
        </h1>
        <p className="mt-3 text-[14px] leading-snug text-foreground/85">
          Com base nas suas respostas, montamos o plano ideal para você.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl bg-card text-left">
          <SummaryRow
            icon={<Dumbbell className="size-[18px]" />}
            label="Objetivo"
            value="Ganhar massa muscular"
          />
          <SummaryRow
            icon={<TrendingUp className="size-[18px]" />}
            label="Nível"
            value="Intermediário"
          />
          <SummaryRow
            icon={<CalendarDays className="size-[18px]" />}
            label="Dias de treino"
            value="4 dias por semana"
          />
          <SummaryRow
            icon={<Timer className="size-[18px]" />}
            label="Duração média"
            value="60 minutos"
          />
          <SummaryRow
            icon={<Crosshair className="size-[18px]" />}
            label="Foco"
            value="Força e hipertrofia"
            last
          />
        </div>
        <div className="mt-auto pt-8">
          {/* Paywall temporarily bypassed: goes straight to the app. */}
          <PrimaryButton to={PAYWALL_ENABLED ? "/premium" : "/home"}>Ver meu plano</PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
