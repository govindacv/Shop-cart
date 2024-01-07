import { useDispatch, useSelector } from "react-redux";
import { allItems, updateStatusOfCart } from "../dux/ProuctSlice";
import '../styles/ToDisplay.css'
import { addToCart } from "../dux/CartSlice";
import { addTowishList } from "../dux/WishListSlice";
import { useNavigate } from "react-router-dom";


const ToDisplay = () => {
    const dispatch = useDispatch();
    const handleHeart = (val: any) => {


        dispatch(addTowishList(val))

    }




    const handleAddToCartClick = (val: any) => {

        dispatch(addToCart(val))
        dispatch(updateStatusOfCart(val))

    }
    let products = useSelector(allItems);

    const navigate = useNavigate()
    const handleOnClickOfImages = (val: any) => {
        navigate(`/fullInfo`, { state: { val } })
    }


    return (

        <>
            <div className="toDisplayProducts">

                {


                    products.map((val: any) => (


                        <div className="proudct">
                            <div className="wishlist--heart">
                                {
                                    !val.isAddedToWishList ? <i className="fa-regular fa-heart" onClick={() => handleHeart(val)}></i> : <i className="fa-solid fa-heart"></i>

                                }
                            </div>
                            <div className="thumbnail">
                                <img src={val.thumbnail} height={200} width={290} onClick={() => handleOnClickOfImages(val)} />
                            </div>
                            <div className="info">

                                <p><b>{val.title}</b></p>
                                <p><b></b>{val.description}</p>
                                <p><b>{val.price}  <i className="fa-solid fa-dollar-sign"></i></b></p>
                            </div>
                            <br />
                            <div className="cart--but">
                                <>
                                    {

                                    }
                                </>
                                {!val.isAddedToCart ? (
                                    <div className=" ">
                                        <button onClick={() => handleAddToCartClick(val)}>Add To Cart</button>
                                    </div>
                                ) : (
                                    <p  >Added To Cart</p>
                                )}
                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    )
}
export default ToDisplay