import api from '../../main/services/api'
import { ITarifa, ITarifas } from '../../common/interfaces/tarifas'

const getAll = async () => {
    return api
        .get('/tarifas')
        .then(({ data }: { data: ITarifas }) => {
            return data
        })
        .catch((error) => {
            return error
        })
}

const getOrigens = (): ITarifa[] | any => {
    return api
        .get('/tarifas/origens')
        .then(({ data }: { data: ITarifas }) => {
            return data.list.map((dados) => dados.origem)
        })
        .catch((error) => {
            return error
        })
}

const getDestinos = (origem: string) => {
    return api
        .get(`/tarifas/destinos/${origem}`)
        .then(({ data }: { data: ITarifas }) => {
            return data.list.map((dados) => dados.destino)
        })
        .catch((error) => {
            return error
        })
}
const getValorTarifa = (origem: string, destino: string) => {
    return api
        .get(`/tarifas/valor/${origem}/${destino}`)
        .then(({ data }: { data: ITarifa[] }) => {
            return data[0].valor
        })
        .catch((error) => {
            return error
        })
}

export default {
    getAll,
    getOrigens,
    getDestinos,
    getValorTarifa,
}
