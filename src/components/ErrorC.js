
import { useRouteError } from "react-router"

const Error=()=>{
    let err=useRouteError()
    console.log(err);
    
    return(
        <div>
            <h1>opps' some thing worong</h1>
            <p>{err.data}</p>
            <p>{err.status}</p>
            <p>{err.statusText}</p>
        </div>
    )
}
export default Error