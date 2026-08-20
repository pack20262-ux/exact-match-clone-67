import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { quizSteps } from "@/lib/quiz";

const config = quizSteps[5];

export const Route = createFileRoute("/quiz/tempo")({
  head: () => ({
    meta: [
      { title: "Quanto tempo você tem para treinar? | RoutyFit" },
      { name: "description", content: "Etapa 6 de 7 do quiz RoutyFit: quanto tempo você tem para treinar?" },
      { property: "og:title", content: "Quanto tempo você tem para treinar? | RoutyFit" },
      { property: "og:description", content: "Etapa 6 de 7 do quiz RoutyFit: quanto tempo você tem para treinar?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tempo,
});

function Tempo() {
  return <QuizScreen config={config} />;
}
