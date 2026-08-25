import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PhoneFrame, ProgressBar, OptionCard, PrimaryButton } from "@/components/routyfit/ui";
import { readQuizAnswers, saveQuizAnswer, quizTotalSteps, type QuizStep } from "@/lib/quiz";

export function QuizScreen({ config }: { config: QuizStep }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInput = config.kind === "input";

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

  function changeInput(value: string) {
    setSelected(value);
    saveQuizAnswer(config.slug, value);
  }

  return (
    <PhoneFrame>
      <ProgressBar step={config.step} total={quizTotalSteps} />
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
          {config.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        {isInput ? (
          <div className="mt-6">
            <div className="relative">
              <input
                type={config.input?.type ?? "text"}
                inputMode={config.input?.type === "number" ? "numeric" : "text"}
                min={config.input?.min}
                max={config.input?.max}
                value={selected ?? ""}
                onChange={(e) => changeInput(e.target.value)}
                placeholder={config.input?.placeholder}
                aria-label={config.title}
                className="h-[56px] w-full rounded-2xl border border-white/10 bg-card px-4 pr-16 text-[17px] font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              {config.input?.suffix ? (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[15px] text-muted-foreground">
                  {config.input.suffix}
                </span>
              ) : null}
            </div>
          </div>
        ) : (
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
        )}
        <div className="mt-auto pt-10">
          {isInput ? (
            <button
              type="button"
              disabled={!selected?.trim()}
              onClick={() => navigate({ to: config.next })}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-[17px] font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              {config.step === quizTotalSteps ? "Ver resultado" : "Próxima"}
              <ArrowRight className="size-5 stroke-[2.5]" />
            </button>
          ) : (
            <PrimaryButton to={config.next} arrow>
              {config.step === quizTotalSteps ? "Ver resultado" : "Próxima"}
            </PrimaryButton>
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}

