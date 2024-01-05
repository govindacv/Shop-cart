import { Link } from 'react-router-dom'
import '../styles/emptycart.css'
export const EmptyCart = () => {
  return (
    <>
      <div className="emptyCart">
        <div className="emptyCart--msg">
          Your cart is Empty <i className="fa-solid fa-face-sad-tear"></i>
        </div>
        <div className="emptyCart--button">

          <Link to={'/'}>
            <button>Continue shopping</button>
          </Link>
        </div>
      </div>
    </>
  )
}
