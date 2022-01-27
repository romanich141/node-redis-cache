import useInput from "../custom-hooks/useInput";

const Input = ({ 
    initialValue = "", 
    type = "text",
    className = "",
    placeholder = "Placeholder",
    ...props 
}) => {
    const [value, setValue] = useInput(initialValue);
    
    return (
        <div className="input-group mb-3">
            <input 
                onChange={ setValue }
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