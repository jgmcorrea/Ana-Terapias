# Site — Ana Terapias & Bem-Estar

Site estático (HTML + CSS + JS puro). Não precisa instalar nada nem rodar build: é só subir os arquivos no GitHub e ativar o GitHub Pages.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Todo o conteúdo do site (textos, links, WhatsApp) |
| `style.css` | Cores, fontes e layout |
| `script.js` | Menu no celular, perguntas frequentes e ano do rodapé |
| `images/logo.png` | Logo (**provisório, troque pelo logo real**) |
| `images/ambiente-spa.jpg` | Foto do topo (**provisória, troque pela foto real**) |
| `.nojekyll` | Arquivo vazio que evita problemas no GitHub Pages. Não apague |

## Como publicar no GitHub Pages

1. Entre em github.com e clique em **New repository**. Dê um nome (ex.: `ana-terapias`), deixe como **Public** e clique em **Create repository**.
2. Na página do repositório, clique em **uploading an existing file**.
3. Descompacte o zip no computador, **abra a pasta** e arraste **o conteúdo dela** (index.html, style.css, script.js, a pasta images…) para o GitHub. Não arraste a pasta de fora: o `index.html` precisa ficar na raiz do repositório.
4. Clique em **Commit changes**.
5. Vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e clique em **Save**.
6. Em 1 a 2 minutos o site fica no ar em `https://SEU-USUARIO.github.io/ana-terapias/`. O link aparece no topo da mesma tela.

> O `.nojekyll` pode não aparecer ao arrastar (arquivos que começam com ponto ficam ocultos no Mac/Windows). O site funciona sem ele; se quiser criar, use **Add file → Create new file**, nome `.nojekyll`, conteúdo vazio.

## Trocar as imagens

Envie o logo e a foto reais com **os mesmos nomes**: `images/logo.png` e `images/ambiente-spa.jpg` (no GitHub: abra a pasta `images` → **Add file → Upload files**). O logo fica melhor em PNG com fundo transparente.

## Editar textos, telefone e links

Abra o `index.html` no GitHub, clique no lápis (✏️), use Ctrl+F para achar o texto, altere e clique em **Commit changes**. O site se atualiza sozinho em cerca de 1 minuto.

- WhatsApp: procure por `wa.me/` (aparece em vários botões; troque todos)
- Instagram: procure por `instagram.com`
- Perfil do Google: procure por `share.google`

## Domínio próprio (opcional)

Em **Settings → Pages → Custom domain**, digite o domínio (ex.: `anaterapias.com.br`) e siga as instruções de DNS que o GitHub mostrar.
