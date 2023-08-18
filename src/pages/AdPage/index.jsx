import React, { useEffect, useState } from 'react'
import * as k from './styles'
import { PageContainer } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import AdItem from '../../components/partials/AdItem'
import { BsChat } from 'react-icons/bs'
const Page = () => {
    const api = OlxAPI()
    const { id } = useParams()

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({})

    useEffect(() => {
        const getAdInfo = async (hash) => {
            const json = await api.getAd(hash, true)
            setAdInfo(json);
            setLoading(false)
        }
        getAdInfo(id);
        console.log(adInfo)
    }, [])

    const formatDate = (date) => {
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

            <k.Content>
                {/* ESQUERDA */}
                <div className="content--left">
                    {adInfo.title && <h2>{adInfo.title}</h2>}
                    <div className="ad--image">
                        {adInfo.images && adInfo.images.length > 0 &&
                            <Slide>
                                {adInfo.images.map((img, index) =>
                                    <div className='each-slide' key={index}>
                                        <img src={img} alt='' />
                                    </div>)}
                            </Slide>
                        }
                    </div>
                </div>
                        {/* DIREITA */}
                <div className="content--right">
                    <div className="price--container">
                        <svg width="24" height="64" className="sc-VigVT fyGuQe" viewBox="0 0 24 64"><path fill="#6e0ad6" d="M22.557 0h1.442v64h-1.442a8 8 0 01-6.84-3.851l-14.557-24a8 8 0 010-8.298l14.557-24A8 8 0 0122.557 0z"></path></svg>
                            {adInfo.priceNegotiable &&
                        <div className="price">
                                'Preço Negociável'
                                </div>
                            }
                            {!adInfo.priceNegotiable && adInfo.price &&
                                <div className='price'>
                                    Preço:
                                    <span>R$ {adInfo.price}</span>
                                </div>
                            }

                    </div>

                    <div className="ad--info">
                        {adInfo.title &&
                            <h2>{adInfo.title}</h2>
                        }

                        <div className="buttons">
                            <button className="buy">
                                Comprar online
                            </button>

                            <button className="chat">
                                <BsChat /> Chat
                            </button>
                        </div>

                        {adInfo.dateCreated &&
                            <small>Criado em {formatDate(adInfo.dateCreated)}</small>}
                    </div>
                </div>
            </k.Content>

  
        </PageContainer>
    )
}

export default Page;