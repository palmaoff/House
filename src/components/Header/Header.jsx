import React from 'react'
import css from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className={css.header}>
			<div className={css.logo}>
				<a href="/">Полёт</a>
			</div>
			<div className={css.nav_container}>
				<div className={css.nav}><NavLink to="/">Главная</NavLink></div>
				<div className={css.nav}><NavLink to="/houses">Дома</NavLink></div>
				<div className={css.nav}><NavLink to="/contacts">Контакты</NavLink></div>
			</div>
		</div>
	)
}

export default Header
