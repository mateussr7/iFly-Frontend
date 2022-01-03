import { action } from 'typesafe-actions'
import { FeedBackActions, MessageAction } from './types'

export const showMessage = (data: MessageAction) => action(FeedBackActions.SHOW_MESSAGE, data)
export const hideMessage = () => action(FeedBackActions.HIDE_MESSAGE)
export const setLoading = (value: boolean) => action(FeedBackActions.SET_LOADING, value)
export const setMessage = (message: string) => action(FeedBackActions.SET_MESSAGE, message)
export const setShowDialog = (value: boolean) => action(FeedBackActions.SET_SHOW_DIALOG, value)
export const setResultScreen = (value: boolean) => action(FeedBackActions.SET_RESULT_SCREEN, value)
