import React, { Component } from 'react';
import Filters from './Filters';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';



export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <Link to={'/'}>
                        <img className="logo__image" src={logo} alt=""/>
                    </Link>
                </div>
            </header>
        );
    }
}

