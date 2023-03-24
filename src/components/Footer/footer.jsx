import React from "react";
import './footer.css';
// import fb from "../assets/fbimg.png";
// import twiiter from "../assets/twitterimg.png";
// import linkedin from "../assets/linkedinimg.png";
// import instagram from "../assets/instagramimg.png";

const Footer=()=>{
    return(
        <div classNam="footer">
            <div className="section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Businees</h4>
                        <a href="/admin">
                            <p>Admin</p>
                        </a>
                        <a href="/login">
                            <p>Login</p>
                        </a>
                        <a href="/register">
                            <p>Register</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Resources</h4>
                        <a href="/resource">
                            <p>Inventory</p>
                        </a>
                        <a href="/feedback">
                            <p>Feedback</p>
                        </a>
                        <a href="/event">
                            <p>Events</p>
                        </a>
                    </div>
                    
                    <div className="sb__footer-links-div">
                    <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Coming Soon</h4>
                        <div className="socialmedia">
                            <p><img src="./images/Footer/fbimg.png"  alt="" /></p>
                            <p><img src="./images/Footer/twitterimg.png" alt="" /></p>
                            <p><img src="./images/Footer/linkedinimg.png" alt="" /></p>
                            <p><img src="./images/Footer/instagramimg.png" alt="" /></p>
                    </div>
                    </div>
                </div>
                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear} FoodTrain. All Rights Reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/secuirty"><div><p>Secuirty</p></div></a>
                        <a href="/cookie"><div><p>Cookie</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;