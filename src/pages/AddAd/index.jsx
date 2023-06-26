import React, { useEffect, useRef, useState } from 'react'
import * as k from './styles'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'
import MaskedInput from 'react-text-mask'
import { createNumberMask } from 'text-mask-addons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Page = ()=> {

    const api = OlxAPI();
    const fileField = useRef()
    const history = useHistory()
    const [categories, setCategories] = useState([])

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [priceNegotiable, setPriceNegotiable] = useState('')
    const [desc, setDesc] = useState('')
    const [disabled, setDisabled]= useState(false);
    const [error, setError] = useState('')

    useEffect(()=>{
        const getCategories = async ()=>{
            const cats = await api.getCategories()
            setCategories(cats)
        }
        getCategories();
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisabled(true);
        setError('')
       let errors = [];
       
       if(!title.trim()){
        errors.push('Sem título')
       }

       if(!category){
        errors.push('Sem categoria')
       }

       if(errors.length ===0){
            const fData = new FormData();
            fData.append('title', title)
            fData.append('price', price)
            fData.append('priceneg', priceNegotiable)
            fData.append('desc',desc )
            fData.append('cat',category )

            if(fileField.current.files.length > 0){
                for(let i =0; i<fileField.current.files.length; i++){
                    fData.append('img', fileField.current.files[i])
                }
            }

            const json = await api.addAd(fData)
            if(!json.error){
                history.push(`/ad/${json.id}`)
                return
            } else {
                setError(json.error)
            }

       } else{
        setError(errors.join("\n"));
       }

       setDisabled(false)

    }

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal:true,
        decimalSymbol: ','
    })
    
    return (    
        <PageContainer>
            <PageTitle>Postar um anúncio</PageTitle>
            <k.PageArea>    
                {error && 
                <ErrorMessage>{error}</ErrorMessage>
                }

            <form onSubmit={handleSubmit}>
                <label className='area'>
                    <div className='area--title'>Titulo</div>
                    <div className='area--input'>
                        <input disabled={disabled} 
                        type="text" 
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        required
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Categoria</div>
                    <div className='area--input'>
                        <select disabled={disabled}
                                onChange={e=>setCategory(e.target.value)}
                                required>
                                    <option></option>
                                    {categories && categories.map((item, index)=>
                                    <option key={index} value={item._id}>{item.name}</option>)}
                                </select>
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Preço</div>
                    <div className='area--input'>
                        <MaskedInput
                            mask={priceMask}
                            placeholder='R$ '
                            disabled={disabled || priceNegotiable}
                            value={price}
                            onChange={e=>setPrice(e.target.value)}
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area--title'>Preço negociável</div>
                        <input type="checkbox" 
                        disabled={disabled} 
                        checked={priceNegotiable} 
                        onChange={e=>setPriceNegotiable(!priceNegotiable)}/>
                </label>

                <label className='area'>
                    <div className='area--title'>Descrição</div>
                        <textarea 
                        disabled={disabled} value={desc} 
                        onChange={e=>setDesc(e.target.value)}></textarea>
                </label>

                <label className='area'>
                    <div className='area--title'>Imagens</div>
                        <input 
                        type="file"
                        disabled={disabled}
                        multiple
                        ref={fileField} />
                </label>


                <label className='area'>
                    <div className='area--title'></div>
                    <div className='area--input'>
                        <button disabled={disabled}>Adicionar anúncio</button>
                    </div>
                </label>
            </form>
            </k.PageArea>
        </PageContainer>

    )
}

export default Page