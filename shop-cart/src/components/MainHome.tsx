import { Link } from 'react-router-dom'
import '../styles/MainHome.css'

const MainHome=()=>
{
    return (
        <>
        <div className="main">
            <div className="heading">
                <h1>Shipping and Department Store</h1>
            </div>
            <div className="description">
                shopping is bit of relaxing hobby for me ,which is someting troubling for the bank balance
            </div>
            <div className="learnmore">
                <Link to={'/'}><button>Learn More</button></Link>
            </div>
        </div>
        </>
    )
    
}


export default MainHome