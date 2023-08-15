import React, { useState } from 'react'
import * as k from './styles'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'
import Olx from '/public/olx'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const Page = ()=> {

    const api = OlxAPI();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disabled, setDisabled]= useState(false);
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisabled(true);
        setError('')
    
        const json = await api.login(email, password)

        if(json.error){
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
        }
        setDisabled(false);
    }

    return (    
        <k.Container>

            <Olx/>
            <h1>Acesse sua conta</h1>

            {error && 
                <ErrorMessage>{error}</ErrorMessage>
                }

            <form onSubmit={handleSubmit}>
                <h2>Email</h2>
                <div className='area--input'>
                        <input disabled={disabled} 
                        type="email" 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <h2>Senha</h2>
                    <div className='area--input'>
                        <input disabled={disabled} 
                        ype="password" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                        required
                        />
                    </div>

               

                    <div className='remember--password'>
                        <h3>
                        Lembrar senha
                        </h3>
                        
                        <input disabled={disabled} 
                        type="checkbox" 
                        checked={rememberPassword} 
                        onChange={()=>{setRememberPassword(!rememberPassword)}}
                        />
                        </div>
                    

                        <button className='button--login'disabled={disabled}>Login</button>

            </form>

<div className="signup">
    <span>Não tem uma conta?</span>
    <Link to='/signup'>Cadastre-se</Link>
</div>
           
        </k.Container>

    )
}

export default Page