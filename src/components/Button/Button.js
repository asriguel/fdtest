import React, { Component, PropTypes } from 'react';

export default class Button extends Component {


    render() {

        return (
            <button type="button" className="button button_default filters__button" onClick={this.props.showAllCategories}>
                See all products
            </button>
        );
    }
}


