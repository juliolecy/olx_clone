import React, { useEffect, useState } from 'react'
import * as k from './styles'
import {PageContainer} from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import AdItem from '../../components/partials/AdItem'

let timer;

const Page = () => {
    const api = OlxAPI();
    const history = useHistory();

    const useQueryString = () =>{
        return new URLSearchParams(useLocation().search)
    }

    const query = useQueryString()

    const [q, setQ] = useState( query.get('q') != null ? query.get('q') : '')
    const[cat, setCat] = useState( query.get('cat') != null ? query.get('cat') : '')
    const [state, setState] = useState( query.get('state') != null ? query.get('state') : '')
    const [adsTotal, setAdsTotal] = useState(0)
    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([])
    const[pageCount, setPageCount] = useState(0)
    const [resultOpacity, setResultOpacity] = useState(1)

    const [warningMessage, setWarningMessage] = useState('Carregando...')
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)

    const getAdsList = async () =>{
        setLoading(true);
        
        let offset = (currentPage-1)*2;

        const json = await api.getAds({
            sort: 'desc',
            limit: 2,
            q, cat, state, 
            offset
        });
        console.log(json)
        setAdList(json.ads)
        setAdsTotal(json.total)
        setResultOpacity(1)
        setLoading(false)
    }

    useEffect(()=>{
        if(adList.length > 0){

            setPageCount(Math.ceil(adsTotal/adList.length)) // Quantidade de páginas
        } else {
            setPageCount(0)
        }

    },[adsTotal])

    useEffect(()=>{
        setResultOpacity(0.3)
        getAdsList();
    },[currentPage])

    useEffect(()=>{
        let queryString = [];
        if(q){
            queryString.push(`q=${q}`)
        }
        if(cat){
            queryString.push(`cat=${cat}`)
        }
        if(state){
            queryString.push(`state=${state}`)
        }

        history.replace({
            search:`?${queryString.join('&')}`
        })

        if ( timer ){
            clearTimeout(timer)
            setResultOpacity(0.3);
            setCurrentPage(1);
        }

        timer = setTimeout(getAdsList, 2000)

       
    },[q, cat, state])

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

    let pagination = [];
    for(let i=0; i<pageCount; i++){
        pagination.push(i);
    }

    return (    
        <PageContainer>
            <k.PageArea>
                <div className='leftSide'>
                    <form method='GET'>
                        <input type='text' 
                            placeholder='O que você procura?'
                            value={q}
                            onChange={e=>setQ(e.target.value)}
                            />

                        <div className='filterName'>Estado:</div>
                            <select name="state" value={state}  onChange={e=>setState(e.target.value)}>
                                <option></option>
                                {stateList.map((item, index)=>
                                <option key={index} value={item.name}>{item.name}</option>)}
                            </select>

                        <div className='filterName'>Categoria:</div>
                        <ul>
                                {categories.map((item, index)=>
                                <li 
                                className={cat == item.slug ? 'categoryItem active' : 'categoryItem'} 
                                key={index}
                                onClick={()=>setCat(item.slug)}
                                >
                                    <img src={item.img} alt=''/>
                                    <span>{item.name}</span>
                                </li>
                                )}
                        </ul>
                    </form>
                </div>
                <div className='rightSide'>
                    <h2>Resultados</h2>

                    {loading && adList.length ===0 &&
                        <div className='listWarning'> Carregando</div>
                    }
                    {!loading && adList.length === 0 &&
                         <div className='listWarning'> Não há resultados</div>
                    }

                    <div className='list' style={{opacity:resultOpacity}}>
                        {adList.map((item, index)=>
                        <AdItem key={index} data={item}/>
                        )}
                    </div>

                    <div className='pagination'>
                        {pagination.map((item, index)=>
                        <div 
                        onClick={()=>setCurrentPage(item)}
                        className={item === currentPage? 'pagItem active' : 'pagItem'}>
                            {item}
                        </div>
                        )}
                    </div>

                </div>

            </k.PageArea>
        </PageContainer>
    )
}

export default Page;