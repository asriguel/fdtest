import React, { Component, PropTypes } from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';





export default class ProductPage extends Component {
    render() {
        // это фигня
        const data = require('../data.json');

        let currentId = this.props.match.params.id;
        let currentProduct = data.products[currentId];
        console.log()
        let colorOption, sizeOption;
        if (currentProduct.color === undefined) {
            colorOption = '';
        } else {
            colorOption =
                Array.prototype.map.call(currentProduct.color, function (item, index) {
                    return  <li key={index} className={'one-product__colors-item product__color color_' + item.toLowerCase()}>
                        <span></span>
                    </li>
                }, this);
        }

        let sizes = currentProduct.size ? currentProduct.size.join() : '';

        return (
            <div>
                <div className="breadcrumbs">
                    <div className="container">
                        <Link to={'/'} className="breadcrumbs__link link_back">Back to catalog</Link>
                    </div>
                </div>
                <div className="container">
                    <h3 className="one-product__title products__title">
                        <span>
                            {currentProduct.name}
                        </span>
                    </h3>
                    <div className="one-product__wrapper">
                        <div className="one-product__container">
                            <div className="one-product__info">
                                <div className="one-product__price info__line">
                                    <span className="text-right">{currentProduct.price}€</span><span>Price</span>
                                </div>
                                <div className="one-product__colors info__line">
                                    <ul className="one-product__colors-list list-style_reset text-right">
                                        {colorOption}
                                    </ul>
                                    {colorOption ? <span>Colors</span> : ''}
                                </div>
                                <div className="one-product__price info__line">
                                    <span className="text-right">{currentProduct.size ? sizes  : '' }</span>
                                    {currentProduct.size ? <span>Sizes</span>  : '' }
                                </div>
                            </div>

                            <div className="one-product__image">
                                {currentProduct.imageBig ? <Img src={require(currentProduct.imageBig)} /> : <Img src={require(currentProduct.image)} />}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
