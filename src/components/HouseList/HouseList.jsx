import React from 'react'
import css from './HouseList.module.css'

const HouseList = (props) => {

	const streliza = props.streliza.map((i) => {
		return (
			<div>
				{i.street + ', ' + i.num}
			</div>
		)
	})

	const semiluki = props.semiluki.map((i) => {
		return (
			<div>
				{i.street + ', ' + i.num}
			</div>
		)
	})

	const voronezh = props.voronezh.map((i) => {
		return (
			<div>
				{i.street + ', ' + i.num}
			</div>
		)
	})

	return (
		<div className={css.wrapper}>
			<div className={css.item}>
				Стрелица
				{streliza}
			</div>
			<div className={css.item}>
				Воронеж
				{voronezh}
			</div>
			<div className={css.item}>
				Семилуки
				{semiluki}
			</div>
		</div>
	)
}

export default HouseList
