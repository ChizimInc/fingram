import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  message: IMessage
}


export const Message: React.FC<Props> = ({ message }) => {
    const dispatch: Dispatch<any> = useDispatch()

    return (
        <div className="flex mx-6 max-w-[20%] py-[4px]">
            <div className="rounded bg-[#c7e5ff] px-[10px] py-[4px]">{message.body}</div>
        </div>
    )
}