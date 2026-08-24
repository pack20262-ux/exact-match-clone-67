import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { quizSteps } from "@/lib/quiz";

const config = getQuizStep("local");

export const Route = createFileRoute("/quiz/local")({
  head: () => ({
    meta: [
      { title: "Onde você costuma treinar? | RoutyFit" },
      { name: "description", content: "Etapa 5 de 7 do quiz RoutyFit: onde você costuma treinar?" },
      { property: "og:title", content: "Onde você costuma treinar? | RoutyFit" },
      { property: "og:description", content: "Etapa 5 de 7 do quiz RoutyFit: onde você costuma treinar?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Local,
});

function Local() {
  return <QuizScreen config={config} />;
}
