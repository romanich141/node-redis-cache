const ProfileCard = ({ 
    avatar = "",
    name = "",
    surname = "",
    nickname = ""
 }) => {
    if (!name && !surname && !nickname) {
        return ""
    }

    return (
        <div className="card">
            { avatar && <img src={ avatar } className="card-img-top" alt={`${ name } ${ surname }`} /> }
            <div className="card-body">
                <h5 className="card-title">Full name</h5>
                <p className="card-text">{ `${ name } ${ surname }` }</p>
                <h5 className="card-title">Nickname</h5>
                <p className="card-text">{ nickname }</p>
            </div>
        </div>
    )
}

export default ProfileCard;