import { Message } from "./Message"

export const ChatContainer = () => {
    return (
        <div className="w-full h-[83px]">
            <Message userId={3} time="12.25" text="Its test message" />
        </div>
    )
}