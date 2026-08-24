import { RequireSubscription } from "@/components/routyfit/require-subscription";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Bookmark, ChevronRight, Maximize2, Play } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { BottomNav, Tabs } from "@/components/routyfit/app";
import benchPress from "@/assets/bench-press.jpg";

export const Route = createFileRoute("/exercicio")({
  head: () => ({
    meta: [
      { title: "Supino reto com barra — Execução | RoutyFit" },
      { name: "description", content: "Vídeo e instruções de execução do supino reto com barra." },
      { property: "og:title", content: "Supino reto com barra — Execução | RoutyFit" },
      {
        property: "og:description",
        content: "Vídeo e instruções de execução do supino reto com barra.",
      },
    ],
  }),
  component: GuardedExercicio,
});

const steps = [
  "Deite-se no banco com os pés firmes no chão.",
  "Segure a barra com as mãos um pouco mais largas que os ombros.",
  "Desça a barra até encostar levemente no peito.",
  "Empurre a barra para cima até estender totalmente os braços.",
];

function Exercicio() {
  const [tab, setTab] = useState("Instruções");

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between px-5 pt-6">
          <Link to="/treino" className="text-foreground">
            <ArrowLeft className="size-6" />
          </Link>
          <Bookmark className="size-6 text-primary" />
        </div>

        <h1 className="mt-4 px-5 text-center text-[17px] font-bold text-foreground">
          Supino reto com barra
        </h1>

        <div className="mt-4 px-5">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={benchPress}
              alt="Execução do supino reto com barra"
              width={1024}
              height={768}
              className="h-[210px] w-full object-cover"
            />
            <span className="absolute left-1/2 top-1/2 flex size-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary">
              <Play className="size-6 fill-current text-primary-foreground" />
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[12px] text-muted-foreground">00:00 / 00:30</span>
            <Maximize2 className="size-4 text-muted-foreground" />
          </div>
          <div className="mt-2 h-[3px] w-full rounded-full bg-track">
            <div className="h-full w-0 rounded-full bg-primary" />
          </div>
        </div>

        <div className="mt-4 px-5">
          <Tabs items={["Instruções", "Músculos"]} active={tab} onChange={setTab} />
        </div>

        <ul className="mt-4 space-y-3 px-5">
          {steps.map((step) => (
            <li key={step} className="flex gap-2.5 text-[13px] leading-snug text-foreground/85">
              <span className="mt-1.5 size-[5px] shrink-0 rounded-full bg-primary" />
              {step}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-3 px-5">
          <button
            type="button"
            className="flex h-[46px] flex-1 items-center justify-between rounded-xl border border-white/10 bg-card px-4 text-[13px] font-medium text-foreground"
          >
            4 séries
            <ChevronRight className="size-4 text-muted-foreground" />
          </button>
          <button
            type="button"
            className="flex h-[46px] flex-1 items-center justify-between rounded-xl border border-white/10 bg-card px-4 text-[13px] font-medium text-foreground"
          >
            8 - 12 reps
            <ChevronRight className="size-4 text-muted-foreground" />
          </button>
        </div>

        <div className="mt-4 px-5">
          <Link
            to="/progresso"
            className="flex h-[52px] w-full items-center justify-center rounded-xl bg-primary text-[16px] font-bold text-primary-foreground"
          >
            Iniciar treino
          </Link>
        </div>

        <BottomNav active="Treinos" />
      </div>
    </PhoneFrame>
  );
}

function GuardedExercicio() {
  return (
    <RequireSubscription>
      <Exercicio />
    </RequireSubscription>
  );
}
