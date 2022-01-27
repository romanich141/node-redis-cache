import useInput from "../custom-hooks/useInput";

const Input = ({ 
    initialValue = "", 
    type = "text",
    className = "",
    placeholder = "Placeholder",
    callback = null,
    ...props 
}) => {
    const [value, setValue] = useInput(initialValue);
    
    return (
        <div className="input-group mb-3">
            <input 
                onChange={ setValue }
                onBlur={ () => callback(value) }
                value={ value }
                type={ type } 
                className={ `form-control ${ className }` } 
                placeholder={ placeholder }
                aria-label={ placeholder }
                { ...props }
            />
        </div>
    )
}

export default Input;