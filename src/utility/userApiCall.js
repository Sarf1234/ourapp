'use server'
import handleApiRequest from '../utility/ApiCall'

const userData = async()=>{
    const data = await handleApiRequest('/user')
    return data;
}

export { userData }