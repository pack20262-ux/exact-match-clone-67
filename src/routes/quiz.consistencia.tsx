import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { getQuizStep } from "@/lib/quiz";

const config = getQuizStep("consistencia");

export const Route = createFileRoute("/quiz/consistencia")({
  head: () => ({
    meta: [
      { title: "O que mais dificulta sua consistência? | RoutyFit" },
      { name: "description", content: "Etapa 7 de 7 do quiz RoutyFit: o que mais dificulta sua consistência?" },
      { property: "og:title", content: "O que mais dificulta sua consistência? | RoutyFit" },
      { property: "og:description", content: "Etapa 7 de 7 do quiz RoutyFit: o que mais dificulta sua consistência?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Consistencia,
});

function Consistencia() {
  return <QuizScreen config={config} />;
}
