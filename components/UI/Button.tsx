
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
        primary: 'bg-white hover:bg-greenPrimary-900  bg-greenPrimary-700  font-normal text-white ',
        secondary: 'border-2 rounded-md border-greenPrimary-600  text-white font-normal',
    },
    size: {
        default: 'xl:px-4 py-2 px-2  xl:py-2 text-sm  w-fit rounded-md ',
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