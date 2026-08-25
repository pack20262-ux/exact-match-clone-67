import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { getQuizStep } from "@/lib/quiz";

const config = getQuizStep("peso");

export const Route = createFileRoute("/quiz/peso")({
  head: () => ({
    meta: [
      { title: "Qual é o seu peso? | RoutyFit" },
      { name: "description", content: "Etapa 10 de 11 do quiz RoutyFit: qual é o seu peso em kg?" },
      { property: "og:title", content: "Qual é o seu peso? | RoutyFit" },
      { property: "og:description", content: "Etapa 10 de 11 do quiz RoutyFit: qual é o seu peso em kg?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Peso,
});

function Peso() {
  return <QuizScreen config={config} />;
}
