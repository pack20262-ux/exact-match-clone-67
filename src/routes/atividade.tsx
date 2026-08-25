import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Droplet, Dumbbell, Footprints, PersonStanding } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { MainNav, ScreenHeader } from "@/components/routyfit/shell";

export const Route = createFileRoute("/atividade")({
  head: () => ({
    meta: [
      { title: "Atividade — Linha do tempo do dia | RoutyFit" },
      {
        name: "description",
        content: "Veja treino, passos, refeições e hidratação hora a hora no RoutyFit.",
      },
      { property: "og:title", content: "Atividade — Linha do tempo do dia | RoutyFit" },
      {
        property: "og:description",
        content: "Veja treino, passos, refeições e hidratação hora a hora no RoutyFit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AtividadeScreen,
});

const timeline = [
  { time: "08:15", icon: Dumbbell, title: "Treino de força", detail: "320 kcal" },
  { time: "10:30", icon: Footprints, title: "8.276 passos", detail: "5,6 km" },
  { time: "12:45", icon: Coffee, title: "Almoço", detail: "620 kcal" },
  { time: "15:20", icon: Droplet, title: "600 ml de água", detail: "" },
  { time: "19:10", icon: PersonStanding, title: "Corrida", detail: "5 km · 28 min" },
];

function AtividadeScreen() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <ScreenHeader title="Atividade" back={false} />

        <div className="flex items-center gap-3 px-5 pt-4">
          <span className="text-foreground">←</span>
          <span className="text-[15px] font-medium text-foreground">Hoje, 8 de abril</span>
        </div>

        <div className="mt-4 px-5">
          {timeline.map(({ time, icon: Icon, title, detail }, i) => (
            <div key={time} className="flex gap-3">
              <div className="w-[46px] shrink-0 pt-3 text-right text-[12px] text-muted-foreground">
                {time}
              </div>
              <div className="flex flex-col items-center">
                <span className="mt-[18px] size-[7px] shrink-0 rounded-full bg-primary" />
                {i === timeline.length - 1 ? null : <span className="w-px flex-1 bg-white/10" />}
              </div>
              <div
                className={`flex min-w-0 flex-1 items-center gap-3 py-3 ${
                  i === timeline.length - 1 ? "" : "border-b border-white/8"
                }`}
              >
                <Icon className="size-[22px] shrink-0 text-primary" strokeWidth={1.8} />
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-[15px] font-semibold text-foreground">{title}</div>
                  {detail ? (
                    <div className="mt-1 truncate text-[12px] text-muted-foreground">{detail}</div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <MainNav active="Atividade" />
      </div>
    </PhoneFrame>
  );
}
