# Projeto Pic Imóveis

Este é um projeto educacional para demonstrar a implementação de agentes de IA em um cenário prático de uma imobiliária fictícia. O projeto consiste em quatro páginas web que servirão como fonte de dados para os agentes.

## Estrutura do Projeto

- `index.html` - Página principal com informações sobre a empresa
- `imoveis.html` - Catálogo de imóveis disponíveis com filtros e dados detalhados
- `investimentos.html` - Informações sobre investimentos imobiliários e análise de bairros
- `desafio.html` - Instruções detalhadas sobre o desafio e como implementar o agente de IA
- `css/style.css` - Estilos CSS usando as cores inspiradas no PicPay (verde e branco)
- `js/script.js` - Funcionalidades interativas para filtros, navegação e verificação de senha
- `img/` - Pasta com imagens utilizadas nas instruções

## Objetivo do Desafio

O desafio consiste em criar um agente de IA capaz de:

1. Explorar as páginas de imóveis e investimentos
2. Extrair dados estruturados das tabelas
3. Cruzar informações para encontrar padrões e oportunidades
4. Recomendar imóveis com base em preferências do cliente
5. Justificar as recomendações com dados de valorização e potencial de investimento

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript puro (sem frameworks)
- Font Awesome para ícones

## Como Executar

Basta abrir o arquivo `index.html` em um navegador web moderno. Não há necessidade de servidor ou dependências externas.

## Deploy

Este projeto pode ser facilmente implantado no GitHub Pages:

1. Faça o fork deste repositório
2. Vá para Settings > Pages
3. Selecione a branch principal como fonte
4. Clique em "Save"

## Funcionalidade de Credenciais Protegidas

A página do desafio possui uma funcionalidade de proteção das credenciais de API:

1. A API Key da OpenAI está oculta por padrão
2. Há 6 chaves diferentes, uma para cada grupo de alunos
3. Os usuários devem selecionar seu grupo e inserir a senha fornecida pelo instrutor
4. A senha padrão é "aula2023" (pode ser alterada no arquivo JS)
5. Após inserir a senha correta, a API Key específica do grupo selecionado será exibida

Para modificar as chaves da API, edite o arquivo `js/script.js` e atualize o objeto `apiKeys` com as chaves reais.

## Créditos

Este projeto foi criado como material didático para aulas sobre agentes de IA. As imagens utilizadas são de Unsplash e todas as informações sobre imóveis e localizações são fictícias.

## Licença

Este projeto é disponibilizado sob a licença MIT. Sinta-se livre para usar, modificar e distribuir conforme necessário para fins educacionais. 