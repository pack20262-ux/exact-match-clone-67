import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { getQuizStep } from "@/lib/quiz";

const config = getQuizStep("altura");

export const Route = createFileRoute("/quiz/altura")({
  head: () => ({
    meta: [
      { title: "Qual é a sua altura? | RoutyFit" },
      { name: "description", content: "Etapa 11 de 11 do quiz RoutyFit: qual é a sua altura em cm?" },
      { property: "og:title", content: "Qual é a sua altura? | RoutyFit" },
      { property: "og:description", content: "Etapa 11 de 11 do quiz RoutyFit: qual é a sua altura em cm?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Altura,
});

function Altura() {
  return <QuizScreen config={config} />;
}
