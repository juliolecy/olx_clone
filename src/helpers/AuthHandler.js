import Cookies from "js-cookie";

export const isLogged = () =>{
    let token = Cookies.get('toker')
    return (token) ? true : false
}