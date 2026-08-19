import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { BottomNav, Tabs, WorkoutCard } from "@/components/routyfit/app";
import workoutUpper from "@/assets/workout-upper.jpg";
import thumbLower from "@/assets/thumb-lower.jpg";
import thumbRest from "@/assets/thumb-rest.jpg";
import thumbFull from "@/assets/thumb-full.jpg";

export const Route = createFileRoute("/treinos")({
  head: () => ({
    meta: [
      { title: "Treinos — Plano semanal | RoutyFit" },
      { name: "description", content: "Seu plano semanal de treinos com Upper, Lower e Full Body." },
      { property: "og:title", content: "Treinos — Plano semanal | RoutyFit" },
      {
        property: "og:description",
        content: "Seu plano semanal de treinos com Upper, Lower e Full Body.",
      },
    ],
  }),
  component: Treinos,
});

const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

function Treinos() {
  const [tab, setTab] = useState("Plano");
  const [day, setDay] = useState("Qua");

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="px-5 pt-6">
          <Tabs items={["Plano", "Biblioteca", "Favoritos"]} active={tab} onChange={setTab} />
        </div>

        <div className="mt-4 flex justify-between gap-1.5 px-5">
          {days.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              className={`flex-1 rounded-lg py-2 text-[12px] font-semibold ${
                d === day
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/10 bg-card text-foreground/80"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <h2 className="mt-5 px-5 text-[15px] font-bold text-foreground">Esta semana</h2>

        <div className="mt-3 space-y-3 px-5">
          <WorkoutCard
            image={workoutUpper}
            title="Upper Body"
            subtitle="Hipertrofia • 50 min"
            done
            to="/treino"
          />
          <WorkoutCard image={thumbLower} title="Lower Body" subtitle="Amanhã • 50 min" />
          <WorkoutCard image={thumbRest} title="Descanso ativo" subtitle="Sex • 30 min" />
          <WorkoutCard image={thumbFull} title="Full Body" subtitle="Sáb • 55 min" />
        </div>

        <div className="mt-5 px-5">
          <button
            type="button"
            className="flex h-[50px] w-full items-center justify-center rounded-xl border border-white/12 bg-card text-[15px] font-semibold text-foreground"
          >
            Ver calendário
          </button>
        </div>

        <BottomNav active="Treinos" />
      </div>
    </PhoneFrame>
  );
}
