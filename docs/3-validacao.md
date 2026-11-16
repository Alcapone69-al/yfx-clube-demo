# Relatório de validação

**Importante:** tudo foi testado em Chromium emulado (Playwright) num servidor local com caminho `/yfx-pro-gym/`, como o GitHub Pages. **Não foi testado em telemóveis, iPad ou Safari reais.** O comportamento no iPhone (instalação, barra de estado, safe areas) tem de ser confirmado por si num aparelho.

| Verificação | Resultado |
|---|---|
| Excesso horizontal e alvos de toque ≥44 px, em 13 larguras (320, 360, 375, 390, 414, 480, 600, 768, 820, 1024, 1280, 1440, 1920) × todas as vistas e filtros | 0 problemas |
| axe-core (WCAG 2.2 A/AA + boas práticas), larguras 320/390/768/820/1280, todas as vistas e filtros | 0 violações (1–2 itens «incompletos» por vista são avisos de verificação manual do axe) |
| Comportamentos (44 testes automáticos): separadores, botão Painel, ranking, check-in (botão, hoje marcado, 12→13), Terminar treino, Enviar mensagem, filtro de unidade (4 unidades), botões sem função sem efeito | 44/44 |
| Instalabilidade (Chrome DevTools, `getInstallabilityErrors`) | Sem erros nas duas apps |
| Offline após a primeira visita (rede desligada, recarregar, navegar, filtrar) | Funciona; fontes incluídas |
| Erros de consola e pedidos falhados | Nenhum |
| `noindex, nofollow` | Presente nas 3 páginas |
| Comparação de texto com os originais | Só diferenças intencionais (ver auditoria) |
| localStorage/sessionStorage/servidor/GPS/notificações | Nenhum usado |

## Não validado
- Safari/iOS e Android reais; instalação real no ecrã principal.
- Leitores de ecrã reais (VoiceOver/TalkBack); só axe automático.
- Atualização do service worker numa instalação antiga (testar após a primeira publicação).
- A logo original tem só 256×55 px: os ícones ficam nítidos mas simples. Para as lojas ou ecrãs grandes convém ter a logo vetorial.

## Ficheiros
```
index.html                  página inicial com as duas ligações
clube/   index.html, manifest.webmanifest, sw.js, icons/   (Pro Gym Clube)
direcao/ index.html, manifest.webmanifest, sw.js, icons/   (Painel Pro Gym)
assets/fonts/               Inter e Archivo (WOFF2) + licenças OFL
docs/                       estes relatórios
```
Cada app tem identidade própria (manifesto e âmbito separados): instalam-se como duas apps distintas.
