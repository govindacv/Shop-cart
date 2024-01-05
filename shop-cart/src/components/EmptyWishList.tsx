import { Link } from 'react-router-dom'
import '../styles/EmptyWishList.css'
export const EmptyWishList = () => {
  return (
    <>
      <div className="emptyWishList">
        <div className="emptyWishList--msg">
          Your WishList is Empty <i className="fa-solid fa-face-sad-tear"></i>
        </div>
        <div className="emptyWishList--button">

          <Link to={'/'}>
            <button>Continue shopping</button>
          </Link>
        </div>
      </div>
    </>
  )
}
