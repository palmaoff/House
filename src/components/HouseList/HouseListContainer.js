import { connect } from 'react-redux'
import HouseList from './HouseList'

let mapStateToProps = (state) => {
	return {
		streliza: state.houses.streliza,
		voronezh: state.houses.voronezh,
		semiluki: state.houses.semiluki
	}
}

const HouseListContainer = connect(mapStateToProps)(HouseList)

export default HouseListContainer
