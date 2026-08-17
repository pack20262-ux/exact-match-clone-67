import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dumbbell, Home, Trees, Building2 } from "lucide-react";
import { PhoneFrame, ProgressBar, OptionCard, PrimaryButton } from "@/components/routyfit/ui";

export const Route = createFileRoute("/quiz/local")({
  head: () => ({
    meta: [
      { title: "Onde você costuma treinar? | RoutyFit" },
      { name: "description", content: "Escolha o local dos seus treinos no quiz RoutyFit." },
      { property: "og:title", content: "Onde você costuma treinar? | RoutyFit" },
      { property: "og:description", content: "Escolha o local dos seus treinos no quiz RoutyFit." },
    ],
  }),
  component: Local,
});

const options = [
  { label: "Academia", icon: <Dumbbell className="size-5" /> },
  { label: "Em casa", icon: <Home className="size-5" /> },
  { label: "Ao ar livre", icon: <Trees className="size-5" /> },
  { label: "Academia e casa", icon: <Building2 className="size-5" /> },
];

function Local() {
  const [selected, setSelected] = useState(0);

  return (
    <PhoneFrame>
      <ProgressBar step={5} />
      <div className="flex flex-1 flex-col px-6 pt-6 pb-8">
        <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground">
          Onde você
          <br />
          costuma treinar?
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
          <PrimaryButton to="/plano" arrow>
            Próxima
          </PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
