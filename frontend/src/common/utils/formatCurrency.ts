const formatCurrencyLocal = (valor: number): string =>
    valor
        .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })
        .replace('R$', '')

export default formatCurrencyLocal
