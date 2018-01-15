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
                {window.location.pathname != "/home" && 
                <li>
                    <Link to='/home'>HOME</Link>
                </li>
                }
                {   !window.localStorage.getItem("status") && window.location.pathname != "/" &&
                    <li>
                        <Link to='/'>LOGIN</Link>
                    </li>
                }
                <Logout/>
            </ul>
        </section>
    </div>
    )
}

export default NavBar
