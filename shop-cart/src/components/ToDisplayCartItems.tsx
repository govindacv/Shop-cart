import { useDispatch, useSelector } from 'react-redux';
import { cartItems, count, decreaseCount, removeFromCart, updateCount } from '../dux/CartSlice';
import '../styles/ToDisplayCartItems.css';
import { EmptyCart } from './EmptyCart';


const ToDisplayCartItems = () => {
  const cart = useSelector(cartItems);
  const dispatch = useDispatch();
  const allCartItems = useSelector(cartItems)
  const cartItemsCount = useSelector(count)

  //To Increase 
  const handleIncrementClick = (obj: any) => {
    if (obj.quantity < 10) {
      dispatch(updateCount(obj))

    }
  }

  //To Decrease
  const handleDecrementClick = (obj: any) => {
    if (obj.quantity > 1) {
      dispatch(decreaseCount(obj))
    }
  }

  //Total price
  let totalPrice = 0
  allCartItems.map((val: any) => {
    console.log(val);
    totalPrice = totalPrice + (val.price * val.quantity)
  })

  //To Remove
  const handleRemoveFromCart = (obj: any) => {
    dispatch(removeFromCart(obj))
  }
  let boolRes = false
  if (cartItemsCount === 0) {
    boolRes = true
  }

  return (
    <>
      {!boolRes && (
        <>
          <div className="myCart">
            <h1 >My Cart</h1>
            <div className="totalPrice">
              Total Price:{totalPrice} <i className="fa-solid fa-dollar-sign"></i>
            </div>
          </div>

          <div>
            <div className="cartDisc">
              <h3 >Item</h3>
              <h3 className='quantity'>Quantity</h3>
              <h3 className='price'> Price</h3>
            </div>
            <div className="ToDisplayCartItems">
              {cart.map((val: any) => (
                <div key={val.id} className="items">
                  <div className="items--img">
                    <img src={val.thumbnail} alt="" height={100} width={100} />
                  </div>
                  <div className="items--title">
                    <h3>{val.title}</h3>
                  </div>

                  <div className="countOfItems">
                    <i className="fa-solid fa-minus" onClick={() => handleDecrementClick(val)}></i>
                    {val.quantity}
                    <i className="fa-solid fa-plus" onClick={() => handleIncrementClick(val)}></i>

                  </div>
                  <div className="items--price">
                    <h3>
                      {val.price * val.quantity} <i className="fa-solid fa-dollar-sign"></i>
                    </h3>
                  </div>
                  <div className="removeFromCart--button">
                    <button onClick={() => handleRemoveFromCart(val)}>Remove from cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {
        boolRes && (
          <>
            <EmptyCart />
          </>)
      }
    </>
  );
};

export default ToDisplayCartItems