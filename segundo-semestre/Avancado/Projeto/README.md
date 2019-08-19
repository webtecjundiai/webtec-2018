# Projeto WebTec

> Projeto da turma avançada da Webtec - SPA - Single Page Application com Vue.js (w/ vue-cli && webpack && vue-router)

## Configurações do Projeto e Instruções Iniciais

> Ferramentas necessárias:

    * Atom, Brackets, Sublime, VS Code ou outro editor de texto de sua preferência;
    * Node instalado (e posteriormente o vue-cli) + Terminal (ou CMD/Powershell);
    * Conexão com a internet (para comunicação com a API);
    * Café ☕️ :D

> Recomendações:

    * Instale o vue-cli e inicie um projeto, e inspecione todos os arquivos, veja como funciona
      os componentes do vue, o router, o main.js e o index.html, etc. Tente se familiarizar com
      a estrutura de montagem dos arquivos (template html, script js/ts e style css/saas).
    * Leitura e visualização dos links de apoio no final;

> Siga as instruções abaixo para instalação do Vue-CLI e para rodar seu projeto:

``` bash

# Abra o VS Code e aperte CTRL + ` (control mais crase) para abrir o terminal e rodar os comandos
  do Node ou abra um CMD/Terminal/PowerShell, navegue até a pasta desejada para iniciar o projeto,
  se for pelo vs code ele inicia o terminal(cmd/powershell/terminal) na pasta que você estiver
  aberto a área de trabalho do projeto.

# Instale o Node em seu ambiente (npm faz parte do node), link para download no final do documento

# Instale o vue-cli
npm install --global vue-cli

    — O parâmetro --global serve para fazer uma instalação global, ou seja, que você pode
      utilizar o comando em qualquer caminho no terminal/cmd/powershell do sistema.

# Inicie um Projeto Vue com Webpack
vue init webpack nome-do-projeto
    
    — Durante a instalação, aceite todas as sugestões, eslint, vue-router, unit tests, etc;
    — Navegue até a pasta desejada e crie o projeto com o nome desejado no lugar de
      nome-do-projeto, não utilize maiúsculas, caso queira criar o projeto em uma pasta
      que você já criou, é só não escrever o nome, deixe até o comando webpack.

# Instale as Dependências
npm install

    — Rode este comando dentro da pasta do projeto para instalar as dependencias do projeto,
      normalmente é perguntado durante a criação do projeto se você deseja rodar após instalar.

# Servidor de Desenvolvimento com Hot Reload em: localhost:8080
npm run dev

    — Após rodar este comando dentro da pasta do projeto, abra o navegador no endereço acima:
      localhost:8080, caso queira alterar o local acesse o arquivo de configuração
      /config/index.js e altere o endereço e porta (normalmente na linha 16 e 17)

# Parar o servidor no terminal do VS Code ou terminal comum
CTRL + C

————————————————————————————————————————————————————————————————————————————————————————————

Comandos Opcionais e/ou Posteriores

# Build para Produção com Minificação
npm run build

# Build para Produção e Bundle Analyzer Report
npm run build --report

# Rodar testes unitários
npm run unit

# Rodar testes e2e
npm run e2e

# Rodar todos os testes
npm test
```

> Confira os links abaixo para leituras detalhadas e guias de apoio sobre os assuntos falados na aula e sugeridos:

Node
* [Download do NodeJS - Site Oficial](https://nodejs.org/en/)

Vue.js
* [Vue-loader](https://vue-loader-v14.vuejs.org/pt_BR/start/spec.html)
* [Vue-router](https://vuejs-brasil.com.br/vue-router/)
* [VueJS Brasil - Noticias e artigos/tutoriais](https://vuejs-brasil.com.br)
* [Vue Oficial Site](http://vuejs.org)
* [Vue Webpack](http://vuejs-templates.github.io/webpack/)
* [Vue Material](https://vuematerial.io/)

Serviços de Música
* [Spotify WEB API](https://developer.spotify.com/documentation/web-api/)
* [Deezer API](https://developers.deezer.com/api)
* [SoundCloud API](https://developers.soundcloud.com)

HQ e Heróis
* [Developer Marvel](https://developer.marvel.com/)
* [DC Comics API](https://www.dccomics.com/tags/developers)
* [SuperHero API](http://superheroapi.com)

Redes Sociais e Serviços de Localização
* [Twitter API](https://developer.twitter.com/en/docs.html)
* [Facebook API](https://developers.facebook.com/?locale=pt_BR)
* [YouTube API](https://www.youtube.com/yt/dev/pt-BR/api-resources.html)
* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
* [Carreios BR API](https://correiosapi.apphb.com)

Artigos Sugeridos
* [Como usar o roteamento no Vue para melhorar a UX](https://medium.freecodecamp.org/how-to-use-routing-in-vue-js-to-create-a-better-user-experience-98d225bbcdd9)
* [Consumindo API da Marvel com Vue.js](https://inside.contabilizei.com.br/consumindo-api-da-marvel-com-vue-js-1d50f00baf58)
