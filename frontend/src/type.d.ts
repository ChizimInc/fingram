interface IMessage {
    id: number
    user_id: number
    body: string
  }
  
  type MessageState = {
    messages: IMessage[]
  }
  
  type MessageAction = {
    type: string
    message: IMessage
  }
  
  type DispatchType = (args: MessageAction) => MessageAction