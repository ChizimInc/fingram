import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  message: IMessage
  removeMessage: (message: IMessage) => void
}


export const Message: React.FC<Props> = ({ message, removeMessage }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteMessage = React.useCallback(
        (message: IMessage) => dispatch(removeMessage(message)),
        [dispatch, removeMessage]
    )

    return (
        <div className="flex mx-6 max-w-[20%] py-[4px]">
            <div className="rounded bg-[#c7e5ff] px-[10px] py-[4px]">{message.body}</div>
        </div>
    )
}