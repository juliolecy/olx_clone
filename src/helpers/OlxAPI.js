const BASEAPI = 'http://alunos.b7web.com.br:501'
import Cookies from 'js-cookie'
import QueryString from 'qs' 

const apiFetchPost = async (endpoint, body) =>{
    if(!body.token){
        let token = Cookies.get('token')
        if(token){
            body.token = token
        }
    }


    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const json = await res.json()

    if(json.notallowed){
        window.location.href = '/signin';
        return
    }
    return json;
}

const OlxAPI = {

    login: async (email, password) =>{
        // webservice
        const json = await apiFetchPost('/user/signin',{email, password})
        return json
    },
    register: async(name, email, password, stateLoc)=>{
        const json = await apiFetchPost('/user/signup/',
        {name,email, password, state:stateLoc}
        )
        return json;
    },
    getStates: async()=>{
        const json = await apiFetchGet('/states');
        return json.states
    }

}

export default ()=>OlxAPI;

const apiFetchGet = async (endpoint, body = []) =>{
    if(!body.token){
        let token = Cookies.get('token')
        if(token){
            body.token = token
        }
    }


    const res = await fetch(`${BASEAPI+endpoint}?${QueryString.stringify(body)}`)
    const json = await res.json()

    if(json.notallowed){
        window.location.href = '/signin';
        return
    }
    return json;
}
