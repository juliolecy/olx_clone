import React, { useEffect, useState } from 'react'
import * as k from './styles'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'
import Olx from '../../../public/olx'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Page = () => {

    const api = OlxAPI();
    const [name, setName] = useState('')
    const [stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('')
    const [stateList, setStateList] = useState([{}])

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('')

        if (password !== confirmPassword) {
            setError('As senhas devem ser iguais')
            setDisabled(false)
            return
        }

        const json = await api.register(name, email, password, stateLoc)
        console.log(json)

        if (json.error) {
            let errormsg = ''
            if(json.error.email){setError(json.error.email.msg)}

            if(json.error.name){setError(json.error.name.msg)}

            

        } else {
            doLogin(json.token)
            window.location.href = '/'
        }

        setDisabled(false)
    }

    return (
        <>
                <k.Container>

<Olx/>
<h1>Cadastre-se</h1>

{error &&
<ErrorMessage >{error}</ErrorMessage>}

<form onSubmit={handleSubmit}>
    <h2>Nome completo</h2>
    <div className='area--input'>
    <input disabled={disabled}
    type="text"
    value={name}
    onChange={e => setName(e.target.value)}
    required
    />
    </div>
    <h2>Estado</h2>
        <div className='area--input'>
        <select required
                                name=""
                                id=""
                                value={stateLoc}
                                onChange={e => setStateLoc(e.target.value)} >
                                <option></option>
                             {stateList.map((i,k)=>
                                <option key={k}value={i._id}>{i.name}</option>
                                )}

                            </select>
        </div>
        <h2>Email</h2>
        <div className='area--input'>
                            <input disabled={disabled}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <h2>Senha</h2>
                        <div className='area--input'>
                            <input disabled={disabled}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <h2>Confirmar senha</h2>
                        <div className='area--input'>
                            <input disabled={disabled}
                                type="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                            </div>
   

    
        

            <button className='button--login'>Fazer cadastro</button>

</form>

<div className="signip">
<span>Já tem uma conta?</span>
<Link to='/signup'>Faça login</Link>
</div>

</k.Container>
{/* 

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
                                onChange={e => setName(e.target.value)}
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
                                onChange={e => setStateLoc(e.target.value)} >
                                <option></option>
                             {stateList.map((i,k)=>
                                <option key={k}value={i._id}>{i.name}</option>
                                )}

                            </select>
                        </div>
                    </label>


                    <label className='area'>
                        <div className='area--title'>E-mail</div>
                        <div className='area--input'>
                            <input disabled={disabled}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
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
                                onChange={e => setPassword(e.target.value)}
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
                                onChange={e => setConfirmPassword(e.target.value)}
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
        </PageContainer> */}
        </>

    )
}

export default Page;