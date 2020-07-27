import React from 'react'
import css from './MainBlock.module.css'

const MainBlock = () => {
	return (
		<div className={css.container}>
			<div className={css.block}>
				<div className={css.image}><img src={require("../../dom.png")}></img></div>
				<div className={css.text}>
					<div className={css.title}>
						Управляющая Компания "Полёт"
					</div>
					<div className={css.body}>
						<div className={css.part}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						</div>
						<div className={css.part}>
							ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit
							esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
						</div>
						<div className={css.part}>
							occaecat cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainBlock
