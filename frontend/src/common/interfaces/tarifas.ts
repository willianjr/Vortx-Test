export interface ITarifas {
    totalRegister: string
    list: ITarifa[]
}
export interface ITarifa {
    destino: string
    origem: string
    valor: number
}
