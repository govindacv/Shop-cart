import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { count } from '../dux/CartSlice'
import { useRef, useState } from 'react'
import { allItems } from '../dux/ProuctSlice'
import { addToSearchedProduct, foundResults } from '../dux/SearchSlice'
const Navbar = () => {

    const countOfCartItems = useSelector(count)
    const searchProducts = useRef<HTMLInputElement | null>(null)
    const [productToBeSearched, setProductToBeSearched] = useState("")
    const dispatch = useDispatch()
    const handleOnChangeSearchProduct = () => {
        if (searchProducts.current?.value != undefined) {
            setProductToBeSearched(searchProducts.current?.value);
        }
    }
    const allProducts = useSelector(allItems)
    const foundProduct = allProducts.filter((val:any) => {
        return val.title.toLowerCase() === productToBeSearched.toLocaleLowerCase()
    })
    const handleSearch = () => {
        console.log(foundProduct);
        dispatch(addToSearchedProduct(foundProduct))


    }
    console.log(useSelector(foundResults));


    return (
        <div className="navbar">
            <div className="navbar content1">
                <Link to={'/'}><img src="/shopcart_icon.PNG" alt="" height={50} width={130} /></Link>
            </div>
            <div className="navbar content2">
                <div className="navbar content2--category">
                    <select name="" id="navbar--category">
                        <option value="Category">Category</option>
                        <option value="Clothes">Clothes</option>
                    </select>
                </div>
                <div className="navbar content2--deals">
                    <Link to={'/'} >Deals</Link>
                </div>
                <div className="navbar content2--Delivery">
                    <Link to={'/'}  >Delivery</Link>
                </div>
                <div className="navbar content2--searchbar">
                    <input type="text" placeholder='Search Product' ref={searchProducts} onChange={handleOnChangeSearchProduct} />
                    <Link to={'/searchedProduct'}><i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i></Link>
                </div>
            </div>
            <div className="navbar content3">
                <div className="navbar content3--account">
                    <Link to={'/account'}>

                        <i className="fa-solid fa-user"></i>
                    </Link>
                    <Link to={'/account'}> Account</Link>
                </div>
                <div className="navbar content3--wishlist">
                    <Link to={'/wishlist'}><i className="fa-regular fa-heart"></i></Link>
                    <Link to={'/wishlist'}>Wishlist</Link>
                </div>
                <div className="navbar content3--cart">
                    <div className="countOfCartItems">{countOfCartItems}</div>
                    <Link to={'/cart'}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar