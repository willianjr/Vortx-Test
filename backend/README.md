> [[Voltar]](../README.md)

***
<p align="center">
  <img src="../_LAYOUT/Marca/LOGOMARCA_VXTEL.svg" width="300" />
</p>

# VX TEL - backend

Projeto Teste para VORTX

> O Documento abaixo terá uma breve descrição do projeto

_Tecnologias_

### #BackEnd

-   NodeJS
-   TypeScript
-   Express
-   EsLint
-   Prettier
-   TypeORM
-   SQLite
-   Class Validator
-   Uuid
- 	Jest


## Features

1. Cadastro de Planos de Telefonia
2. Edição de Planos de Telefonia
3. Exclusão de Planos de Telefonia

4. Cadastro de Tarifas
5. Edição de Tarifas
6. Exclusão de Tarifas


## Instalação das dependências

_Após fazer a copia do repositório executar o comando abaixo para fazer download de todos as dependncias_^

> NPM i

## Rodando a migrations

_Para criação do banco de dados será necessário executar o comando abaixo_^

> NPM run typeorm migration:run

-   Tarifas_CreateTable : Criação da tabela de Tarifas
-   Planos_CreateTable : Criação da tabela de Planos
-   MockTarifas: Inserção de Tarifas no banco de dados
-   MockPlanos: Inserção de Planos no banco de dados

## Rodando o Projeto

_O projeto deverá ser rodado pelo comando abaixo_^

> NPM run dev:server
> O servidor será iniciado em : http://localhost:3031

## EndPoints

### Planos

### 1. Busca todos planos

> _[get] /Api/Planos_

---

### 2. Busca um plano especifico

-   Parametros
    { id: string }
    > _[get] /Api/Planos/:Id_

---

### 3. Criação de plano

> _[post] /Api/Planos_

-   Body
    {
    "nome": string,
    "franquia": number,
    "ativo": boolean
    }

---

### 4. Atualização de plano

-   Parametros
    { id: string }
-   Body
    {
     "nome": string,
    "franquia": number,
    "ativo": boolean
    }
    > _[put] /Api/Planos/:Id_

---

### 5. Delete um plano

> _[delete] /Api/Planos/:Id_

-   Parametros
    { id: string }

---
### Tarifas

### 1. Busca todas tarifas

> _[get] /Api/Tarifas_

---

### 2. Busca uma tarifa especifico

-   Parametros
    { id: string }
    > _[get] /Api/Tarifas/:Id_

---

### 3. Criação de tarifa

> _[post] /Api/Tarifas_

-   Body
    {
    "origem": string,
    "destino": string,
    "valor": number,
    "ativo": boolean
    }

---

### 4. Atualização de tarifa

-   Parametros
    { id: string }
-   Body
    {
    "origem": string,
    "destino": string,
    "valor": number,
    "ativo": boolean
    }
    > _[put] /Api/Tarifas/:Id_

---

### 5. Delete uma tarifa

> _[delete] /Api/Tarifas/:Id_

-   Parametros
    { id: string }

---
### 6. Busca todas as origens

    > _[get] /Api/Origens

---
### 7. Busca todos destinos de uma origem específica

-   Parametros
    { origem: string }

    > _[get] /Api/Tarifas/destinos/:origem_

---
### 8. Busca o valor específico de uma origem e destino

-   Parametros
    { origem: string,
			destino: string }

    > _[get] /Api/Tarifas/valor/:origem/:destino_

---
## Testes

_Para a realização dos testes é necessário utilizar o comando abaixo_^

> NPM test

> O Documento abaixo refere ao roteiro de testes.
> [Documento](__tests__/__roteiros__/__index.md)
