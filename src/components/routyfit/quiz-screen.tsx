import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PhoneFrame, ProgressBar, OptionCard, PrimaryButton } from "@/components/routyfit/ui";
import { readQuizAnswers, saveQuizAnswer, type QuizStep } from "@/lib/quiz";

export function QuizScreen({ config }: { config: QuizStep }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSelected(readQuizAnswers()[config.slug] ?? null);
  }, [config.slug]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function choose(value: string) {
    setSelected(value);
    saveQuizAnswer(config.slug, value);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => navigate({ to: config.next }), 280);
  }

  return (
    <PhoneFrame>
      <ProgressBar step={config.step} />
      <div className="flex flex-1 flex-col px-6 pt-6 pb-8">
        {config.prev ? (
          <Link
            to={config.prev}
            aria-label="Voltar"
            className="mb-4 flex size-9 items-center justify-center rounded-full bg-card text-foreground/80"
          >
            <ArrowLeft className="size-5" />
          </Link>
        ) : null}
        <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground">
          {config.titleLines.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i < config.titleLines.length - 1 ? null : null}
            </span>
          ))}
        </h1>
        <div className="mt-6 space-y-3">
          {config.options.map((option) => (
            <OptionCard
              key={option.value}
              label={option.label}
              selected={selected === option.value}
              onClick={() => choose(option.value)}
            />
          ))}
        </div>
        <div className="mt-auto pt-10">
          <PrimaryButton to={config.next} arrow>
            {config.step === 7 ? "Ver resultado" : "Próxima"}
          </PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
