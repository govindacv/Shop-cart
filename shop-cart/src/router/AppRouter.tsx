import { createBrowserRouter } from "react-router-dom";
 
import ShopCart from "../components/ShopCart";
import App from "../App";
import Account from "../components/Account";

import ToDisplaySearchedProduct from "../components/ToDisplaySearchedProduct";
import ToDisplayWishList from "../components/ToDisplayWishList";
import InvalidURL from "../components/InvalidURL";
import ToDisplayCartItems from "../components/ToDisplayCartItems";
import FullInfoOfProducts from "../components/FullInfoOfProducts";

const AppRouter=createBrowserRouter([
    {
         path:'/',
         element:<App/>,
        children:[
            {
                index:true,
                element:<ShopCart/>
               
                
            }
            ,
            {
                path:'/account',
                element:<Account/>
            },
            {
                path:'/cart',
                element:<ToDisplayCartItems/>
            }
            ,
            {
                path:'/searchedProduct',
                element:<ToDisplaySearchedProduct/>
            }
            ,
            {
                path:'/wishlist',
                element:<ToDisplayWishList/>
            }
            ,
            {
                path:"/fullInfo",
                element: <FullInfoOfProducts/>
            }
            ,
            {
                path:"*",
                element:<InvalidURL/>
            }
        ]    
    }
])

export default AppRouter