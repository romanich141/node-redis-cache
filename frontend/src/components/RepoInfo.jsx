import { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard";

const RepoInfo = (props) => {
    const [data, setData] = useState(props.data);

    useEffect(() => setData(props.data), [props.data])

    const { login, name, surname, avatar_url, public_repos, url, html_url } = data;

    const renderOtherInfo = () => {
        if (!data || !Object.keys(data).length) return "";

        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Public repositories ${ public_repos }`}</li>  
                <li className="list-group-item">
                    URL <a href={ html_url }>{ html_url }</a>
                </li>   
            </ul>
        )
    }

    return (
        <div className="container-xxl mt-5">
            <div className="row">
                <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                    <ProfileCard 
                        avatar = { avatar_url }
                        name = { name }
                        surname = { surname }
                        nickname = { login }
                    />
                </div>
                <div className="col col-lg-9 col-md-9 col-sm-6 col-12">
                   { renderOtherInfo() }
                </div>
            </div>

        </div>
    )
}

export default RepoInfo;