import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame, PrimaryButton } from "@/components/routyfit/ui";
import heroAthlete from "@/assets/hero-athlete.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoutyFit — Seu treino. Sua rotina. Seu progresso." },
      {
        name: "description",
        content: "RoutyFit monta o plano de treino ideal para a sua rotina e seus objetivos.",
      },
      { property: "og:title", content: "RoutyFit — Seu treino. Sua rotina. Seu progresso." },
      {
        property: "og:description",
        content: "RoutyFit monta o plano de treino ideal para a sua rotina e seus objetivos.",
      },
    ],
  }),
  component: Splash,
});

function Splash() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="px-8 pt-10 text-center">
          <svg
            width="58"
            height="58"
            viewBox="0 0 64 64"
            className="mx-auto text-primary"
            aria-hidden="true"
          >
            <path
              d="M18 6h20a15 15 0 0 1 0 30h-6l14 22h-13L20 36V26h17a5 5 0 0 0 0-10H18V6Z"
              fill="currentColor"
            />
          </svg>
          <h1 className="mt-4 text-[34px] font-extrabold leading-none tracking-tight text-foreground">
            Routy<span className="text-primary">Fit</span>
          </h1>
          <p className="mt-8 text-[20px] font-bold leading-[1.35] text-foreground">
            Seu treino.
            <br />
            Sua rotina.
            <br />
            <span className="text-primary">Seu progresso.</span>
          </p>
        </div>
        <div className="relative mt-6 flex-1 overflow-hidden">
          <img
            src={heroAthlete}
            alt="Atleta de costas em uma academia com iluminação lateral"
            width={864}
            height={912}
            className="absolute inset-0 size-full object-cover object-[55%_20%]"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="px-6 pb-8">
          <PrimaryButton to="/intro">Começar</PrimaryButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
