import React, { useEffect, useRef, useState } from 'react'
import * as k from './styles'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import OlxAPI from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'
import MaskedInput from 'react-text-mask'
import { createNumberMask } from 'text-mask-addons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Olx from '../../../public/olx'
const Page = () => {

    const api = OlxAPI();
    const fileField = useRef()
    const history = useHistory()
    const [categories, setCategories] = useState([])

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [priceNegotiable, setPriceNegotiable] = useState('')
    const [desc, setDesc] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories()
            setCategories(cats)
        }
        getCategories();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('')
        let errors = [];

        if (!title.trim()) {
            errors.push('Sem título')
        }

        if (!category) {
            errors.push('Sem categoria')
        }

        if (errors.length === 0) {
            const fData = new FormData();
            fData.append('title', title)
            fData.append('price', price)
            fData.append('priceneg', priceNegotiable)
            fData.append('desc', desc)
            fData.append('cat', category)

            if (fileField.current.files.length > 0) {
                for (let i = 0; i < fileField.current.files.length; i++) {
                    fData.append('img', fileField.current.files[i])
                }
            }

            const json = await api.addAd(fData)
            if (!json.error) {
                history.push(`/ad/${json.id}`)
                return
            } else {
                setError(json.error)
            }

        } else {
            setError(errors.join("\n"));
        }

        setDisabled(false)

    }

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    })

    return (
        <>
            <k.Container>

                <Olx />
                <h1>Poste um anúncio</h1>

                {error &&
                    <ErrorMessage >{error}</ErrorMessage>}

                <form onSubmit={handleSubmit}>
                    <h2>Título</h2>
                    <div className='area--input'>
                        <input disabled={disabled}
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <h2>Categoria</h2>
                    <div className='area--input'>
                        <select disabled={disabled}
                            onChange={e => setCategory(e.target.value)}
                            required>
                            <option></option>
                            {categories && categories.map((item, index) =>
                                <option key={index} value={item._id}>{item.name}</option>)}
                        </select>
                    </div>
                    <h2>Preço</h2>
                    <div className='area--input'>
                        <MaskedInput
                            mask={priceMask}
                            placeholder='R$ '
                            disabled={disabled || priceNegotiable}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <h2>Preço negociável</h2>
                    <div className='area--input'>
                        <input type="checkbox"
                            disabled={disabled}
                            checked={priceNegotiable}
                            onChange={e => setPriceNegotiable(!priceNegotiable)} />
                    </div>

                    <h2>Descrição</h2>
                    <textarea
                        disabled={disabled} value={desc}
                        onChange={e => setDesc(e.target.value)}></textarea>

                    <h2>Imagens</h2>
                    <input
                        type="file"
                        disabled={disabled}
                        multiple
                        ref={fileField} 
                        required/>





                    <button className='button--login'>Adicionar anúncio</button>

                </form>
            </k.Container>
        </>
    )
}

export default Page