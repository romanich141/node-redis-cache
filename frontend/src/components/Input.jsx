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
    
    const onChange = (event) => {
        const value = event.target.value;
        setValue(value);
        callback(value);
    }

    return (
        <div className="input-group mb-3">
            <input 
                onChange={ onChange }
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