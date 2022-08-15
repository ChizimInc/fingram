const style = {
    input: {
        boxShadow: "0 0 15px 4px rgb(0 0 0 / 6%)",
    },
}

export const Input = () => {
    return (
        <>
            <div className="absolute bottom-[15px] w-full flex items-center">
                <input 
                    type="text" 
                    placeholder="Type..." 
                    className="w-full h-[35px] p-2.5 rounded-lg" 
                    style={style.input}
                />
                <div className="absolute right-[8px] font-medium mb-[3px] cursor-pointer text-[#2e30c2]">send</div>
            </div>
        </>
    )
}