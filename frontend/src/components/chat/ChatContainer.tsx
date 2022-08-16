import { useSelector, shallowEqual } from "react-redux"
import { Message } from "./Message"

import { removeMessage } from "../../store/actionCreators"

export const ChatContainer = () => {
    const messages: readonly IMessage[] = useSelector(
        (state: MessageState) => state.messages,
        shallowEqual
    )

    return (
        <div className="w-full h-[83px]">
            {messages.map((message: IMessage) => (
                <Message
                    key={message.id}
                    message={message}
                    removeMessage={removeMessage}
                />
            ))}
        </div>
    )
}