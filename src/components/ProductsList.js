/**
 * Created by Рика on 26.08.2017.
 */
import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/mapValues';
import ProductItem from './ProductItem';
import OwlCarousel from 'react-owl-carousel2';




export default class ProductsList extends Component {
    static propTypes = {
        productsList: PropTypes.array.isRequired
        // products: productsDataP
    }
    constructor(props) {
        super(props);

    }

    render () {
        const data = require('../data.json');
        const category = this.props.category;

        const options = {
            items: 3,
            nav: true,
            rewind: false,
            autoplay: false,
            slideBy: 3,
            mouseDrag: false,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive : {
                0 : {
                    items : 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }

            }
        };

        const events = {
            onDragged: function(event) {},
            onChanged: function(e) {

                let count = e.page.count;

                let currCounter =    e.currentTarget.previousSibling;
                if(count > 1) {
                    currCounter.innerHTML = '<span class="counter__index">' +
                                            (e.page.index + 1)
                                            + '</span>'
                                            + ' <span class="counter__delimiter">/</span> '
                                            + '<span class="counter__total"> '
                                            + count
                                            + '</span>';
                    console.log(e.item.index, e.page.size);
                }
            },
            onInitialized: function (e) {

                let count = parseInt(e.item.count / e.page.size) + 1;
                if(count > 1) {

                    let currCounter =   e.currentTarget.previousSibling;
                    currCounter.innerHTML = '<span class="counter__index">' +
                                            '1'
                                            + '</span>'
                                            + ' <span class="counter__delimiter">/</span> '
                                            + '<span class="counter__total"> '
                                            + count
                                            + '</span>';
                }

            }
        };

        return (
            <section className="products">
                <div className="container">
                    <div className="products__category-line">
                        <h3 className="products__title">
                            <span className="title__text">
                                {category}
                            </span>
                        </h3>
                        <div className="row">
                            <div className="products__slider slider">
                                <p className="slider__counter counter"></p>
                                <OwlCarousel options={options} events={events} >
                                {
                                    this.props.productsList.map(function(product, index){
                                        //по категории
                                        if(product.category === category) {
                                            return (<ProductItem
                                                key={index}
                                                id={product.id}
                                                name={product.name}
                                                price={product.price}
                                                image={product.image}
                                                size={product.size}
                                                color={product.color}
                                            />);
                                        }
                                    })
                                }
                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }

}
