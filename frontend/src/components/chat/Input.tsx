import * as React from 'react'

const style = {
    input: {
        boxShadow: "0 0 15px 4px rgb(0 0 0 / 6%)",
    },
}

type Props = {
    sendMessage: (message: IMessage | any) => void
}

export const Input: React.FC<Props> = ({ sendMessage }) => {
    const [message, setMessage] = React.useState<IMessage | {}>() 

    const handleMessageData = (e: React.FormEvent<HTMLInputElement>) => {
        setMessage({
          ...message,
          [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewMessage = (e: React.FormEvent) => {
        e.preventDefault()
        sendMessage(message)
      }

    return (
        <>
            <div className="absolute bottom-[15px] w-full flex items-center">
                <input 
                    type="text" 
                    placeholder="Type" 
                    className="w-full h-[35px] p-2.5 rounded-lg" 
                    style={style.input}
                    id="body"
                    value=""
                    onChange={handleMessageData}
                />
                <div 
                    className="absolute right-[8px] font-medium mb-[3px] cursor-pointer text-[#2e30c2]"
                    onClick={addNewMessage}
                >send</div>
            </div>
        </>
    )
}