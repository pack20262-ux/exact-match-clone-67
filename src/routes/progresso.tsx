import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Share2 } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { BottomNav, StatCard } from "@/components/routyfit/app";

export const Route = createFileRoute("/progresso")({
  head: () => ({
    meta: [
      { title: "Progresso — Sua evolução semanal | RoutyFit" },
      { name: "description", content: "Treinos concluídos, volume total, calorias e frequência." },
      { property: "og:title", content: "Progresso — Sua evolução semanal | RoutyFit" },
      {
        property: "og:description",
        content: "Treinos concluídos, volume total, calorias e frequência.",
      },
    ],
  }),
  component: Progresso,
});

const bars = [
  { day: "Seg", h: 34 },
  { day: "Ter", h: 22 },
  { day: "Qua", h: 46 },
  { day: "Qui", h: 30 },
  { day: "Sex", h: 40 },
  { day: "Sáb", h: 52 },
  { day: "Dom", h: 74 },
];

function Progresso() {
  const [period, setPeriod] = useState("Semana");

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between px-5 pt-6">
          <h1 className="text-[24px] font-extrabold leading-none tracking-tight text-foreground">
            Progresso
          </h1>
          <Share2 className="size-5 text-foreground" />
        </div>

        <div className="mt-4 flex gap-2 px-5">
          {["Semana", "Mês", "Geral"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setPeriod(item)}
              className={`flex-1 rounded-lg py-2 text-[12px] font-semibold ${
                item === period
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/10 bg-card text-foreground/80"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-5 px-5">
          <div className="text-[12px] text-muted-foreground">Treinos concluídos</div>
          <div className="mt-1 text-[32px] font-extrabold leading-none text-foreground">12</div>
          <div className="mt-1 text-[11px] text-primary">+20% vs semana passada</div>
        </div>

        <div className="mt-5 flex items-end justify-between gap-2 px-5">
          {bars.map(({ day, h }, i) => (
            <div key={day} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-full rounded-t-[4px] ${i === bars.length - 1 ? "bg-primary" : "bg-track"}`}
                style={{ height: `${h}px` }}
              />
              <span className="text-[10px] text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 px-5">
          <StatCard label="Volume total" value="24.580" suffix="kg" />
          <StatCard label="Calorias" value="3.250" suffix="kcal" />
          <StatCard label="Frequência" value="4" suffix="dias/semana" />
          <StatCard label="Taxa de conclusão" value="92%" />
        </div>

        <BottomNav active="Progresso" />
      </div>
    </PhoneFrame>
  );
}
