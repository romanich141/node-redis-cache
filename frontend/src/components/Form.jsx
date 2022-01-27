const Form = ({ children, }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="row g-3 p-3">
                        { children }  
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default Form;