import { ApplicationState } from "../store"

export const getLoggedUser = ({ userReducer }: ApplicationState) => userReducer.loggedUser
export const getNewUserMode = ({ userReducer}: ApplicationState) => userReducer.newUser