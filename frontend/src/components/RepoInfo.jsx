import { useEffect, useState } from "react"

const RepoInfo = (props) => {
    const [data, setData] = useState(props.data);

    useEffect(() => setData(props.data), [props.data])

    return (
        <div>{ JSON.stringify(data) }</div>
    )
}

export default RepoInfo;