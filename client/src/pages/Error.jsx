import { Link, useRouteError} from "react-router-dom";
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
    const error=useRouteError();
    if(error.status===404){
        return <Wrapper>
            <div>
            <img src={img} alt="404" className=""/>
            <h3>OOPS!! Page Not Found</h3>
            <Link to='/dashboard'>Go To Home</Link>
            </div>
        </Wrapper>
    }
  return (
    <Wrapper>
        <div>
            <h3>Something Went wrong!!!</h3>
            
        </div>
    </Wrapper>
  )
}

export default Error
