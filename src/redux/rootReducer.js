import {combineReducers} from 'redux'
import { addressReducer } from './Reducers/addressReducer'

const rootReducer=combineReducers({
address: addressReducer
})


export default rootReducer