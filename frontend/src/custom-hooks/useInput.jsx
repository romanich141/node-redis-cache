import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        const { value } = event.target || {};

        setValue(value);
    }


    return [ value, onChange ];
}

export default useInput;