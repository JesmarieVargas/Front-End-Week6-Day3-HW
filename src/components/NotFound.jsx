import { Link, useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 10000)

    return (
        <div>
            <img src="404.jpg" alt="Not Found" height="500" />
            <p> You will be redirected to the Home Page in 10 seconds!</p>
        </div>
    );

}

export default NotFound;