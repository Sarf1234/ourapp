import Cookies from 'js-cookie';
export const CheckAuth= ()=>{
     if(Cookies.get('authToken')) return true;
     else return false;
}