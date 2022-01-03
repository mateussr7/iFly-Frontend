import { ApplicationState } from "../store";

export const getShowDialog = ({ feedbackReducer }: ApplicationState) =>
  feedbackReducer.showDialog;

export const getMessageAction = ({ feedbackReducer }: ApplicationState) =>
  feedbackReducer.messageAction;

export const getMessage = ({ feedbackReducer }: ApplicationState) =>
  feedbackReducer.message;

export const getLoading = ({ feedbackReducer }: ApplicationState) =>
  feedbackReducer.message;
