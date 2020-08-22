import React from 'react'
import css from './Maps.module.css'
import { YMaps, Map } from 'react-yandex-maps'
// import Placemark from 'react-yandex-maps'

const mapData = {
	center: [55.751574,37.573856],
	zoom: 5,
};

// const coordinates = [
// 	[55.684758,37.738521],
// 	[57.684758,39.738521]
// ];

const Maps = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.title}>
				Офисы:
			</div>
			<div className={css.map_container}>
				<YMaps>
					<div className={css.map}>
						<div className={css.map_title}>
							Стрелица
					</div>
						<Map defaultState={mapData}>
							{/* {coordinates.map(coordinate => <Placemark geometry={coordinate} />)} */}
						</Map>
						<div className={css.map_adress}>
							ул. Транспортная д. 14/5 one
					</div>
					</div>
					<div className={css.map}>
						<div className={css.map_title}>
							Воронеж
					</div>
						<Map defaultState={mapData}>
							{/* {coordinates.map(coordinate => <Placemark geometry={coordinate} />)} */}
						</Map>
						<div className={css.map_adress}>
							ул. Транспортная д. 14/5 two
					</div>
					</div>
					<div className={css.map}>
						<div className={css.map_title}>
							Семилуки
					</div>
						<Map defaultState={mapData}>
							{/* {coordinates.map(coordinate => <Placemark geometry={coordinate} />)} */}
						</Map>
						<div className={css.map_adress}>
							ул. Транспортная д. 14/5 original
					</div>
					</div>
				</YMaps>
			</div>
		</div>
	)
}

export default Maps
