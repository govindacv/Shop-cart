import { Link } from 'react-router-dom'
import '../styles/Advertisement.css'
const Advertisement = () => {
    return (
        <>
        <div className="advertisement">
            <div className="advertisement content1">
                <div className='advertisement content1 con' ></div>
                <div className='advertisement content1 contact--logo'>
                <Link to={"tel:9110833748"}><i className="fa-solid fa-phone"></i></Link> 

                </div>
                <div className='advertisement content1 contact--number'>
                    9110833748
                </div>
            </div>
            <div className="advertisement content2">
               Get 50% off on selected Items | shop now
            </div>
            <div className="advertisement content3">
                    <div className="advertisement content language">
                        <select name="" id="">
                            <option value="English">English</option>
                            <option value="Uk">Uk</option>
                        </select>
                    </div>
                    <div className="advertisement content country">
                        <select name="" id="">
                            <option value="India">India</option>
                            <option value="England">England</option>
                        </select>
                    </div>
            </div>
                
        </div>
        </>
    )
}

export default Advertisement