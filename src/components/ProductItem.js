import React, { Component, PropTypes } from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown'

import mapValues from 'lodash/mapValues';

// import * as
import classnames from 'classnames';

export default class ProductItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        size: PropTypes.array

    }

    handleChildClick(e) {
        e.stopPropagation();

        console.log('handleChildClick');
    }



    render () {
        let myProps = this.props;
        let sizeOption, colorOption;

        console.log('size', this.props.color);

        if (this.props.size === undefined) {
            sizeOption = ''
        } else {
            sizeOption =  <Dropdown options={this.props.size}  placeholder="Size" onClick={this.handleChildClick}/>
        }

        if (this.props.color === undefined) {
            colorOption = '';
        } else {
            colorOption =
                Array.prototype.map.call(this.props.color, function (item, index) {
                    return  <li key={index} className={'product__color color_' + item.toLowerCase()}>
                                <span></span>
                                {/*{item}*/}
                            </li>
                }, this);
        }

        // const sizeOption = this.props.size.filter();
        return (
            <div className="col-item-3">
                <div className="products__item product">
                    <div onClick={this.handleChildClick} className="product__dropdown">
                        {sizeOption}
                    </div>
                    <div className="product__color-option">
                        <ul className="product__colors-list">
                            {colorOption}
                        </ul>
                    </div>
                    <Link to={{ pathname: `/products/${this.props.id}`}} className="product__link" onClick={this.handleParentClick}>

                        <div className="product__image">
                            <Img src={require(this.props.image)} />
                        </div>
                        <span className="product__price">{this.props.price}€</span>
                        <span className="product__name">
                            {this.props.name}
                        </span>
                    </Link>
                </div>
            </div>
        );
    }

}
