import * as actionTypes from "./actionTypes"

export function addMessage(message: IMessage) {
  const action: MessageAction = {
    type: actionTypes.ADD_MESSAGE,
    message,
  }

  return simulateHttpRequest(action)
}

export function removeMessage(message: IMessage) {
  const action: MessageAction = {
    type: actionTypes.REMOVE_MESSAGE,
    message,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: MessageAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}