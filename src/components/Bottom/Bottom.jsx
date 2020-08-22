import React from 'react'
import css from './Bottom.module.css'
import { NavLink } from 'react-router-dom'

const Bottom = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.column}>
				<div className={css.title}>
					Офис в Стрелице
				</div>
				<div className={css.adress}>
					ул. Транспортная д. 14/5
				</div>
				<div className={css.adress}>
					8-915-540-33-99
				</div>
				<div className={css.nav}>
					<NavLink to="/">Главная</NavLink>
				</div>
			</div>
			<div className={css.column}>
				<div className={css.title}>
					Офис в Воронеже
				</div>
				<div className={css.adress}>
					ул. Транспортная д. 14/5
				</div>
				<div className={css.adress}>
					8-915-540-33-99
				</div>
				<div className={css.nav}>
					<NavLink to="/houses">Дома</NavLink>
				</div>
			</div>
			<div className={css.column}>
				<div className={css.title}>
					Офис в Семилуках
				</div>
				<div className={css.adress}>
					ул. Транспортная д. 14/5
				</div>
				<div className={css.adress}>
					8-915-540-33-99
				</div>
				<div className={css.nav}>
					<NavLink to="/contacts">Контакты</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Bottom
