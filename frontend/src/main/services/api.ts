interface destino {
    destino: string
    valor: number
}
interface IDados {
    origem: string
    destinos: destino[]
}

const Dados = [
    {
        origem: '011',
        destinos: [
            {
                destino: '016',
                valor: 1.9,
            },
            {
                destino: '017',
                valor: 1.7,
            },
            ,
            {
                destino: '018',
                valor: 0.9,
            },
        ],
    },
    {
        origem: '016',
        destinos: [
            {
                destino: '011',
                valor: 2.9,
            },
        ],
    },
    {
        origem: '017',
        destinos: [
            {
                destino: '011',
                valor: 2.7,
            },
        ],
    },
    ,
    {
        origem: '018',
        destinos: [
            {
                destino: '011',
                valor: 1.9,
            },
        ],
    },
]

export default Dados
