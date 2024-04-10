import { Link } from "react-router-dom";

function NotFound(){
    return(
        <p>404 page not found <Link to="/" >home</Link></p>
    )
}
export default NotFound;