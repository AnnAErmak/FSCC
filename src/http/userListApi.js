import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode'

export const createUserList = async (list) => {
    const {data} = await $authHost.post('api/list', list)
    return data
}

export const fetchUserList = async () => {
    const {data} = await $host.get('api/list')
    return data
}


