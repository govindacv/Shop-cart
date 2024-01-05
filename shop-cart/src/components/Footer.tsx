import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
           
        })
    }
    return (
        <>
            <div className="foo">
                <div className="footer">
                    <div className=" footer--pay">
                        <div className="footer fotter--pay1">
                            <Link to={'/'}><img src="/shopcart_icon.PNG" alt="" height={50} width={130} /></Link>
                        </div>
                        <div className="fotter fotter--pay2">
                             consectetur adipisicing elit. Culpa itaque dolores rerum placeat. Iure neque est officiis dolor, esse accusamus!
                        </div>
                        <h3>Accept Payments</h3>
                        <div className="fotter fotter--pay3">

                            <div><><i className="fa-brands fa-cc-visa"></i></></div>
                            <div><><i className="fa-brands fa-cc-mastercard"></i></></div>
                            <div><><i className="fa-brands fa-cc-amazon-pay"></i></></div>


                            <div><><i className="fa-brands fa-cc-apple-pay"></i></></div>




                        </div>
                    </div>
                    <div className="footer footer--contact">
                        <div>
                            <h3>Department</h3>
                            <p> <>Fashion</></p>
                            <p><>Education Product</></p>
                            <p><>Frozen Food</></p>
                            <p><>Beverages</></p>
                            <p><>Organic Grocery</></p>
                            <p><>Office Supplies</></p>
                            <p><>Beauty Products</></p>
                            <p><>Books</></p>
                            <p><>Electronics & Gadget</></p>
                            <p><>Travel Accessories</></p>
                            <p><>Fitness</></p>
                            <p><>Sneakers</></p>
                            <p><>Toys</></p>
                            <p><>Furniture</></p>
                        </div>
                        <div>
                            <h3>About Us</h3>
                            <p> <>About Shopcart</></p>
                            <p><>Careers</></p>
                            <p><>News & Blog</></p>
                            <p><>Help</></p>
                            <p><>Press Center</></p>
                            <p><>Shop By Location</></p>
                            <p><>ShopCart Brands</></p>
                            <p><>Affiliate & Partners</></p>
                            <p><>Ideas & Guides</></p>
                        </div>
                        <div>
                            <h3>Services</h3>
                            <p> <>Gift Card</></p>
                            <p><>Mobile App</></p>
                            <p><>Shipping & Delivery</></p>
                            <p><>Order Pickup</></p>
                            <p><>Account Signup</></p>
                        </div>
                        <div>
                            <h3>Department</h3>
                            <p> <>Shopcart Help</></p>
                            <p><>Returns</></p>
                            <p><>Track Orders</></p>
                            <p><>Contact Us</></p>
                            <p><>Feedback</></p>
                            <p><>Security & Fraud</></p>
                        </div>
                    </div>
                </div>
                <i className="fa-solid fa-arrow-up" onClick={scrollToTop}></i>
            </div>


        </>
    )
}
export default Footer