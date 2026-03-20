# RunBirday

Landing page emocional para um aniversário de 35 anos, construída com React, Vite e Tailwind CSS.

## Como rodar

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Imagens

Os componentes já possuem fallback visual quando os arquivos ainda não existem. Para publicar as fotos reais, adicione estes arquivos em `public/images` mantendo exatamente os nomes abaixo:

- `culto.jpg`
- `corrida.jpg`
- `festa.jpg`

> Dica: se sua plataforma de PR reclamar de arquivos binários, não versione placeholders `.jpg` no repositório. Suba apenas o código e adicione as imagens reais depois, ou use Git LFS / storage externo.

## Próximos passos sugeridos

- Integrar os formulários com uma API.
- Persistir confirmações e inscrições em MariaDB.
- Evoluir a galeria para um carrossel com fotos reais.
