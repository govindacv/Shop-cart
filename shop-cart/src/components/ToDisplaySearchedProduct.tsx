import { useDispatch, useSelector } from "react-redux"
import { foundResults } from "../dux/SearchSlice"
import '../styles/ToDisplaySearchResultProduct.css'
import { addToCart } from "../dux/CartSlice";
import { addTowishList } from "../dux/WishListSlice";

const ToDisplaySearchedProduct = () => {

    const dispatch = useDispatch()
    const handleHeart=(val:any)=>
    {
            dispatch(addTowishList(val))
        
    }
    const handleAddToCartClick = (val: any) => {
        dispatch(addToCart(val))

    }
    const searchResults = useSelector(foundResults)
    return (
        <>
            <div>
                <h1 className="headingOf">Your Search Results</h1>
            </div>
            <div className="toDisplayProducts">
                {
                    searchResults.map((val: any) => (

                        
                        
                        <div className="proudct">
                            <div className="wishlist--heart"><i className="fa-regular fa-heart" onClick={() => handleHeart(val)}  ></i></div>
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
    )
}
export default ToDisplaySearchedProduct