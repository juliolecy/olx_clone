import React, { useState } from 'react'
import * as k from './styles'
import {PageContainer} from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'

const Page = ()=> {
    const api = OlxAPI();

    return (    
        <>
            <k.SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type="text" name='q' placeholder='O que você procura' />
                            <select name="state"></select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'>

                    </div>
                </PageContainer>
            </k.SearchArea>
        
        <PageContainer>
            <k.PageArea>    
                
            
            </k.PageArea>
        </PageContainer>
    </>
    )
}

export default Page