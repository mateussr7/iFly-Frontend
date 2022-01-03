export interface FeedBackState {
  messageAction: MessageAction
  loading: boolean
  message: string
  showDialog: boolean
  resultScreen: boolean
  queue: MessageAction[]
}

export interface MessageAction {
  show: boolean
  message: string
  type: 'success' | 'failure' | 'none' | 'warning'
}

export enum FeedBackActions {
  SHOW_MESSAGE = '@feedback/SHOW_MESSAGE',
  HIDE_MESSAGE = '@feedback/HIDE_MESSAGE',
  SET_LOADING = '@feedback/SET_LOADING',
  SET_MESSAGE = '@feedback/SET_MESSAGE',
  SET_SHOW_DIALOG = '@feedback/SET_SHOW_DIALOG',
  SET_RESULT_SCREEN = '@feedback/SET_RESULT_SCREEN'
}
