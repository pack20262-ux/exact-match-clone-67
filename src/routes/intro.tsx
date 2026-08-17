import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, CloudSun, CalendarDays, Target } from "lucide-react";
import { PhoneFrame, FeatureItem, PrimaryButton } from "@/components/routyfit/ui";

export const Route = createFileRoute("/intro")({
  head: () => ({
    meta: [
      { title: "Vamos encontrar o treino ideal para você | RoutyFit" },
      {
        name: "description",
        content: "Responda algumas perguntas rápidas e monte um plano perfeito para seus objetivos.",
      },
      { property: "og:title", content: "Vamos encontrar o treino ideal para você | RoutyFit" },
      {
        property: "og:description",
        content: "Responda algumas perguntas rápidas e monte um plano perfeito para seus objetivos.",
      },
    ],
  }),
  component: Intro,
});

function Intro() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pt-8 pb-8">
        <h1 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-foreground">
          Vamos encontrar
          <br />
          <span className="text-primary">o treino ideal</span>
          <br />
          para você.
        </h1>
        <p className="mt-4 text-[15px] leading-snug text-foreground/85">
          Responda algumas perguntas rápidas e nós montaremos um plano perfeito para seus
          objetivos.
        </p>
        <div className="mt-8 space-y-5">
          <FeatureItem icon={<Dumbbell className="size-5" />} label="Planos 100% personalizados" />
          <FeatureItem icon={<CloudSun className="size-5" />} label="Acompanhamento completo" />
          <FeatureItem
            icon={<CalendarDays className="size-5" />}
            label="Treinos que cabem na sua rotina"
          />
          <FeatureItem icon={<Target className="size-5" />} label="Resultados de verdade" />
        </div>
        <div className="mt-auto pt-10">
          <PrimaryButton to="/quiz/objetivo">Começar quiz</PrimaryButton>
          <p className="mt-4 text-center text-[13px] text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/pagamento" className="font-semibold text-primary">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}
