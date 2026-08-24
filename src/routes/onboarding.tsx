import { RequireSubscription } from "@/components/routyfit/require-subscription";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { Chip } from "@/components/routyfit/app";
import { genderOptions, readGender, saveGender, type Gender } from "@/lib/gender";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Quase lá! — Personalize seu treino | RoutyFit" },
      { name: "description", content: "Escolha seu nível e seu foco para personalizar o plano." },
      { property: "og:title", content: "Quase lá! — Personalize seu treino | RoutyFit" },
      {
        property: "og:description",
        content: "Escolha seu nível e seu foco para personalizar o plano.",
      },
    ],
  }),
  component: GuardedOnboarding,
});

const levels = ["Iniciante", "Intermediário", "Avançado"];
const focus = ["Força", "Hipertrofia", "Definição", "Performance", "Saúde"];

function Onboarding() {
  const [level, setLevel] = useState("Iniciante");
  const [foco, setFoco] = useState("Força");
  const [gender, setGender] = useState<Gender | null>(null);

  useEffect(() => {
    setGender(readGender());
  }, []);

  function selectGender(value: Gender) {
    const next = gender === value ? null : value;
    setGender(next);
    saveGender(next);
  }

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pt-8 pb-8">
        <h1 className="text-[28px] font-extrabold leading-none tracking-tight text-foreground">
          Quase lá! <span className="align-middle">👋</span>
        </h1>
        <p className="mt-2 text-[14px] leading-snug text-muted-foreground">
          Personalize ainda mais sua
          <br />
          experiência.
        </p>

        <h2 className="mt-6 text-[15px] font-semibold text-foreground">Qual é o seu nível atual?</h2>
        <div className="mt-3 space-y-3">
          {levels.map((item) => {
            const selected = item === level;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`flex h-[48px] w-full items-center justify-between rounded-xl border px-4 text-[14px] font-medium ${
                  selected
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-white/10 bg-card text-foreground/85"
                }`}
              >
                {item}
                {selected ? (
                  <span className="flex size-[20px] items-center justify-center rounded-full bg-primary">
                    <Check className="size-[13px] stroke-[3.5] text-primary-foreground" />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <h2 className="mt-6 text-[15px] font-semibold text-foreground">Qual seu foco principal?</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {focus.map((item) => (
            <Chip
              key={item}
              label={item}
              selected={item === foco}
              onClick={() => setFoco(item)}
            />
          ))}
        </div>

        <h2 className="mt-6 text-[15px] font-semibold text-foreground">
          Como você se identifica?{" "}
          <span className="text-[12px] font-normal text-muted-foreground">(opcional)</span>
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {genderOptions.map((item) => (
            <Chip
              key={item.value}
              label={item.label}
              selected={item.value === gender}
              onClick={() => selectGender(item.value)}
            />
          ))}
        </div>

        <Link
          to="/home"
          className="mt-8 flex h-[54px] w-full items-center justify-center rounded-xl bg-primary text-[17px] font-bold text-primary-foreground"
        >
          Continuar
        </Link>

        <div className="mt-6 flex items-center justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`size-[7px] rounded-full ${i === 0 ? "bg-primary" : "bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function GuardedOnboarding() {
  return (
    <RequireSubscription>
      <Onboarding />
    </RequireSubscription>
  );
}
