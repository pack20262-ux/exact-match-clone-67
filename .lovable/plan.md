# RoutyFit — clone pixel-perfect das 8 telas

Reprodução fiel do mockup enviado: app mobile em preto com verde-limão (#D7FF3E aprox.), tipografia sans bold condensada, cantos arredondados grandes nos cards e botões.

## Telas (cada uma é uma rota independente)

1. `/` — Splash: logo "R" + RoutyFit, "Seu treino. Sua rotina. Seu progresso." (última linha em verde), foto da atleta ocupando a metade inferior com gradiente para preto. Sem botão, sem lista.
2. `/intro` — "Vamos encontrar o treino ideal para você." (destaques em verde), parágrafo, 4 benefícios com ícones, botão verde "Começar quiz", link "Já tem uma conta? Entrar".
3. `/quiz/objetivo` — barra de progresso 1/7, "Qual é o seu principal objetivo?", 5 opções (a 1ª selecionada: borda verde + check), botão "Próxima →".
4. `/quiz/frequencia` — 3/7, "Quantos dias você pode treinar?", 5 opções (4 dias selecionada), "Próxima →".
5. `/quiz/local` — 5/7, "Onde você costuma treinar?", 4 opções (Academia selecionada), "Próxima →".
6. `/plano` — ícone de check em círculo com raios, "Seu plano personalizado está pronto!", card resumo com 5 linhas (Objetivo, Nível, Dias de treino, Duração média, Foco) separadas por divisores, botão "Ver meu plano".
7. `/premium` — "RoutyFit Premium" com coroa, subtítulo, 6 itens com check verde, card com borda verde "Plano mensal R$ 19,90 /mês — Cancele quando quiser", botão "Quero meu plano", rodapé com cadeado "Ambiente 100% seguro".
8. `/pagamento` — header "Pagamento", card do produto (preço em verde), card "Resumo do pedido" com Plano mensal / Total, card "Pagamento via Cakto" com wordmark grande e 3 garantias, botão "Ir para o pagamento →", texto legal com links em verde.

Navegação encadeada na ordem acima (cada botão leva à próxima tela). Seleções do quiz são estado local, sem backend.

## Componentes compartilhados

- `PhoneFrame` — container mobile centralizado (largura máx. ~430px, fundo preto, safe padding) + status bar falsa (9:41 + ícones) como no mockup.
- `ProgressBar` — trilho cinza, preenchimento verde, rótulo "n / 7".
- `OptionCard` — item de lista selecionável (ícone opcional, label, check verde, borda verde quando ativo).
- `PrimaryButton` — pill verde, texto preto bold, seta opcional.
- `FeatureItem` / `CheckItem` — linhas de benefícios com ícone.
- `SummaryRow` — linha do card de resumo do plano.
- Tokens de cor/raio/tipografia definidos em `src/styles.css` (tema escuro fixo).

## Detalhes técnicos

- Ícones: `lucide-react` (dumbbell, cloud, calendar, target, flame, crown, lock, check, home, trees, arrow-right).
- Fonte: família geométrica bold próxima do mockup carregada via `<link>` no `__root.tsx`.
- Imagem da tela 1: uma única geração (atleta de costas em academia escura, perfil, luz lateral) salva em `src/assets/`; sem variações extras.
- Metadados `head()` próprios por rota (título/descrição/og).
