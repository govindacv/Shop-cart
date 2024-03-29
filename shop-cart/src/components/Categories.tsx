import axios from "axios"
import { useState, useEffect, } from "react"
import { useDispatch } from "react-redux"
import { addProducts } from "../dux/ProuctSlice"
import '../styles/Categories.css'
const Categories = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {

                setProducts(response.data.products);
                // dispatch(addProducts(response.data.products))
              
                
            })
            .catch(() => {
                console.log("error")
            }
            )
    }, [])
    console.log('rendering');
    




    const handleallitems = (name: string) => {
        axios.get(`https://dummyjson.com/products/${name}`)
            .then((response) => {
                console.log(response.data.products);
                setProducts(response.data.products)
                dispatch(addProducts(products))
            })
            .catch(() => {
                console.log("error")
            })

    }


    const handleChangeSort = (e: any) => {
        let sortedProducts = [...products];
        if (e === "Price") {
            sortedProducts.sort((a: any, b: any) => a.price - b.price)
            setProducts(sortedProducts)

            dispatch(addProducts(sortedProducts))

        }
        if (e === "A-Z") {


            sortedProducts.sort((a: any, b: any) => a.title.localeCompare(b.title));

            console.log(sortedProducts);

            setProducts(sortedProducts)

            dispatch(addProducts(sortedProducts))
        }


    }



    return (
        <>
            <div className="categories">
                <div >
                    <button onClick={() => { handleallitems("") }}>All items</button>
                    <button onClick={() => { handleallitems("category/smartphones") }}>Smartphones</button>
                    <button onClick={() => { handleallitems("category/laptops") }}>Laptops</button>
                    <button onClick={() => { handleallitems("category/skincare") }}>Skincare</button>
                    <button onClick={() => { handleallitems("category/furniture") }}>Furniture</button>
                    <button onClick={() => { handleallitems("category/mens-shirts") }}>Mens-shirts</button>
                    <button onClick={() => { handleallitems("category/motorcycle") }}>Motorcycle</button>
                    <button onClick={() => { handleallitems("category/mens-shoes") }}>Sneakers</button>
                    <button onClick={() => { handleallitems("category/sunglasses") }}>sunglasses</button>
                </div>
                <div className="sortBy">
                    <select name="" onChange={(e) => handleChangeSort(e.target.value)}>
                        <option value="sort By">Sort By</option>
                        <option value="Price" >Price</option>
                        <option value="A-Z">A-Z</option>
                    </select>
                </div>

            </div>




        </>

    )
}

export default Categories