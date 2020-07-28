import React from 'react'
import css from './HouseList.module.css'

const HouseList = (props) => {

	const streliza = props.streliza.map((i) => {
		return (
			<div className={css.item}>
				{i.street + ', ' + i.num}
			</div>
		)
	})

	const semiluki = props.semiluki.map((i) => {
		return (
			<div className={css.item}>
				{i.street + ', ' + i.num}
			</div>
		)
	})

	const voronezh = props.voronezh.map((i) => {
		return (
			<div className={css.item}>
				{i.street + ', ' + i.num}
			</div>
		)
	})

	return (
		<div className={css.wrapper}>
			<div className={css.column}>
				<div className={css.column_title}>
					Стрелица
				</div>
				{streliza}
			</div>
			<div className={css.column}>
				<div className={css.column_title}>
					Воронеж
				</div>
				{voronezh}
			</div>
			<div className={css.column}>
				<div className={css.column_title}>
					Семилуки
				</div>
				{semiluki}
			</div>
		</div>
	)
}

export default HouseList
