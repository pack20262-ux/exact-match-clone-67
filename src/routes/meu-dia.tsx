import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Dumbbell, Footprints, GlassWater, LayoutGrid, Moon, Check } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { Card, MainNav } from "@/components/routyfit/shell";
import { readQuizName } from "@/lib/quiz";

export const Route = createFileRoute("/meu-dia")({
  head: () => ({
    meta: [
      { title: "Meu dia — Resumo diário | RoutyFit" },
      {
        name: "description",
        content: "Acompanhe treino, passos, água e sono do seu dia no RoutyFit.",
      },
      { property: "og:title", content: "Meu dia — Resumo diário | RoutyFit" },
      {
        property: "og:description",
        content: "Acompanhe treino, passos, água e sono do seu dia no RoutyFit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MeuDiaScreen,
});

const metrics = [
  { icon: Dumbbell, title: "Treino", caption: "Concluído", value: "3 / 6", percent: "50%" },
  { icon: Footprints, title: "Passos", caption: "5.468 / 10.000", value: "5 / 6", percent: "54%" },
  { icon: GlassWater, title: "Água", caption: "Concluído", value: "1,5 / 2l", percent: "75%" },
  { icon: Moon, title: "Sono", caption: "Concluído", value: "6 / 8h", percent: "75%" },
];

function MeuDiaScreen() {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => setName(readQuizName()), []);

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="pt-6 text-center text-[15px] font-semibold text-foreground">
          RoutyFit<span className="text-primary">.</span>
        </div>

        <h1 className="px-5 pt-4 text-[20px] font-bold text-foreground">
          Olá, {name ?? "Lucas"}
        </h1>

        <div className="mt-3 px-5">
          <Card>
            <div className="flex items-center gap-3 px-4 py-3.5">
              <LayoutGrid className="size-[18px] shrink-0 text-foreground/85" />
              <span className="flex-1 text-[15px] font-medium text-foreground">Meu dia</span>
              <Link
                to="/atividade"
                className="rounded-lg bg-white/8 px-3 py-1.5 text-[12px] font-medium text-foreground"
              >
                Ver mais
              </Link>
            </div>

            {metrics.map(({ icon: Icon, title, caption, value, percent }, i) => (
              <div
                key={title}
                className={`flex items-center gap-3 px-4 py-3 ${
                  i === metrics.length - 1 ? "" : "border-b border-white/8"
                }`}
              >
                <Icon className="size-[20px] shrink-0 text-primary" strokeWidth={1.8} />
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="truncate text-[14px] font-semibold text-foreground">{title}</div>
                  <div className="mt-0.5 truncate text-[11px] text-muted-foreground">{caption}</div>
                </div>
                <div className="shrink-0 text-right leading-tight">
                  <div className="text-[13px] font-semibold text-foreground">{value}</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{percent}</div>
                </div>
                <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="size-[13px] stroke-[3] text-primary-foreground" />
                </span>
              </div>
            ))}
          </Card>
        </div>

        <MainNav active="Início" />
      </div>
    </PhoneFrame>
  );
}
