import React, { useEffect, useState } from 'react'
import * as k from './styles'
import {PageContainer} from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import AdItem from '../../components/partials/AdItem'
const Page = ()=> {
    const api = OlxAPI()
    const {id} = useParams()

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({})

    useEffect(()=>{
        const getAdInfo = async(hash)=>{
            const json = await api.getAd(hash, true)
            setAdInfo(json);
            setLoading(false)
        }
        getAdInfo(id);
    },[])

    const formatDate = (date) =>{
        let cDate = new Date(date);
        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'novembro', 'dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }
    
    return (    
       
<PageContainer>
    {adInfo.category &&
    <k.BreadChumb>
        Você está aqui:
        <Link to='/'>Home</Link>
        /
        <Link to={`/ads?state=${adInfo.stateName}`}> {adInfo.stateName}</Link>
        /
        <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
        / {adInfo.title}
    </k.BreadChumb>
    }
    <k.PageArea>    
        <div className='leftSide'>
            <div className='box'>
                <div className='adImage'>
                {loading && <k.Fake height={300}/>}
                {adInfo.images &&
                    <Slide>
                        {adInfo.images.map((img, index)=> 
                        <div className='each-slide' key={index}>
                            <img src={img} alt=''/>
                        </div>)}
                    </Slide>
                }
                </div>

                <div className='adInfo'>
                    <div className='adName'> {loading && <k.Fake height={20}/>}
                    {adInfo.title && 
                        <h2>{adInfo.title}</h2>
                    }
                    {adInfo.dateCreated &&
                        <small>Criado em {formatDate(adInfo.dateCreated)}</small>}
                </div>

                <div className='adDescription'> {loading && <k.Fake height={100}/>}
                    {adInfo.description}
                    <hr />
                    {adInfo.views && 
                    <small>Visualizações: {adInfo.views}</small>}
                </div>
                </div>
            </div>
        </div>      
        <div className='rightSide'>
                <div className='box box--padding'>
                {loading && <k.Fake height={20}/>}
                {adInfo.priceNegotiable &&
                    'Preço Negociável'
                }
                {!adInfo.priceNegotiable && adInfo.price &&
                    <div className='price'>
                        Preço:
                        <span>R$ {adInfo.price}</span>
                        </div>
                }
                </div>
                {loading && <k.Fake height={20}/>}
                {adInfo.userInfo && 
                <>
                <a href={`mailto:${adInfo.userInfo.email}`} className='contactSellerLink' tanger='_blank'>Fale com o vendedor</a>
                <div className='box createdBy  box--padding'>
                    <strong>{adInfo.userInfo.name}</strong>
                    <small>Email: {adInfo.userInfo.email}</small>
                    <small>Estado: {adInfo.stateName}</small>
                </div>
                </>
                }
        </div>    

    </k.PageArea>

    <k.OthersArea>
        {adInfo.others &&
        <>
            <h2>Outras ofertas do vendedor</h2>
            <div className='list'>
                {adInfo.others.map((item, index)=>(
                    <AdItem key={index} data={item}/>
                    ))}
            </div>
        </>}  
    </k.OthersArea>
</PageContainer>
)
}

export default Page;