import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './logout';
import classNames from 'classnames'

const NavBar = () => {

    const homeClass =  classNames({
      'active': location.pathname === '/home',
    })
    const searchClass =  classNames({
      'active': location.pathname.match(/^\/search/),
    })
  
    return (

    <div className='topnav'>
        <img src="../assets/images/star-wars.png" />
        <section className='topbar'>
            <ul  className='topnav nav-right'>
                <li>
                    <a>ABOUT</a>
                </li>
                <Logout/>
            </ul>
        </section>
    </div>
    )
}

export default NavBar
