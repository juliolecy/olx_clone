import React from 'react';
import { Link } from 'react-router-dom';
import * as k from './styles';

export default (props) => {

    let price = props.data.priceNegotiable ? 'Preço Negociável' : `R$ ${props.data.price}`

    return (
        <k.Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt="" />
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">{price}</div>
            </Link>

        </k.Item>
    );
}