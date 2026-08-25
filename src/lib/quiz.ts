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
  kind?: "options" | "input";
  input?: {
    type: "text" | "number";
    placeholder: string;
    suffix?: string;
    min?: number;
    max?: number;
  };
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
    next: "/quiz/nome",
  },
  {
    slug: "nome",
    step: 8,
    title: "Como podemos te chamar?",
    titleLines: ["Como podemos", "te chamar?"],
    options: [],
    kind: "input",
    input: { type: "text", placeholder: "Seu nome" },
    prev: "/quiz/consistencia",
    next: "/quiz/idade",
  },
  {
    slug: "idade",
    step: 9,
    title: "Qual é a sua idade?",
    titleLines: ["Qual é a", "sua idade?"],
    options: [],
    kind: "input",
    input: { type: "number", placeholder: "Ex.: 28", suffix: "anos", min: 10, max: 100 },
    prev: "/quiz/nome",
    next: "/quiz/peso",
  },
  {
    slug: "peso",
    step: 10,
    title: "Qual é o seu peso?",
    titleLines: ["Qual é o", "seu peso?"],
    options: [],
    kind: "input",
    input: { type: "number", placeholder: "Ex.: 70", suffix: "kg", min: 30, max: 300 },
    prev: "/quiz/idade",
    next: "/quiz/altura",
  },
  {
    slug: "altura",
    step: 11,
    title: "Qual é a sua altura?",
    titleLines: ["Qual é a", "sua altura?"],
    options: [],
    kind: "input",
    input: { type: "number", placeholder: "Ex.: 170", suffix: "cm", min: 100, max: 250 },
    prev: "/quiz/peso",
    next: "/plano",
  },
];

export const quizTotalSteps = quizSteps.length;

export function getQuizStep(slug: string): QuizStep {
  const step = quizSteps.find((s) => s.slug === slug);
  if (!step) throw new Error(`Unknown quiz step: ${slug}`);
  return step;
}

/** First name saved in the quiz, used by the dashboard greeting. */
export function readQuizName(): string | null {
  const name = readQuizAnswers()["nome"]?.trim();
  if (!name) return null;
  return name.split(/\s+/)[0] ?? null;
}


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
