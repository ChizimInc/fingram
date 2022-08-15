type IPropsHeader = {
    title: string,
}

export const Header = (props: IPropsHeader) => {
    return (
        <div className="w-full h-[40px] flex justify-center items-center">
            {props.title}
        </div>
    )
}