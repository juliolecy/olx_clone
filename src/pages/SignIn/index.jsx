import React, { useState } from 'react'
import * as k from './styles'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'

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
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <k.PageArea>    
                {error && 
                <ErrorMessage>{error}</ErrorMessage>
                }

            <form onSubmit={handleSubmit}>
                <label className='area'>
                    <div className='area--title'>E-mail</div>
                    <div className='area--input'>
                        <input disabled={disabled} 
                        type="email" 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
                        required
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Senha</div>
                    <div className='area--input'>
                        <input disabled={disabled} 
                        ype="password" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                        required
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Lembrar senha</div>
                    <div className='area--input'>
                        <input disabled={disabled} 
                        type="checkbox" 
                        checked={rememberPassword} 
                        onChange={()=>{setRememberPassword(!rememberPassword)}}
                    
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'></div>
                    <div className='area--input'>
                        <button disabled={disabled}>Login</button>
                    </div>
                </label>
            </form>
            </k.PageArea>
        </PageContainer>

    )
}

export default Page