# Herbie21

Projeto criado com [Angular CLI](https://github.com/angular/angular-cli) versão 12.2.1.

## Ambiente de desenvolvimento local

Rode o comando `ng serve --open` para abrir o servidor angular e rodar a aplicação. 

## Plugins e Bibliotecas utilizadas:
- [**ngx-loading**](https://www.npmjs.com/package/ngx-loading)
  - Plugin utilizando para fazer o loading das páginas.
- [**angular-datatables**](https://l-lin.github.io/angular-datatables/#/getting-started)
  - Plugin utilizado para pode visualizar os dados nas telas de visualizações de (Pressão do Pneu, Combustível, Manutenções e Quilometragem).
- [**angular-fusioncharts**](https://fusioncharts.github.io/angular-fusioncharts/#/ex1)
  - Plugin utilizado para gerar os gráficos na tela de Dashboard.
- [**jquery**](https://jquery.com/)
  - Jquery utilizado para renderizar funcionalidades do Bootstrap 4.
- [**moment**](https://momentjs.com/)
  - Biblioteca utilizada para formatar as datas vindas da API.
- [**angular-fontawesome**](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)
  - Plugin do Fontawesome utilizado para gerar icones para as diversas telas do aplicativo.

## Prototipação
- [Prototipo Figma versão 1.0.0](https://www.figma.com/file/ep0oJLSESdIO8IFpB8VyjM/Herbie-21?node-id=0%3A1)
- [Prototipo Figma versão 1.1.0](https://www.figma.com/file/ep0oJLSESdIO8IFpB8VyjM/Herbie-21?node-id=207%3A6453)

## Telas
- Login
- Dashboard
- Manual
- Cadastro de pressão do pneu
- Cadastro de combustível
- Cadastro de manutenção
- Cadastro de quilometragem
- Visualização de pressão do pneu
- Visualização de combustível
- Visualização de manutenções
- Visualização de quilometragem

## Components core
- app-header (Cabeçalho)
- app-footer (Rodapé)
- app-home (Conteúdo das páginas após logado)

## Components shared
- button-plus (Botão para adicionar novos cadastros de informações)
- datatable (Tabelas para mostrar a visualização dos dados cadastrados)
- loading (Componente de carregamento para mostrar o loading enquanto abre as páginas)

