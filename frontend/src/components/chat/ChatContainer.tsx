import { useEffect } from "react"
import { useAppDispatch } from "../../hook/redux"
import { fetchMessages } from "../../store/actions/messageActions"
import { Message } from "./Message"

export const ChatContainer = () => {
    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(fetchMessages())
    },[] )

    return (
        <div className="w-full h-[83px]">
            {/* {messages.map((message: IMessage) => (
                <Message
                    key={message.id}
                    message={message}
                />
            ))} */}
        </div>
    )
}