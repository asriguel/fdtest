import React, { Component } from 'react';


export default class FiltersCategoryItem extends Component {
    render() {
        return <label className={this.props.show ? 'filters__checkbox-label filters__checkbox-label_active' : 'filters__checkbox-label'} htmlFor={this.props.name} >
            <input type="checkbox" id={this.props.name} className="filters__checkbox" onChange={this.props.onClickFilter.bind(null, this.props.name)}
                   checked={this.props.show }/>
            { this.props.name }

        </label>
    }
}