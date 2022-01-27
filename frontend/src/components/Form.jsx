const Form = ({ children, onSubmit }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form 
                        className="row g-3 p-3" 
                        onSubmit={ (e) => { 
                            e.preventDefault();
                            onSubmit();
                        }}
                    >
                        { children }  
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default Form;