
import axios from "axios";
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { addProducts } from "./dux/ProuctSlice";
import { useDispatch } from "react-redux";


function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {      
        dispatch(addProducts(response.data.products))

      })
      .catch(() => {
        console.log("error")
      }
      )
  }, [])
  return (

    <>
      <Outlet />
    </>
  )
}


export default App

