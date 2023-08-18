import React, { useEffect, useRef, useState } from 'react'
import * as k from './styles'
import { PageContainer } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AdItem from '../../components/partials/AdItem'
import Olx from '../../../public/olx'
import { RxExit } from 'react-icons/rx'
import { GoLocation } from 'react-icons/go'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { doLogout, isLogged } from '../../helpers/AuthHandler'
import Loading from '../../components/partials/Loading'
import Banner from '../../assets/banner.png'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'
const Page = () => {
    const api = OlxAPI();
    const carousel = useRef(null)
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([])

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist)
        }
        getStates()
    }, [])

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats)
        }
        getCategories();
    }, [])

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads)
        }
        getRecentAds();
    }, [])
    useEffect(() => { }, [])

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <>
    <k.Banner>
        <div className="banner">

        </div>
    </k.Banner>

    <k.Slider>
        <div className="arrow left">
            <BiSolidChevronLeft onClick={handleLeftClick} />
        </div>

        <div className="carousel" ref={carousel}>

        {categories.length === 0 && <Loading />}

        {categories.length > 0 &&
            categories.map((item, index) => (
                <Link key={index}
                    to={`/ads?cat=${item.slug}`}
                    className='categoryItem'>
                    <img src={item.img} alt='' />
                    <span>{item.name}</span>
                </Link>
            ))
        }
        </div>

        <div className="arrow right">
            <BiSolidChevronRight onClick={handleRightClick} />
        </div>
    </k.Slider>

    <PageContainer>
        <k.PageArea>
            <h2>Anúncios recentes</h2>

            {adList.length === 0 && <Loading />}

            {adList.length > 0 &&
                <>
                    <div className='list'>
                        {adList.map((item, index) => (
                            <AdItem key={index} data={item} />
                        ))}
                    </div>
                </>
            }
            <Link to='/ads' className='seeAllLink'>Ver todos</Link>

        </k.PageArea>
    </PageContainer>
        </>
    )
}

export default Page