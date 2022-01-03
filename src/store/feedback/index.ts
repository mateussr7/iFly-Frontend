import { Reducer } from "redux";
import { FeedBackState, FeedBackActions, MessageAction } from "./types";

const INITIAL_STATE: FeedBackState = {
  messageAction: {
    message: "",
    show: false,
    type: "success",
  },
  loading: false,
  message: "",
  showDialog: false,
  resultScreen: false,
  queue: [],
};

const feedbackReducer: Reducer<FeedBackState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case FeedBackActions.SHOW_MESSAGE: {
      const newQueue = state.queue;
      newQueue.push(action.payload as MessageAction);

      return { ...state, messageAction: action.payload, queue: newQueue };
    }
    case FeedBackActions.HIDE_MESSAGE: {
      const newQueue = state.queue;
      newQueue.shift();
      return {
        ...state,
        messageAction: { message: "", show: false, type: "none" },
        queue: newQueue,
      };
    }
    case FeedBackActions.SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case FeedBackActions.SET_MESSAGE: {
      return { ...state, message: action.payload };
    }
    case FeedBackActions.SET_SHOW_DIALOG: {
      return { ...state, showDialog: action.payload };
    }
    case FeedBackActions.SET_RESULT_SCREEN: {
      return { ...state, resultScreen: action.payload };
    }
    default:
      return state;
  }
};

export default feedbackReducer;
