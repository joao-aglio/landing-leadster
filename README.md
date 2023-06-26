# 🇧🇷 
Projeto de landing page feito em Next.js, juntamente com TypeScript, ESLint, Tailwind e Redux. 

São necessárias a instalação das seguintes ferramentas:

- [Node.js](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)

Em seguida, use o seguinte comando para clonar este repositório:

```bash
git clone https://github.com/aglitus/landing-leadster.git
```  

## Como iniciar o projeto?

Digite os seguintes comandos no terminal dentro da raiz do projeto:

```bash
npm i
# e logo depois
npm run dev
```

Assim, o projeto estará disponível neste link: [http://localhost:3000](http://localhost:3000).

Você também pode acessar o deploy do projeto no Vercel no [link](https://landing-leadster.vercel.app/) anexado neste repositório.


## Decisões tomadas em relação ao projeto

Para a criação desta landing page, utilizei diversas tecnologias que otimizam o tempo de desenvolvimento, sendo elas: Tailwind, ESLint, Redux, e a biblioteca react-modals.
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

# 🇬🇧

Landing page project made in Next.js, with TypeScript, ESLint, Tailwind and Redux. 

These following tools are needed for the project.

- [Node.js](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)

Then, use the following command to clone this repo:

```bash
git clone https://github.com/aglitus/landing-leadster.git
```  

## How to start the project?

Type the following commands in the root of the project.

```bash
npm i
# and right after
npm run dev
```

Then, the project will be available at: [http://localhost:3000](http://localhost:3000).

You can also access the Vercel deploy [here](https://landing-leadster.vercel.app/).

## Decisions taken

For the creation of this project, I used a ton of technologies that optimize the development time: Tailwind, ESLint, Redux and the react-modals library. I decided to use Redux to handle the modals, since various components can control the state of it (closing or opening it), so, it was necessary for that reason. I also opted for TypeScript for the whole application (except in Redux components) to padronize and bug controls.

## Code organization

I'm using the `src/` folder structure for organization purposes.
The folder has the following structure:

| Folder  | Function |
| ------------- |:-------------:|
| components    | application components, with their subfolder   |
| hooks     | all the hooks     |
| redux      | Redux components    |
| modules/types     | All the application's types     |
| pages      | default Next.js folder for the pages     |


## Features

The page has interactivity with modals, where the user can click in any component from the second section list to open it. It loads the video information. These components are loaded in a hook that fetches the `data.json` in the public folder
