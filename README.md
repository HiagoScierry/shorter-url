# Shorter URL

Um encurtador de URL simples para brincar com o desenvolvimento de software.

## Objetivo

Nesse desafio você deve criar um servidor que encurte urls e faça redirecionamento.

## Requisitos

- Criar um servidor http que contenha dois endpoints:

```
- POST / - recebe uma url e retorna um código único
- GET /:code - utiliza o code para redirecionar para a url original
```

- O code é um código único, a mesma url enviada várias vezes gera códigos diferentes
- O code tem o tamanho de até 6 caracteres

## Implementado a mais

- [ ] Testes Unitários
- [ ] Testes de Integração
- [ ] Documentação com Swagger;
