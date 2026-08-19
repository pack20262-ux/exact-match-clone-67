import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { BottomNav, Tabs, WorkoutCard } from "@/components/routyfit/app";
import thumbPress from "@/assets/thumb-press.jpg";
import thumbRow from "@/assets/thumb-row.jpg";
import thumbPulldown from "@/assets/thumb-pulldown.jpg";
import thumbCurl from "@/assets/thumb-curl.jpg";
import benchPress from "@/assets/bench-press.jpg";

export const Route = createFileRoute("/treino")({
  head: () => ({
    meta: [
      { title: "Upper Body — Hipertrofia 50 min | RoutyFit" },
      { name: "description", content: "Lista de exercícios do treino Upper Body de hipertrofia." },
      { property: "og:title", content: "Upper Body — Hipertrofia 50 min | RoutyFit" },
      {
        property: "og:description",
        content: "Lista de exercícios do treino Upper Body de hipertrofia.",
      },
    ],
  }),
  component: TreinoDetalhes,
});

function TreinoDetalhes() {
  const [tab, setTab] = useState("Exercícios");

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="px-5 pt-6">
          <Link to="/treinos" className="inline-flex text-foreground">
            <ChevronLeft className="size-6" />
          </Link>
          <h1 className="mt-2 text-[26px] font-extrabold leading-none tracking-tight text-foreground">
            Upper Body
          </h1>
          <p className="mt-2 text-[13px] text-muted-foreground">Hipertrofia • 50 min</p>
        </div>

        <div className="mt-4 px-5">
          <Tabs items={["Exercícios", "Resumo"]} active={tab} onChange={setTab} />
        </div>

        <div className="mt-4 space-y-3 px-5">
          <WorkoutCard
            image={benchPress}
            title="Supino reto com barra"
            subtitle="4 séries • 8-12 repetições"
            done
            to="/exercicio"
          />
          <WorkoutCard
            image={thumbRow}
            title="Remada curvada"
            subtitle="4 séries • 8-12 repetições"
          />
          <WorkoutCard
            image={thumbPress}
            title="Desenvolvimento com halteres"
            subtitle="3 séries • 10-12 repetições"
          />
          <WorkoutCard
            image={thumbPulldown}
            title="Puxada na frente"
            subtitle="3 séries • 10-12 repetições"
          />
          <WorkoutCard
            image={thumbCurl}
            title="Rosca direta"
            subtitle="3 séries • 12-15 repetições"
          />
        </div>

        <div className="mt-5 px-5">
          <Link
            to="/exercicio"
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
