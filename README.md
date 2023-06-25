Projeto de landing page feito em Next.js, juntamente com TypeScript, ESLint e Tailwind. 

## Como iniciar o projeto?

Digite os seguintes comandos no terminal dentro raiz do projeto:

```bash
npm i
# e logo depois
npm run dev
```

Assim, o projeto estará disponível neste link: [http://localhost:3000](http://localhost:3000).

Você também pode acessar o deploy do projeto no Vercel no link anexado neste repositório.


## Decisões tomadas em relação ao projeto

Para a criação desta landing page, utilizei diversas tecnologias que otimizam o tempo de desenvolvimento, sendo elas: Tailwind, ESLink, Redux, e a biblioteca react-modals.
Resolvi aplicar o Redux na aplicação para a utilização das modais, porque vários componentes podem controlar o estado da mesma (fechar ou abrir a modal), sendo assim, necessário a adaptação para o mesmo. Optei, também, em utilizar o TypeScript pra toda a aplicação (come exceção dos componentes do Redux) para padronização e controle de bugs.

## Organização do código

Optei pela utilização da pasta `src/` por questão de organização, podendo organizar todos os meus components em apenas uma pasta. 
O projeto possui a seguinte estrutura de pastas:

| Pastas  | Função |
| ------------- |:-------------:|
| components    | componentes da aplicação, com suas subpastas    |
| hooks     | todos os hooks     |
| redux      | componentes do Redux     |
| modules/types     | Todos as tipagens da aplicação (TS)     |
| pages      | pasta padrão que o Next.js realiza a renderização de componentes     |

## Funcionalidades

A página possui interatividade com modais, onde o usuário pode clicar em qualquer componente da lista da segunda seção para abrir uma modal com as informações daquele vídeo. Esses componentes são carregados baseados em um `hook` que faz um `fetch` no arquivo `data.json` da pasta public.
