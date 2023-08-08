import React, { useEffect, useState } from 'react'
import * as k from './styles'
import {PageContainer} from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AdItem from '../../components/partials/AdItem'

const Page = ()=> {
    const api = OlxAPI();

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([])

    useEffect(()=>{
        const getStates = async () =>{
            const slist = await api.getStates();
            setStateList(slist)
        }
        getStates()
    }, [])

    useEffect(()=>{
        const getCategories = async () =>{
            const cats = await api.getCategories();
            setCategories(cats)
        }
        getCategories();
    }, [])

    useEffect(()=>{
        const getRecentAds = async () =>{
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads)
        }
        getRecentAds();
    }, [])
    

    return (    
        <>
            <k.SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type="text" name='q' placeholder='O que você procura' />
                            <select name="state">
                                {stateList.map((item, index)=>(
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'>
                                    {categories.map((item, index)=>(
                                        <Link key={index}
                                            to={`/ads?cat=${item.slug}`}
                                            className='categoryItem'>
                                             <img src={item.img} alt=''/>
                                            <span>{item.name}</span>
                                        </Link>
                                    ))}
                    </div>
                </PageContainer>
            </k.SearchArea>
        
        <PageContainer>
            <k.PageArea>    
                    <h2>Anúncios recents</h2>
                    <div className='list'>
                        {adList.map((item, index)=>(
                            <AdItem key={index} data={item}/>
                        ))}
                    </div>
                    <Link to='/ads' className='seeAllLink'>Ver todos</Link>

                    <hr />

                    texto descritivo
            </k.PageArea>
        </PageContainer>
    </>
    )
}

export default Page