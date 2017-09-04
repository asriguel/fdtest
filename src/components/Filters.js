import React, { Component } from 'react';
import Button from './Button/Button';
import FiltersCategoryItem from './FiltersCategoryItem';
import Dropdown from 'react-dropdown'


export default class Filters extends Component {

    render() {
        let categories = this.props.categoriesList;

        let categoriesTemplate = Array.prototype.map.call(categories, function (item, index) {
            let key;
            for(key in this.props.show){
                if(key == item.name) {
                    return <FiltersCategoryItem onClickFilter={this.props.onClickFilter} show={this.props.show[item.name]} name={item.name} key={index} />
                }
            }
                }, this);

        return (
                <div className="filters">
                    <div className="filters__categories filters__checkboxes">
                        <div className="container">

                            { categoriesTemplate }

                            <Button showAllCategories={this.props.showAllCategories}/>
                        </div>
                    </div>
                    <div className="filters__sort ">
                        <div className="container">
                            <span className="filter__name">Sort by</span>
                            <Dropdown className="filters__sort-dropdown" options={['Price', 'Popularity', 'Newest']}   value="Price" onClick={this.handleChildClick}/>
                            <div className="multifilter">
                                <div className="button-dropdown">
                                        <span className="button multifilter__button">
                                            <span className="multifilter__title">Size</span>
                                            <span className="multifilter__value hidden" />
                                        </span>
                                    <div className="dropdown">
                                        <div className="multifilter__list">
                                            {/*list of options*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

