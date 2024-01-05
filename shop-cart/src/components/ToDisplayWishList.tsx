import { useDispatch, useSelector } from "react-redux"
import { getCountOfWhislList, wishListItems } from "../dux/WishListSlice"
import { addToCart } from "../dux/CartSlice";
import '../styles/ToDisplaySearchResultProduct.css'
import { EmptyWishList } from "./EmptyWishList";
 

const ToDisplayWishList =()=>{
    const wishList=useSelector(wishListItems)
    const dispatch = useDispatch()
    const countOfWishList=useSelector(getCountOfWhislList)
    const handleAddToCartClick = (val: any) => {
        dispatch(addToCart(val))

    }
    let boolRes=false
    if(countOfWishList===0)
    {
        boolRes=true
    }
    return (
         <>
         {
            !boolRes  && (
                <>
                <>
            <div>
                <h1 className="headingOf">Your wish List</h1>
            </div>
            <div className="toDisplayProducts">
                {
                    wishList.map((val: any) => (

                        
                        
                        <div className="proudct">
                            <div className="thumbnail">
                                <img src={val.thumbnail} height={200} width={290} />
                            </div>
                            <div className="info">

                                <p><b>{val.title}</b></p>
                                <p><b></b>{val.description}</p>
                                <p><b>{val.price}  <i className="fa-solid fa-dollar-sign"></i></b></p>

                            </div>
                            <div className="cart--but">

                                <div className="button"><button onClick={() => handleAddToCartClick(val)}  >Add To Cart</button></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
                </>
            ) 
         }
         {
            boolRes && <EmptyWishList/>
         }
         </>
    )
};

export default ToDisplayWishList