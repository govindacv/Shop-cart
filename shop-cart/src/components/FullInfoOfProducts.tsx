import { useLocation } from "react-router-dom"
import '../styles/FullInfoIfProduct.css'
import { useDispatch } from "react-redux"
import { addToCart } from "../dux/CartSlice"
 
 
const FullInfoOfProducts =()=>{
 
 
    const location = useLocation()

   
    const items:any = location.state
    const item=items.val
    
    console.log(item);
    const {
        
        title,
        description,
        discountPercentage,
        brand,
        category,
        rating,
        price,
        stock,
        thumbnail,
        images 
      }=item;
       const dispatch=useDispatch()
   const handleBuyNow=(item:any)=>{ 
        dispatch(addToCart(item))
   }
   
    return(
        <>
       
        <div className="bcg">
        <div className="displayOfFullInfo">
            <div className="thumbnail">
               <img src={thumbnail} alt="" />
            </div>
            <div className="info">
                <p><b>Brand:</b>{brand}</p>
                <p><b>Title:</b>{title}</p>
                <p><b>category:</b>{category}</p>
                <p><b>Description :</b>{description}</p>
                <p><b>Price:</b>{price}$</p>
                <p><b>Discount :</b>{discountPercentage}%</p>
                <p><b>rating(5):</b>{rating}*</p>
                <p><b> In Stock:</b>{stock}</p>
                 
        <>
        {
                        images.map((val:any)=>(
                            <img src={val} alt=""  height={100} width={100}/>
                        ))
                    }
                    
        </>
            </div>
             <div className="fullInfoButton">
                <button onClick={()=>handleBuyNow(item)}>Add To cart</button>
             </div>
        </div>
        </div>
        </>
    )
}
export default FullInfoOfProducts