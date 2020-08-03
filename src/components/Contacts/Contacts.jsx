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
					<img src="http://lorempixel.com/250/250/sports/1" className={css.feat_img}></img>
					<div className={css.description}>
						<div className={css.position}>
							Директор:
						</div>
						<div className={css.name}>
							Науменко Максим Александрович
						</div>
						<div className={css.phone}>8-915-540-33-99</div>
					</div>
				</div>
				<div className={css.person}>
					<img src="http://lorempixel.com/250/250/sports/1" className={css.feat_img}></img>
					<div className={css.description}>
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
		</div>
	)
}

export default Contacts
