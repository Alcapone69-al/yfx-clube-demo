# Auditoria das páginas originais

Páginas auditadas: membro (`progym-demo`) e painel (`progym-painel`), com Chromium (Playwright) e axe-core 4.14.

## Problemas encontrados e o que foi feito

| # | Problema (original) | Correção |
|---|---|---|
| 1 | Coluna fixa de 520 px: no computador a app ficava estreita no meio | Layout por pontos de quebra (320 a 1920): grelha de 2 colunas no iPad e menu lateral a partir de 1024 px |
| 2 | Cartões colados uns aos outros (sem espaço entre `.card`) | Espaçamento consistente entre cartões |
| 3 | Alvos de toque pequenos: «Painel» 52×28, seletor do ranking 31 px, reações 24 px, filtros do painel ~29 px, botões do painel 38–40 px | Todos com pelo menos 44×44 px |
| 4 | Fontes vinham do Google Fonts (sem internet, caem para fonte genérica) | Inter e Archivo locais em WOFF2 (licença OFL), em cache offline |
| 5 | Emojis 🔥💪👏🙋 (aspeto diferente em cada telemóvel) | Ícones SVG inline, com nome acessível («Fogo, 4») |
| 6 | Separadores sem painéis associados; página sem `h1` no Perfil; salto de títulos no painel; conteúdo fora de landmarks (axe: 1–2 violações por vista) | `nav` com `aria-current`, um `h1` por vista, títulos em ordem, `header`/`main`/`footer`, ligação «Saltar para o conteúdo». axe: **0 violações** |
| 7 | Cores como único sinal (dias feitos, unidade «a tua», barras) | Texto equivalente (leitores de ecrã) e marcas de texto («· a tua», ✓) |
| 8 | Gráficos sem alternativa | Barras escondidas dos leitores de ecrã, valores em texto; gráfico das horas com resumo e tabela de dados |
| 9 | Eixo das horas cortado em ecrãs estreitos | Marcas de 4 em 4 horas (5h, 9h, 13h, 17h, 21h) |
| 10 | Indicadores do painel em 1 coluna até 460 px | 2 colunas desde 320 px, 4 a partir de 768 px |
| 11 | Tabela de risco com scroll horizontal no telemóvel | Em ecrã pequeno cada linha vira um cartão; em ecrã largo, tabela normal |
| 12 | Filtro de unidade do painel só mudava indicadores e lista | Ver «Filtro de unidade» abaixo |
| 13 | Check-in mudava o botão mas o contador de dias seguia em 12 | O 12 passa a 13 em todo o lado (início, perfil, ranking); «3 de 4 idas» passa a «4 de 4»; idas do mês 18→19 |
| 14 | Sem PWA, sem `noindex`, sem ícones | Manifestos, service workers, ícones, meta de iOS, `noindex, nofollow` |
| 15 | Texto pequeno (8,5–10,5 px) | Mínimo de 11 px |

## Filtro de unidade (painel)

Só se mostra o que há dados. Com uma unidade escolhida:
- Indicadores, lista de risco e contagem («2 de 9») mudam.
- A unidade fica destacada (barra laranja, negrito, `aria-current`) em «Membros ativos por unidade» e no «Desafio de Novembro».
- Horas, retenção e partilhas **não têm dados por unidade**: ficam como estão e ganham a etiqueta «Todas as unidades». Não se inventou nenhum número.
- A frase «No mês passado, 29 dos 38…» é escondida (não editada) quando se filtra, porque fala da lista completa de 38.
- O botão «Enviar mensagem a todos» passa a «… · Matola» e volta ao estado inicial ao mudar de filtro.

## Alterações de texto (comparação automática com os originais)

Só: ícones SVG no lugar dos emojis, «Saltar para o conteúdo» (invisível até receber foco), etiquetas «Todas as unidades», «A mostrar: …» no painel, eixo de horas, «Plano» nas linhas do cartão no telemóvel, e o menu inferior antes do conteúdo no código. Nenhuma frase de conteúdo foi reescrita.

## Discrepância a conhecer

No painel, «Publicar aviso» **já mudava o texto** para «Aviso publicado nas 4 unidades» (não era um botão vazio, ao contrário do que o briefing dizia). Mantive o comportamento original. É uma mensagem de sucesso sem ação real: convém decidir se se mantém.
