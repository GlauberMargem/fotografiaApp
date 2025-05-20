# Meu App de Fotografia - React Native + Expo Router

Este é um aplicativo mobile simples feito com React Native e Expo Router que permite navegar entre telas e inclui efeitos visuais como animação de fade-in e efeito de flash para simular uma fotografia.

## Funcionalidades

- Navegação entre telas usando Expo Router.
- Animação de fade-in na imagem da Tela B.
- Efeito de flash ao clicar no botão para "tirar foto".
- Botões customizados com `TouchableOpacity`.
- Layout responsivo e simples.

## Tecnologias

- React Native
- Expo Router
- React Native Animated API

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/GlauberMargem/fotografiaApp.git
   cd seu-repo

2. Instale as dependências:
   npm install

3. Rode o app:
   npm start

## Estrutura do projeto
/assets           # Imagens usadas no app
/app
  ├─ TelaA.js     # Tela principal com botão e imagem
  └─ TelaB.js     # Tela com imagem e animação fade-in
  └─ fotografiaResenha.js # Tela para onde o botão navega após o flash
