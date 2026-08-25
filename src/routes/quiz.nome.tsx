import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/routyfit/quiz-screen";
import { getQuizStep } from "@/lib/quiz";

const config = getQuizStep("nome");

export const Route = createFileRoute("/quiz/nome")({
  head: () => ({
    meta: [
      { title: "Como podemos te chamar? | RoutyFit" },
      { name: "description", content: "Etapa 8 de 11 do quiz RoutyFit: como podemos te chamar?" },
      { property: "og:title", content: "Como podemos te chamar? | RoutyFit" },
      { property: "og:description", content: "Etapa 8 de 11 do quiz RoutyFit: como podemos te chamar?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Nome,
});

function Nome() {
  return <QuizScreen config={config} />;
}
