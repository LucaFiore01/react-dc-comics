const MainFooter = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>DC COMICS</h3>
                        <ul>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>DC</h3>
                        <ul>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy Policy (new)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>SITES</h3>
                        <ul>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>SHOP</h3>
                        <ul>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-logo">
                    <img src="/src/assets/img/dc-logo-bg.png" alt="DC Comics Logo" />
                </div>
            </div>

            <div className="footer-bottom">
                <button className="signup-btn">SIGN-UP NOW!</button>
                <div className="footer-social">
                    <h4>FOLLOW US</h4>
                    <div className="social-icons">
                        <a href="#"><img src="/src/assets/img/footer-facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="/src/assets/img/footer-twitter.png" alt="Twitter" /></a>
                        <a href="#"><img src="/src/assets/img/footer-youtube.png" alt="YouTube" /></a>
                        <a href="#"><img src="/src/assets/img/footer-pinterest.png" alt="Pinterest" /></a>
                        <a href="#"><img src="/src/assets/img/footer-periscope.png" alt="Periscope" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter