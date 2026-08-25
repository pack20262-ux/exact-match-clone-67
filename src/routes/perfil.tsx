import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/routyfit/ui";
import { Card, ListRow, MainNav } from "@/components/routyfit/shell";
import avatar from "@/assets/avatar-user.jpg";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Perfil — Seus dados e preferências | RoutyFit" },
      {
        name: "description",
        content: "Gerencie informações pessoais, objetivos, medidas e treinos salvos.",
      },
      { property: "og:title", content: "Perfil — Seus dados e preferências | RoutyFit" },
      {
        property: "og:description",
        content: "Gerencie informações pessoais, objetivos, medidas e treinos salvos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PerfilScreen,
});

const rows = ["Informações pessoais", "Objetivos", "Medidas", "Treinos salvos", "Preferências"];

function PerfilScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-4 px-5 pt-6">
          <img
            src={avatar}
            alt="Foto do perfil"
            loading="lazy"
            width={512}
            height={512}
            className="size-[74px] shrink-0 rounded-full border border-white/15 object-cover"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[20px] font-bold text-foreground">Lucas Vieira</div>
            <div className="mt-1 text-[13px] text-muted-foreground">Nível 12 · Atleta</div>
            <div className="mt-1 text-[13px] font-medium text-primary">
              2.350 XP para o próximo nível
            </div>
          </div>
        </div>

        <div className="mt-5 px-5">
          <Card>
            <div className="px-4 pb-1 pt-4 text-[16px] font-semibold text-foreground">
              Meus dados
            </div>
            {rows.map((row, i) => (
              <ListRow key={row} title={row} last={i === rows.length - 1} onClick={() => {}} />
            ))}
          </Card>
        </div>

        <button
          type="button"
          onClick={() => navigate({ to: "/entrar" })}
          className="mt-5 px-5 text-center text-[15px] font-semibold text-destructive"
        >
          Sair da conta
        </button>

        <MainNav active="Perfil" />
      </div>
    </PhoneFrame>
  );
}
