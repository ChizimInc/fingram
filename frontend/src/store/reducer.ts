import * as actionTypes from "./actionTypes"

const initialState: MessageState = {
  messages: [
    {
      id: 1,
      user_id: 2,
      body:
        "Message from state",
    },
    {
      id: 2,
      user_id: 2,
      body:
        "Message 2 from state",
    },
  ],
}

const reducer = (
    state: MessageState = initialState,
    action: MessageAction
  ): MessageState => {
    switch (action.type) {
      case actionTypes.ADD_MESSAGE:
        const newMessage: IMessage = {
          id: Math.random(), // not really unique
          user_id: action.message.user_id,
          body: action.message.body,
        }
        return {
          ...state,
          messages: state.messages.concat(newMessage),
        }
      case actionTypes.REMOVE_MESSAGE:
        const updatedArticles: IMessage[] = state.messages.filter(
          article => article.id !== action.message.id
        )
        return {
          ...state,
          messages: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer