import React from 'react'
import * as k from './styles'
import { PageContainer, PageTitle } from '../../components/MainComponents'

const Page = ()=>{
    return (    
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <k.PageArea>    
            <form>
                <label className='area'>
                    <div className='area--title'>E-mail</div>
                    <div className='area--input'>
                        <input type="email" />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Senha</div>
                    <div className='area--input'>
                        <input type="password" />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Lembrar senha</div>
                    <div className='area--input'>
                        <input type="checkbox" />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'></div>
                    <div className='area--input'>
                        <button>Login</button>
                    </div>
                </label>
            </form>
            </k.PageArea>
        </PageContainer>

    )
}

export default Page