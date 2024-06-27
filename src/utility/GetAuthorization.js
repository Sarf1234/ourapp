import Cookies from 'js-cookie';
const GetAuthorization = ( ) =>{
    console.log('Bearer '+Cookies.get('authToken'))
     return 'Bearer '+Cookies.get('authToken');
}

export default GetAuthorization;