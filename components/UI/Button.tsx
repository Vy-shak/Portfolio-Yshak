
interface buttonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'default' | 'sm' | 'md' | 'lg' | 'full';
    defaultCss?: string,
    text: string;
    startIcon?: any;
    endIcon?: any;
    handleClick?: () => void;
};


const constants = {
    variant: {
        primary: ' hover:bg-greenPrimary-900  bg-greenPrimary-700  font-normal text-white ',
        secondary: 'border-2 rounded-md border-greenPrimary-600  text-white font-normal',
    },
    size: {
        default: 'xl:px-4 py-1  px-1  xl:py-2 text-xs xl:text-sm  w-fit lg:rounded-md rounded-sm ',
    },
}



const Button = (props: buttonProps) => {

    return (
        <>
            <button onClick={props.handleClick} className={` ${props.defaultCss} ${constants.variant[props.variant]} ${constants.size[props.size]}`}>
                <div className="flex w-fit h-fit justify-center items-center leading-3">
                    {props.startIcon}
                    <span className="text-xs">{props.text}</span>
                    {props.endIcon}
                </div>
            </button>
        </>
    )
}

export default Button