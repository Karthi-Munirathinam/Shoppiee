import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar row">
            <div className="company col-md-3">Shoppie</div>
            <div className="searchbar col-md-6">
                <span className="searchicon"><SearchIcon /></span>
                <input type="search" className="search-text" placeholder="search..." />
            </div>
            <div className="icons col-md-3">
                <span className="users"><IconButton><PersonOutlineIcon /></IconButton></span>
                <span className="cart"><IconButton><Badge color="secondary" badgeContent={1}>
                    <ShoppingCartIcon />
                </Badge></IconButton></span>
            </div>
        </nav>

    )
}