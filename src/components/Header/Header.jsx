import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import smallPhoto from './../../assets/images/smallPhoto.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <h1>Social Network</h1>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <img src={smallPhoto} alt='small avatar'/>
                        <div>{props.login}</div>
                        <button onClick={props.logout}>Logout</button>
                    </div>
                    : <div className={s.link}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;