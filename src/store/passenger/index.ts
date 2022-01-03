import { Reducer } from 'redux'
import { Passenger } from '../user/types'
import { PassengerActions, PassengerState } from './types'

const INITIAL_STATE: PassengerState = {
    passengers: []
}

const passengerReducer: Reducer<PassengerState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PassengerActions.GET_PASSENGER_RANKING_SUCCESS: {
            const passengers: Passenger[] = action.payload.passengers
            return {
                ...state, passengers: passengers
            }
        }

        default: return state
    }
}

export default passengerReducer