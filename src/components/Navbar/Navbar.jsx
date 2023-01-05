import React from 'react';
import { NavLink } from 'react-router-dom';
import StyleNavbar from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className="navh">
			<div className={StyleNavbar.wrapLink}>

				{/*	NavLink мы используем вместо тега a, а ключевое 
				слово to мы используем вместо href	*/}

				<NavLink to="/profile" className = { navData => navData.isActive ? StyleNavbar.active : StyleNavbar.wrapLink }>Profile</NavLink>
			</div>
			<div className={StyleNavbar.wrapLink}>
				<NavLink to="/dialogs" className = { navData => navData.isActive ? StyleNavbar.active : StyleNavbar.wrapLink }>Message</NavLink>
			</div>
			<div className={StyleNavbar.wrapLink}>
				<NavLink to="/off" className = { navData => navData.isActive ? StyleNavbar.active : StyleNavbar.wrapLink }>Music</NavLink>
			</div>
			<div className={StyleNavbar.wrapLink}>
				<NavLink to="/off" className = { navData => navData.isActive ? StyleNavbar.active : StyleNavbar.wrapLink }>Setting</NavLink>
			</div>
		</nav>
	);
}

export default Navbar