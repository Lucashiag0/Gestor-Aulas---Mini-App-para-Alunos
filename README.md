 -- Gestor Aulas – Mini App para Alunos --

github do projeto: https://github.com/Lucashiag0

Este é um aplicativo mobile simples feito em React Native com Expo e TypeScript, que simula a interface de um aluno acessando:

 **Como rodar o app:**

# Pré-requisitos:

- Node.js instalado
- Expo CLI instalado (`npm install -g expo-cli`)
- Celular com o app Expo Go ou um emulador Android
- Android Studio instalado

# Ambiente de emulação utilizado:

Durante o desenvolvimento, o app foi testado no:

- Android Studio Emulator
- Dispositivo virtual: Pixel 5
- Versão do Android: 10 (API 31)

# Tecnologias utilizadas:

- React Native com Expo
- TypeScript
- React Navigation (para navegação entre telas)
- React Native Paper (para UI moderna e responsiva)

# Funcionalidades implementadas

- **Tela de Login**
  - Login simulado com navegação para o painel

- **Painel do Aluno**
  - Saudação
  - Próxima aula
  - Total de faturas pendentes
  - Botões para navegar para Turmas e Faturas

- **Turmas**
  - Lista de turmas (nome, dias, status)
  - Ao clicar, mostra detalhes (descrição, professor, horário)

- **Faturas**
  - Lista com nome da turma, valor, vencimento e status
  - Botão "Pagar" (simulado com modal de confirmação)


# Decisões técnicas

- Utilizamos dados mockados ao invés de consumir APIs externas, por simplicidade e agilidade no teste.
- A UI foi feita com React Native Paper por ser acessível, responsiva e de fácil personalização.
- Toda a navegação foi implementada com React Navigation (Stack), simulando um fluxo de app real.
- O projeto segue o padrão de componentização, separação por responsabilidades e organização limpa, facilitando escalabilidade.


# 👨‍💻 Autor:

Lucas Hiago de Paulo Barbosa
 LinkedIn: **https://www.linkedin.com/in/lucasbarbosadev42/**
 GitHub: **https://github.com/Lucashiag0**
