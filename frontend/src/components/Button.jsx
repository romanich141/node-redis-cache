const Button = ({ 
    children="",
    className="",
    onClick="",
    isDisable = false,
 }) => {
    return (
        <button 
            className={ `btn btn-primary ${ className }` } 
            type="button"
            onClick={ onClick }
            disabled={ isDisable }
        >
            { children }
        </button>
    )
}

export default Button;