import React from 'react'
import css from './Header.module.css'

const Header = () => {
	return (
		<div className={css.header}>
			<div className={css.logo}>
				<a href="#">logo</a>
			</div>
			<div className={css.nav_container}>
				<div className={css.nav}><a href="#">Главная</a></div>
				<div className={css.nav}><a href="#">Дома</a></div>
				<div className={css.nav}><a href="#">Контакты</a></div>
			</div>
		</div>
	)
}

export default Header
