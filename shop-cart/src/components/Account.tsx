import { Link } from 'react-router-dom'
import '../styles/Account.css'
const Account=()=>{
 
    return(
        <>
            <div className="outline">
            <div className="x">
           <Link to={'/'}> <i className="fa-solid fa-x" ></i></Link>
            </div>
        <div className="account">
            <div className=" account avatar">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png" alt="" height={200} width={200}/>

            </div>
            <div className="account userName">
            Name:XYZ
            </div>
            <div className="account email">
            Email:    xyz@gmail.com
            </div>

        </div>
            </div>
        </>
        )
}

export default Account