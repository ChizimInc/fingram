type IPropsMessage = {
    time: string,
    userId: number,
    text: string,
}

export const Message = (props: IPropsMessage) => {
    return (
        <div className="flex mx-6 max-w-[20%]">
            <div className="rounded bg-[#c7e5ff] px-[10px] py-[4px]">{props.text}</div>
        </div>
    )
}