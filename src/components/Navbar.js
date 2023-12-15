import React, { Component } from 'react';
import bank from '../Screenshot 2023-11-27 062636.png'



class Navbar extends React.Component {
    render() {
        return (

            <nav class="navbar bg-body-tertiary navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white bg-dark" href="#">
                        <img src={bank} alt="Logo" width="40" height="34" class="d-inline-block align-text-top" />
                        BookinBITS
                    </a>
                    <div>
                        <p class="text-center text-light">ACCOUNT NUMBER:{this.props.account}</p>
                        <p style={{ color: 'white', textAlign: 'center' }}>Tether Avaiable:{this.props.tt} &nbsp;
                            Reward Avaiable:{this.props.rr}
                        </p>
                    </div>
                    <form class="d-flex" role="search">
                        <ul className='navbar-nav px-3'>
                            <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>

                            </li>
                        </ul>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav >
        )
    }
}


export default Navbar;