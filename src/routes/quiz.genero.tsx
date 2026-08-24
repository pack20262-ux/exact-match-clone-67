import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { getQuizStep } from "@/lib/quiz";

const config = getQuizStep("genero");

export const Route = createFileRoute("/quiz/genero")({
  head: () => ({
    meta: [
      { title: "Como você se identifica? | RoutyFit" },
      { name: "description", content: "Etapa 2 de 7 do quiz RoutyFit: como você se identifica?" },
      { property: "og:title", content: "Como você se identifica? | RoutyFit" },
      { property: "og:description", content: "Etapa 2 de 7 do quiz RoutyFit: como você se identifica?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Genero,
});

function Genero() {
  return <QuizScreen config={config} />;
}
