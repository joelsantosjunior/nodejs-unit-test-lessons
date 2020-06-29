# nodejs-unit-test-lessons

## Treinamento em testes de unidade
Projeto criado para auxiliar na demonstração da configuração do ambiente para a execução de testes de unidade em aplicativos nodejs

## Bibliotecas utilizadas para a criação e execução dos testes:
 - Mocha https://mochajs.org/
 - Chai https://www.chaijs.com/
 - Chai-http https://www.chaijs.com/plugins/chai-http/
 - MockMongoose https://www.npmjs.com/package/mock-mongoose
 
## Instalação das biliotecas
```shell
npm install -D mocha chai chai-http mock-mongoose
```

## Instalação das bibliotecas para definição dos tipos [TypeScript]
```shell
npm install -D @types/mocha @types/chai
```

## Pacote para visualização dos arquivos de report
https://github.com/adamgruber/mochawesome
```shell
npm install --save-dev mochawesome
```
Atualizar o script "test" no package.json, incluir o seguinte comando:
```shell
--reporter mochawesome
```

