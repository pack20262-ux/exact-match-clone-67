import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { quizSteps } from "@/lib/quiz";

const config = quizSteps[0];

export const Route = createFileRoute("/quiz/objetivo")({
  head: () => ({
    meta: [
      { title: "Qual é o seu principal objetivo? | RoutyFit" },
      { name: "description", content: "Etapa 1 de 7 do quiz RoutyFit: qual é o seu principal objetivo?" },
      { property: "og:title", content: "Qual é o seu principal objetivo? | RoutyFit" },
      { property: "og:description", content: "Etapa 1 de 7 do quiz RoutyFit: qual é o seu principal objetivo?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Objetivo,
});

function Objetivo() {
  return <QuizScreen config={config} />;
}
