import React, { Component, PropTypes } from 'react';
import Filters from '../components/Filters';
import ProductsList from '../components/ProductsList';

import '../style.sass';

const data =  require('../data.json');



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            men : true,
            women : true,
            children : false
        }
    }

    showCategoryClick = (categoryName) =>  {

        let key;
        for (key in this.state) {
            if(key == categoryName) {
                this.setState({
                    [key] : !this.state[categoryName]
                });
            }
        }
    };

    showAllCategories = () =>  {
        let key;
        for (key in this.state) {
                this.setState({
                    [key] : true
                });
        }
        console.log('all', this.state);
    };

    countItemsInCategory = (category) => {
        let count = 0;
        data.products.map(function(product, index) {
            if(product.category == category) {
                count++;
            }
        });
        return count;
    };




    render() {
        const products = data.products;
        return (
            <div>
                <Filters categoriesList={data.showCategory}  onClickFilter={this.showCategoryClick} showAllCategories={this.showAllCategories} show={this.state}/>
                {(this.state.men) ? <ProductsList productsList={products} category={"Men"} countItems={this.countItemsInCategory('Men')}/> : ''}
                {(this.state.women) ? <ProductsList productsList={products} category={"Women"} countItems={this.countItemsInCategory('Women')}/> : ''}
                {(this.state.children) ? <ProductsList productsList={products} category={"Children"} countItems={this.countItemsInCategory('Children')}/> : ''}
                {/*<ProductsList productsList={products} />*/}
            </div>
        );
  }
}



