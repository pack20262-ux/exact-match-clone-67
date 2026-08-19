import { useEffect, useState } from "react";
import workoutFemale from "@/assets/workout-upper.jpg";
import workoutMale from "@/assets/workout-upper-male.jpg";
import workoutNeutral from "@/assets/workout-upper-neutral.jpg";

export type Gender = "female" | "male" | "undisclosed";

export const genderOptions: { value: Gender; label: string }[] = [
  { value: "female", label: "Mulher" },
  { value: "male", label: "Homem" },
  { value: "undisclosed", label: "Prefiro não informar" },
];

const heroByGender: Record<Gender, { src: string; alt: string }> = {
  female: { src: workoutFemale, alt: "Atleta treinando com halter" },
  male: { src: workoutMale, alt: "Atleta treinando com halter" },
  undisclosed: { src: workoutNeutral, alt: "Halteres e barra na academia" },
};

/** Deterministic hero image for the "Treino de hoje" card. */
export function getGenderWorkoutImage(gender?: Gender | null) {
  return heroByGender[gender ?? "undisclosed"];
}

const STORAGE_KEY = "routyfit:gender";
const EVENT = "routyfit:gender-change";

function isGender(value: unknown): value is Gender {
  return value === "female" || value === "male" || value === "undisclosed";
}

export function readGender(): Gender | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return isGender(raw) ? raw : null;
}

export function saveGender(gender: Gender | null) {
  if (typeof window === "undefined") return;
  if (gender) window.localStorage.setItem(STORAGE_KEY, gender);
  else window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT));
}

/** Reads the saved gender preference and keeps it in sync across screens/tabs. */
export function useGender(): Gender | null {
  const [gender, setGender] = useState<Gender | null>(null);

  useEffect(() => {
    const sync = () => setGender(readGender());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return gender;
}
