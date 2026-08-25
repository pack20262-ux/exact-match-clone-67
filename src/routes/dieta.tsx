import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Droplet,
  Heart,
  Lightbulb,
  ListOrdered,
  Plane,
  ShoppingCart,
} from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { Card, ListRow, MainNav, ScreenHeader } from "@/components/routyfit/shell";

export const Route = createFileRoute("/dieta")({
  head: () => ({
    meta: [
      { title: "Dieta personalizada — Plano alimentar | RoutyFit" },
      {
        name: "description",
        content: "Plano alimentar de 2.200 kcal com 5 refeições, lista de compras e receitas.",
      },
      { property: "og:title", content: "Dieta personalizada — Plano alimentar | RoutyFit" },
      {
        property: "og:description",
        content: "Plano alimentar de 2.200 kcal com 5 refeições, lista de compras e receitas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DietaScreen,
});

const items = [
  { icon: Droplet, title: "Plano alimentar", subtitle: "2.200 kcal · 5 refeições", chevron: false },
  { icon: ListOrdered, title: "Refeições", subtitle: "Ver todas as refeições", chevron: true },
  { icon: ShoppingCart, title: "Lista de compras", subtitle: "Ver ingredientes", chevron: true },
  { icon: BarChart3, title: "Progresso da dieta", subtitle: "Acompanhe seus resultados", chevron: true },
  { icon: Heart, title: "Receitas favoritas", subtitle: "Ver suas receitas salvas", chevron: true },
  { icon: Lightbulb, title: "Recomendações", subtitle: "Dicas para sua dieta", chevron: true },
];

function DietaScreen() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <ScreenHeader
          title="Dieta personalizada"
          trailing={<Plane className="size-[20px] text-primary" strokeWidth={1.8} />}
        />

        <div className="mt-4 px-5">
          <Card>
            {items.map(({ icon: Icon, title, subtitle, chevron }, i) => (
              <ListRow
                key={title}
                icon={<Icon className="size-[20px]" strokeWidth={1.8} />}
                title={title}
                subtitle={subtitle}
                last={i === items.length - 1}
                trailing={chevron ? undefined : <span />}
                onClick={() => {}}
              />
            ))}
          </Card>
        </div>

        <MainNav active="Dieta" />
      </div>
    </PhoneFrame>
  );
}
