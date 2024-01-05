import { useDispatch, useSelector } from "react-redux";
import { allItems } from "../dux/ProuctSlice";
import '../styles/ToDisplay.css'
import { addToCart, updateStatusOfCart } from "../dux/CartSlice";
import { addTowishList } from "../dux/WishListSlice";
import { useNavigate } from "react-router-dom";

const ToDisplay = () => {
    const products = useSelector(allItems);
    const dispatch = useDispatch();

    const handleHeart = (val: any) => {
        dispatch(addTowishList(val))

    }
    const entries = Object.entries(products);
    const handleAddToCartClick = (val: any) => {
        console.log(val);
        dispatch(addToCart(val))
        dispatch(updateStatusOfCart(val))



    }
    const navigate = useNavigate()
    const handleOnClickOfImages = (val: any) => {
        navigate(`/fullInfo`, { state: { val } })
    }


    return (

        <>
            <div className="toDisplayProducts">
                {
                    entries.map((val: any) => (


                        <div className="proudct">
                            <div className="wishlist--heart"><i className="fa-solid fa-heart" onClick={() => handleHeart(val[1])}  ></i></div>
                            <div className="thumbnail">
                                <img src={val[1].thumbnail} height={200} width={290} onClick={() => handleOnClickOfImages(val)} />
                            </div>
                            <div className="info">

                                <p><b>{val[1].title}</b></p>
                                <p><b></b>{val[1].description}</p>
                                <p><b>{val[1].price}  <i className="fa-solid fa-dollar-sign"></i></b></p>


                            </div>
                            <br />
                            <div className="cart--but">
                                {!val[1].isAddedToCart ? <div className="button"><button onClick={() => handleAddToCartClick(val[1])}   >Add To Cart</button></div>
                                    : <p>test</p>
                                }


                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}
export default ToDisplay