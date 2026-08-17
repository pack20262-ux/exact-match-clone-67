import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame, ProgressBar, OptionCard, PrimaryButton } from "@/components/routyfit/ui";

export const Route = createFileRoute("/quiz/frequencia")({
  head: () => ({
    meta: [
      { title: "Quantos dias você pode treinar? | RoutyFit" },
      { name: "description", content: "Defina a frequência semanal de treinos no quiz RoutyFit." },
      { property: "og:title", content: "Quantos dias você pode treinar? | RoutyFit" },
      {
        property: "og:description",
        content: "Defina a frequência semanal de treinos no quiz RoutyFit.",
      },
    ],
  }),
  component: Frequencia,
});

const options = [
  "2 dias por semana",
  "3 dias por semana",
  "4 dias por semana",
  "5 dias por semana",
  "6+ dias por semana",
];

function Frequencia() {
  const [selected, setSelected] = useState(2);

  return (
    <PhoneFrame>
      <ProgressBar step={3} />
      <div className="flex flex-1 flex-col px-6 pt-6 pb-8">
        <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground">
          Quantos dias você
          <br />
          pode treinar?
        </h1>
        <div className="mt-6 space-y-3">
          {options.map((label, index) => (
            <OptionCard
              key={label}
              label={label}
              selected={selected === index}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
        <div className="mt-auto pt-10">
          <PrimaryButton to="/quiz/local" arrow>
            Próxima
          </PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
