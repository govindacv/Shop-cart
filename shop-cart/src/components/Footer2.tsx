import { useState } from 'react'
import '../styles/Footer2.css'
const Footer2=()=>{
const [gift,setGift]=useState(false)
const handleOnClickGift=()=>{
    setGift(true)
}
const handleCancelClick=()=>{
    setGift(false)
}

    return(
        <>
        <div className="footer2">
                <div className="footer2_block1">
                    <p><i className="fa-solid fa-suitcase margin-left-right"></i></p>
                    <p> Become Seller</p>
                </div>
                <div className="footer2_block1">
                    <p onClick={handleOnClickGift}><i className="fa-solid fa-gift margin-left-right fa-xl" ></i></p>
                    <p onClick={handleOnClickGift}> Gift Cards</p>
                    {
                        gift && (
                            <div className="toDisplayGift">
                                <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/07/wrapped-gift-box-with-shiny-gold-decoration-generated-by-ai-min-1200x900.jpg" alt=""  height={310} width={700}/>
                                <i className="fa-solid fa-x" onClick={handleCancelClick}></i>
                            </div>
                        )
                    }
                </div>
                <div className="footer2_block1">
                    <p><i className="fa-solid fa-circle-question margin-left-right"></i></p>
                    <p> Help center</p>
                </div>
                <p> Terms of Service</p>
                <p>Privacy & Policy</p>
                <p> All rights deserved by Museming</p>
            </div>
        </>
    )   
}

export default Footer2