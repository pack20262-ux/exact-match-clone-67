import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dumbbell, Flame, Zap, Activity, Sparkles } from "lucide-react";
import { PhoneFrame, ProgressBar, OptionCard, PrimaryButton } from "@/components/routyfit/ui";

export const Route = createFileRoute("/quiz/objetivo")({
  head: () => ({
    meta: [
      { title: "Qual é o seu principal objetivo? | RoutyFit" },
      { name: "description", content: "Escolha seu objetivo principal de treino no quiz RoutyFit." },
      { property: "og:title", content: "Qual é o seu principal objetivo? | RoutyFit" },
      {
        property: "og:description",
        content: "Escolha seu objetivo principal de treino no quiz RoutyFit.",
      },
    ],
  }),
  component: Objetivo,
});

const options = [
  { label: "Ganhar massa muscular", icon: <Dumbbell className="size-5" /> },
  { label: "Perder gordura", icon: <Flame className="size-5" /> },
  { label: "Ficar mais forte", icon: <Zap className="size-5" /> },
  { label: "Melhorar condicionamento", icon: <Activity className="size-5" /> },
  { label: "Ter mais disposição", icon: <Sparkles className="size-5" /> },
];

function Objetivo() {
  const [selected, setSelected] = useState(0);

  return (
    <PhoneFrame>
      <ProgressBar step={1} />
      <div className="flex flex-1 flex-col px-6 pt-6 pb-8">
        <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground">
          Qual é o seu
          <br />
          principal objetivo?
        </h1>
        <div className="mt-6 space-y-3">
          {options.map((option, index) => (
            <OptionCard
              key={option.label}
              icon={option.icon}
              label={option.label}
              selected={selected === index}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
        <div className="mt-auto pt-10">
          <PrimaryButton to="/quiz/frequencia" arrow>
            Próxima
          </PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
