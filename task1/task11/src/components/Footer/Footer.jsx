
import "./footer.css"

function Footer(){
    return (
      <>
        <div className="footer"> 
          <div className="footer-column">
            <h4>Landing Page</h4>
            <p className="description">
              We are dedicated to providing the best web development and design
              services to help your business grow.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +000 0000 000</p>
            <p>Location: Palestine</p>
          </div>
        </div>
        <p>&copy; 2026 Landing Page. All rights reserved.</p>
      </>
    );
}
export default Footer;