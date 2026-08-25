import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { getQuizStep } from "@/lib/quiz";

const config = getQuizStep("idade");

export const Route = createFileRoute("/quiz/idade")({
  head: () => ({
    meta: [
      { title: "Qual é a sua idade? | RoutyFit" },
      { name: "description", content: "Etapa 9 de 11 do quiz RoutyFit: qual é a sua idade?" },
      { property: "og:title", content: "Qual é a sua idade? | RoutyFit" },
      { property: "og:description", content: "Etapa 9 de 11 do quiz RoutyFit: qual é a sua idade?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Idade,
});

function Idade() {
  return <QuizScreen config={config} />;
}
