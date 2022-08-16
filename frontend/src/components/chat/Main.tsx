import * as React from 'react'
import { Input } from "./Input"
import { Header } from "./Header"
import { ChatContainer } from "./ChatContainer"
import { addMessage } from "../../store/actionCreators"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"

export const Main = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const sendMessage = React.useCallback(
        (message: IMessage) => dispatch(addMessage(message)),
        [dispatch]
    )

    return(
        <div className="lg:w-[1024px] h-[100vh] absolute">
            <Header title="Tolea" />
            <ChatContainer />
            <Input sendMessage={sendMessage} />
        </div>
    )
}