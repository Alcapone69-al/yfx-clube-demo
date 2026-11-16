# Publicar no GitHub Pages, instalar e atualizar

Nada foi publicado ainda. Preciso que confirme o nome do repositório (sugestão neutra: `yfx-clube-demo`) e se aceita repositório **público** (necessário para Pages grátis; as páginas têm `noindex`, mas o endereço fica acessível a quem o tiver).

## 1. Criar o repositório
1. github.com → **New repository** → nome `yfx-clube-demo` → Public → Create.
2. Envie **o conteúdo** da pasta `progym-pwa` (incluindo `.nojekyll`) para a raiz do repositório: **Add file → Upload files**, arraste tudo e faça Commit.
3. **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
4. Ao fim de 1–2 minutos o endereço fica `https://SEU-UTILIZADOR.github.io/yfx-clube-demo/`.
   - Membro: `…/clube/` · Painel: `…/direcao/`

Se usar uma organização GitHub, o endereço será `https://NOME-ORG.github.io/yfx-clube-demo/`. Os caminhos dos ficheiros são relativos, por isso funcionam em qualquer nome de repositório.

## 2. Testar
Abra os dois endereços no computador e no telemóvel. Desligue os dados e recarregue: deve abrir na mesma (depois da primeira visita com internet).

## 3. Instalar
- **Android (Chrome):** abrir o endereço → menu ⋮ → **Instalar aplicação** (ou «Adicionar ao ecrã principal»).
- **iPhone/iPad (Safari, obrigatório):** abrir o endereço → botão Partilhar → **Adicionar ao ecrã principal**.
- Instale a app de membros e o painel separadamente.

## 4. Atualizar
1. Edite o ficheiro no GitHub (ou envie o novo por cima).
2. Em `clube/sw.js` (e/ou `direcao/sw.js`) mude `const VERSAO = 'v1.0.0'` para `'v1.0.1'`. Sem isto, telemóveis com a versão antiga podem demorar a ver a mudança.
3. Aguarde 1–2 minutos. Abra a app com internet; pode ser preciso fechá-la e abri-la duas vezes.
