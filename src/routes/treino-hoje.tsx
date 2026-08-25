import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftRight, BarChart3, Dumbbell, List, Plane } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { Card, MainNav, ScreenHeader } from "@/components/routyfit/shell";

export const Route = createFileRoute("/treino-hoje")({
  head: () => ({
    meta: [
      { title: "Treino de hoje — Força A · Superior | RoutyFit" },
      {
        name: "description",
        content: "6 exercícios, 45 min de treino de força superior no nível intermediário.",
      },
      { property: "og:title", content: "Treino de hoje — Força A · Superior | RoutyFit" },
      {
        property: "og:description",
        content: "6 exercícios, 45 min de treino de força superior no nível intermediário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TreinoHojeScreen,
});

function TreinoHojeScreen() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <ScreenHeader
          title="Treino de hoje"
          trailing={<Plane className="size-[20px] text-primary" strokeWidth={1.8} />}
        />

        <div className="mt-4 px-5">
          <Card className="px-4 py-4">
            <div className="text-[22px] font-bold leading-tight text-foreground">
              Força A · Superior
            </div>
            <div className="mt-1 text-[14px] text-muted-foreground">6 exercícios</div>

            <div className="mt-4 flex items-end justify-between">
              <div className="leading-tight">
                <div className="text-[14px] text-foreground/85">Duração média</div>
                <div className="mt-1 text-[17px] font-semibold text-foreground">45 min</div>
              </div>
              <div className="text-right leading-tight">
                <BarChart3 className="ml-auto size-[18px] text-primary" strokeWidth={2} />
                <div className="mt-1 text-[14px] text-muted-foreground">Intermediário</div>
              </div>
            </div>

            <Link
              to="/treino"
              className="mt-4 flex h-[48px] w-full items-center justify-center rounded-xl bg-primary text-[16px] font-bold text-primary-foreground"
            >
              Iniciar treino
            </Link>
          </Card>
        </div>

        <div className="mt-4 px-5">
          <Card>
            <Link to="/treino" className="flex items-center gap-3 border-b border-white/8 px-4 py-4">
              <List className="size-[20px] shrink-0 text-foreground/85" />
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block truncate text-[15px] font-medium text-foreground">
                  Ver exercícios
                </span>
                <span className="mt-0.5 block truncate text-[12px] text-muted-foreground">
                  Detalhes de cada exercício
                </span>
              </span>
              <Dumbbell className="size-[20px] shrink-0 text-primary" strokeWidth={2} />
            </Link>
            <button type="button" className="flex w-full items-center gap-3 px-4 py-4 text-left">
              <List className="size-[20px] shrink-0 text-foreground/85" />
              <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-foreground">
                Substituir exercício
              </span>
              <ArrowLeftRight className="size-[20px] shrink-0 text-primary" strokeWidth={2} />
            </button>
          </Card>
        </div>

        <MainNav active="Treinos" />
      </div>
    </PhoneFrame>
  );
}
