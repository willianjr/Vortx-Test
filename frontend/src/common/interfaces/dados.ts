export interface IPlanos {
    nome: string
    franquia: number
}
export interface ILocal {
    destino: string
    valor: number
}

export interface ILocais {
    origem: string
    destinos: ILocal[]
}
