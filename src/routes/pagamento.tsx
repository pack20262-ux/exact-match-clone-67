import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PhoneFrame } from "@/components/routyfit/ui";
import { CAKTO_CHECKOUT_URL, setIsSubscribed } from "@/lib/subscription";

export const Route = createFileRoute("/pagamento")({
  head: () => ({
    meta: [
      { title: "Pagamento — RoutyFit Premium" },
      {
        name: "description",
        content: "Finalize sua assinatura RoutyFit Premium por R$ 19,90/mês via Cakto.",
      },
      { property: "og:title", content: "Pagamento — RoutyFit Premium" },
      {
        property: "og:description",
        content: "Finalize sua assinatura RoutyFit Premium por R$ 19,90/mês via Cakto.",
      },
    ],
  }),
  component: Pagamento,
});

function Guarantee({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex size-[16px] shrink-0 items-center justify-center rounded-full bg-primary">
        <Check className="size-[11px] stroke-[3.5] text-primary-foreground" />
      </span>
      <span className="text-[13px] text-foreground/90">{label}</span>
    </div>
  );
}

function Pagamento() {
  return (
    <PhoneFrame>
      <h1 className="pb-4 pt-1 text-center text-[16px] font-semibold text-foreground">Pagamento</h1>
      <div className="flex flex-1 flex-col px-5 pb-8">
        <div className="rounded-2xl bg-card px-4 py-4">
          <div className="text-[15px] font-bold text-foreground">RoutyFit Premium</div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-[13px] text-muted-foreground">Plano mensal</span>
            <span className="text-[14px] text-foreground">
              R$ <span className="text-[17px] font-bold text-primary">19,90</span>
            </span>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-card px-4 py-4">
          <div className="text-[15px] font-bold text-foreground">Resumo do pedido</div>
          <div className="mt-3 flex items-center justify-between text-[13px]">
            <span className="text-muted-foreground">Plano mensal</span>
            <span className="text-foreground">R$ 19,90</span>
          </div>
          <div className="mt-3 border-t border-white/10 pt-3 flex items-center justify-between text-[14px] font-semibold">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">R$ 19,90</span>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-card px-4 py-4">
          <div className="text-[15px] font-bold text-foreground">Pagamento via Cakto</div>
          <div className="mt-2 text-center text-[34px] font-extrabold leading-none tracking-tight text-foreground">
            cakto
          </div>
          <p className="mt-2 text-center text-[12px] leading-snug text-muted-foreground">
            Você será redirecionado para o checkout seguro da Cakto para finalizar seu pagamento.
          </p>
          <div className="mt-4 space-y-2">
            <Guarantee label="Ambiente 100% seguro" />
            <Guarantee label="Processamento instantâneo" />
            <Guarantee label="Dados protegidos" />
          </div>
        </div>

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={goToCheckout}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-[17px] font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ir para o pagamento
            <ArrowRight className="size-5 stroke-[2.5]" />
          </button>
          <p className="mt-3 text-center text-[11px] leading-snug text-muted-foreground">
            Ao continuar, você concorda com os{" "}
            <span className="font-semibold text-primary">Termos de Uso</span> e{" "}
            <span className="font-semibold text-primary">Política de Privacidade.</span>
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}
