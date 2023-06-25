import React, { useEffect, useState } from 'react'
import * as k from './styles'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'

                                    const Page = ()=> {

    const api = OlxAPI();
    const [name, setName]=useState('')
    const [stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [disabled, setDisabled]= useState(false);
    const [error, setError] = useState('')
    const [stateList, setStateList] = useState([])

    useEffect(() => {
      const getStates = async()=>{
        const slist = await api.getStates();
        setStateList(slist)
      }
      getStates()
    },[])
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisabled(true);
        setError('')

        if(password !== confirmPassword){
            setError('As senhas devem ser iguais')
            setDisabled(false)
            return
        }
    
        const json = await api.register(name, email, password, stateLoc)

        if(json.error){
            setError(json.error)
        } else {
            doLogin(json.token)
            window.location.href = '/'
        }

        setDisabled(false)
    }

    return (    
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <k.PageArea>    
                {error && 
                <ErrorMessage>{error}</ErrorMessage>
                }

            <form onSubmit={handleSubmit}>

            <label className='area'>
                    <div className='area--title'>Nome completo</div>
                    <div className='area--input'>
                        <input disabled={disabled} 
                        type="text" 
                        value={name} 
                        onChange={e=>setName(e.target.value)}
                        required
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Estado</div>
                    <div className='area--input'>
                        <select required 
                                name="" 
                                id=""
                                value={stateLoc}
                                onChange={e=>setStateLoc(e.target.value)} >
                            <option ></option>
                            {stateList.map((item,index)=>(
                                <option key={index} value={item._id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </label>


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
                        type="password" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                        required
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Confirmar senha</div>
                    <div className='area--input'>
                        <input disabled={disabled} 
                        type="password" 
                        value={confirmPassword} 
                        onChange={e=>setConfirmPassword(e.target.value)} 
                        required
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'></div>
                    <div className='area--input'>
                        <button disabled={disabled}>Fazer cadastro</button>
                    </div>
                </label>
            </form>
            </k.PageArea>
        </PageContainer>

    )
}

export default Page;