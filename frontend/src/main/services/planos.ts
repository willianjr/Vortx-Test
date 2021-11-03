import api from './api'
import { IPlanos } from '../../common/interfaces/planos'

const getAll = async () => {
    return api
        .get('/planos')
        .then(({ data }: { data: IPlanos }) => {
            return data
        })
        .catch((error) => {
            return error
        })
}

export default {
    getAll,
}
