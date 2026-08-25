import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { getQuizStep } from "@/lib/quiz";

const config = getQuizStep("nivel");

export const Route = createFileRoute("/quiz/nivel")({
  head: () => ({
    meta: [
      { title: "Qual é o seu nível atual? | RoutyFit" },
      { name: "description", content: "Etapa 3 de 11 do quiz RoutyFit: qual é o seu nível atual?" },
      { property: "og:title", content: "Qual é o seu nível atual? | RoutyFit" },
      { property: "og:description", content: "Etapa 3 de 11 do quiz RoutyFit: qual é o seu nível atual?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Nivel,
});

function Nivel() {
  return <QuizScreen config={config} />;
}
