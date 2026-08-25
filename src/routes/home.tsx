import { RequireSubscription } from "@/components/routyfit/require-subscription";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Menu } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { BottomNav, StatCard } from "@/components/routyfit/app";
import { getGenderWorkoutImage, useGender } from "@/lib/gender";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Início — Seu treino de hoje | RoutyFit" },
      { name: "description", content: "Veja o treino de hoje e o progresso da sua semana." },
      { property: "og:title", content: "Início — Seu treino de hoje | RoutyFit" },
      { property: "og:description", content: "Veja o treino de hoje e o progresso da sua semana." },
    ],
  }),
  component: GuardedHomeScreen,
});

function HomeScreen() {
  const gender = useGender();
  const hero = getGenderWorkoutImage(gender);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setName(readQuizName());
  }, []);

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between px-6 pt-6">
          <Menu className="size-6 text-foreground" />
          <Bell className="size-6 text-foreground" />
        </div>

        <div className="px-6 pt-5">
          <h1 className="text-[24px] font-extrabold leading-none tracking-tight text-foreground">
            Olá, {name ?? "atleta"}! <span className="align-middle">💪</span>
          </h1>

          <p className="mt-2 text-[14px] text-muted-foreground">
            Vamos para mais um dia de foco!
          </p>
        </div>

        <div className="mt-4 px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-card">
            <img
              key={hero.src}
              src={hero.src}
              alt={hero.alt}
              width={1024}
              height={640}
              className="absolute inset-y-0 right-0 h-full w-1/2 object-cover"
            />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-card via-card/60 to-transparent" />
            <div className="relative px-4 py-4">
              <div className="text-[12px] text-muted-foreground">Treino de hoje</div>
              <div className="mt-2 text-[22px] font-extrabold leading-none text-foreground">
                Upper Body
              </div>
              <div className="mt-2 text-[13px] text-muted-foreground">Hipertrofia • 50 min</div>
              <Link
                to="/treino"
                className="mt-4 flex h-[46px] w-full items-center justify-center rounded-xl bg-primary text-[15px] font-bold text-primary-foreground"
              >
                Iniciar treino
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 px-6">
          <div className="rounded-2xl border border-white/8 bg-card px-4 py-4">
            <div className="text-[15px] font-semibold text-foreground">Progresso da semana</div>
            <div className="mt-3 flex items-center justify-between text-[12px] text-muted-foreground">
              <span>3 de 4 treinos concluídos</span>
              <span>75%</span>
            </div>
            <div className="mt-2 h-[6px] w-full rounded-full bg-track">
              <div className="h-full w-3/4 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-3 px-6">
          <StatCard label="Sequência" value="7" caption="dias" />
          <StatCard label="Treinos" value="12" caption="concluídos" />
          <StatCard label="Foco" value="92%" caption="da meta" />
        </div>

        <BottomNav active="Início" />
      </div>
    </PhoneFrame>
  );
}

function GuardedHomeScreen() {
  return (
    <RequireSubscription>
      <HomeScreen />
    </RequireSubscription>
  );
}
