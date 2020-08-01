import React from 'react'
import css from './Contacts.module.css'

const Contacts = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.title}>
				Наши Контакты:
			</div>
			<div className={css.persons}>
				<div className={css.person}>
					<div className={css.img}>
						<img src="#"></img>
					</div>
					<div className={css.position}>
						Директор:
				</div>
					<div className={css.name}>
						Науменко Максим Александрович
				</div>
					<div className={css.phone}>8-915-540-33-99</div>
				</div>
				<div className={css.person}>
					<div className={css.img}>
						<img src="#"></img>
					</div>
					<div className={css.position}>
						Заместитель:
				</div>
					<div className={css.name}>
						Корсун Елена Александровна
				</div>
					<div className={css.phone}>8-915-540-33-99</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
