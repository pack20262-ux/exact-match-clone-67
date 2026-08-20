import { saveGender, type Gender } from "@/lib/gender";

export type QuizOption = { value: string; label: string };

export type QuizStep = {
  slug: string;
  step: number;
  title: string;
  titleLines: string[];
  options: QuizOption[];
  prev: string | null;
  next: string;
};

export const quizSteps: QuizStep[] = [
  {
    slug: "objetivo",
    step: 1,
    title: "Qual é o seu principal objetivo?",
    titleLines: ["Qual é o seu", "principal objetivo?"],
    options: [
      { value: "massa", label: "Ganhar massa muscular" },
      { value: "gordura", label: "Perder gordura" },
      { value: "forca", label: "Ficar mais forte" },
      { value: "condicionamento", label: "Melhorar condicionamento" },
      { value: "consistencia", label: "Criar consistência" },
    ],
    prev: null,
    next: "/quiz/genero",
  },
  {
    slug: "genero",
    step: 2,
    title: "Como você se identifica?",
    titleLines: ["Como você", "se identifica?"],
    options: [
      { value: "female", label: "Mulher" },
      { value: "male", label: "Homem" },
      { value: "undisclosed", label: "Prefiro não informar" },
    ],
    prev: "/quiz/objetivo",
    next: "/quiz/nivel",
  },
  {
    slug: "nivel",
    step: 3,
    title: "Qual é o seu nível atual?",
    titleLines: ["Qual é o seu", "nível atual?"],
    options: [
      { value: "iniciante", label: "Iniciante" },
      { value: "intermediario", label: "Intermediário" },
      { value: "avancado", label: "Avançado" },
    ],
    prev: "/quiz/genero",
    next: "/quiz/frequencia",
  },
  {
    slug: "frequencia",
    step: 4,
    title: "Quantos dias você pode treinar?",
    titleLines: ["Quantos dias você", "pode treinar?"],
    options: [
      { value: "2", label: "2 dias por semana" },
      { value: "3", label: "3 dias por semana" },
      { value: "4", label: "4 dias por semana" },
      { value: "5", label: "5 dias por semana" },
      { value: "6", label: "6+ dias por semana" },
    ],
    prev: "/quiz/nivel",
    next: "/quiz/local",
  },
  {
    slug: "local",
    step: 5,
    title: "Onde você costuma treinar?",
    titleLines: ["Onde você", "costuma treinar?"],
    options: [
      { value: "academia", label: "Academia" },
      { value: "casa", label: "Em casa" },
      { value: "ambos", label: "Academia e casa" },
      { value: "ar-livre", label: "Ao ar livre" },
    ],
    prev: "/quiz/frequencia",
    next: "/quiz/tempo",
  },
  {
    slug: "tempo",
    step: 6,
    title: "Quanto tempo você tem para treinar?",
    titleLines: ["Quanto tempo você", "tem para treinar?"],
    options: [
      { value: "20-30", label: "20–30 minutos" },
      { value: "30-45", label: "30–45 minutos" },
      { value: "45-60", label: "45–60 minutos" },
      { value: "60+", label: "60+ minutos" },
    ],
    prev: "/quiz/local",
    next: "/quiz/consistencia",
  },
  {
    slug: "consistencia",
    step: 7,
    title: "O que mais dificulta sua consistência?",
    titleLines: ["O que mais dificulta", "sua consistência?"],
    options: [
      { value: "o-que-treinar", label: "Não sei o que treinar" },
      { value: "motivacao", label: "Falta de motivação" },
      { value: "rotina", label: "Não tenho uma rotina" },
      { value: "progresso", label: "Não sei se estou evoluindo" },
      { value: "tempo", label: "Falta de tempo" },
    ],
    prev: "/quiz/tempo",
    next: "/plano",
  },
];

const STORAGE_KEY = "routyfit:quiz";

export function readQuizAnswers(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function saveQuizAnswer(slug: string, value: string) {
  if (typeof window === "undefined") return;
  const answers = { ...readQuizAnswers(), [slug]: value };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  if (slug === "genero") saveGender(value as Gender);
}
