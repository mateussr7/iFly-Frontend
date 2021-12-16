import { Reducer } from 'redux'
import { SideBarState, SideBarActions } from './types'

const INITIAL_STATE: SideBarState = {
    sidebar: true
}

const sidebarReducer: Reducer<SideBarState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SideBarActions.OPEN_SIDEBAR: {
            return { ...state, sidebar: true }
        }
        case SideBarActions.CLOSE_SIDEBAR: {
            return { ...state, sidebar: false }
        }
        default: {
            return state
        }
    }
}

export default sidebarReducer