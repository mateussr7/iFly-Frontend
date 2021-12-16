import { action } from 'typesafe-actions'
import { SideBarActions } from './types'

export const openSidebar = () => action(SideBarActions.OPEN_SIDEBAR, {  })

export const closeSidebar = () => action(SideBarActions.CLOSE_SIDEBAR, {  })
