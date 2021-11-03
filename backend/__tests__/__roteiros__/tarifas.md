# ROTEIRO DE TESTES - Usuários
> [[Voltar]](__index.md)
***
>Esse roteiro orienta a sequência e quais testes devem ser realizados

---

## **Tarifas**

### Teste de Respositorios
*Testes no respositorios são testes realizados diretamente no banco de dados.*

### 1. Create
    1.1 Não deve inserir um nova tarifa se ele não tiver todos os campos obrigatórios
    1.2 Deve inserir um nova tarifa
### 2. Find
    2.1 Não deve receber uma tarifa com id inválido
    2.2 Deve obter uma tarifa com id valido
### 3. Remove
    3.1 Não deve remover uma tarifa com id inválido ou nulo
    3.2 Deve remover uma tarifa com id válido

***
