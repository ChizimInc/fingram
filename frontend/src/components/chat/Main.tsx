import { Input } from "./Input"
import { Header } from "./Header"
import { ChatContainer } from "./ChatContainer"

export const Main = () => {
    return(
        <div className="lg:w-[1024px] h-[100vh] absolute">
            <Header title="Tolea" />
            <ChatContainer />
            <Input />
        </div>
    )
}