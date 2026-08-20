import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { quizSteps } from "@/lib/quiz";

const config = quizSteps[3];

export const Route = createFileRoute("/quiz/frequencia")({
  head: () => ({
    meta: [
      { title: "Quantos dias você pode treinar? | RoutyFit" },
      { name: "description", content: "Etapa 4 de 7 do quiz RoutyFit: quantos dias você pode treinar?" },
      { property: "og:title", content: "Quantos dias você pode treinar? | RoutyFit" },
      { property: "og:description", content: "Etapa 4 de 7 do quiz RoutyFit: quantos dias você pode treinar?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Frequencia,
});

function Frequencia() {
  return <QuizScreen config={config} />;
}
