const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="main-footer">
                    <div className="footer-box">
                        <h5>Our Other Products</h5>
                        <a href="#">Movie Analytics <span><img src="./top-right.png" alt="arrow"></img></span></a>
                        <a href="#">Education Analytics <span><img src="./top-right.png" alt="arrow"></img></span></a>
                        <a href="#">Doctor Analytics <span><img src="./top-right.png" alt="arrow"></img></span></a>
                    </div>

                    <div className="footer-box">
                        <h5>Contact</h5>
                        <a href="tel:+9195855836918">Phone: +91 95855 83691<span>&nbsp;<img src=".././top-right.png" alt="arrow"></img></span></a>
                        <a href="mailto:indominus-labs@gmail.com">Email: indominus-labs@gmail.com<span>&nbsp;<img src=".././top-right.png" alt="arrow"></img></span></a>
                        <a href="#">Location: VIT-AP University<span>&nbsp;<img src=".././top-right.png" alt="arrow"></img></span></a>
                    </div>

                    <div className="footer-box">
                        <h5>Company</h5>
                        <a href="/about-us">About Us<span>&nbsp;<img src=".././top-right.png" alt="arrow"></img></span></a>
                        <a href="#">Customers<span>&nbsp;<img src=".././top-right.png" alt="arrow"></img></span></a>
                        <a href="#">Partners<span>&nbsp;<img src=".././top-right.png" alt="arrow"></img></span></a>
                        <a href="#">Life at Indominus Labs<span>&nbsp;<img src=".././top-right.png" alt="arrow"></img></span></a>
                    </div>
                </div>

                <div className="footer-spec-box">
                    <div className="footer-logo">
                        <a href="#">
                            <p>Made with&nbsp;</p>
                            <img className="love" src="/love.png" alt="love"></img>
                            <p>&nbsp;by&nbsp;</p>
                            <p>Indominus Labs</p>
                        </a>
                    </div>
                    <div className="social-logos">
                        <a href="#"><img className="instagram" src="/instagram.png" alt="Instagram"></img></a>
                        <a href="#"><img src="/twitter.png" alt="Twitter"></img></a>
                        <a href="https://www.linkedin.com/in/indominus-labs-210b4b24b/" target="_blank"><img src="/linkedin.png" alt="LinkedIn"></img></a>
                        <a href="#"><img src="/youtube.png" alt="YouTube"></img></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
