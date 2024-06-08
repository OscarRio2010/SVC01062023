import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <h1 className="footer__about_logo">SiVi SHOP</h1>
              <ul>
                <li>Address: Near 378N3/7 Tran Nam Phu Street</li>
                <li>Phone: 0856-020-525</li>
                <li>Email: leanhtuyenvta@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h6>Shop</h6>
              <ul>
                <li>
                  <Link to="">Contact</Link>
                </li>
                <li>
                  <Link to="">About Us</Link>
                </li>
                <li>
                  <Link to="">Business Products</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Information</Link>
                </li>
                <li>
                  <Link to="">Shopping Cart</Link>
                </li>
                <li>
                  <Link to="">Favorites List</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__widget">
              <h6>Promotions and offers</h6>
              <p>Sign up to receive information here</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Please enter your email" />
                  <button type="submit" className="button-submit">
                    Sign Up
                  </button>
                </div>
                <div className="footer__widget_social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <AiOutlineLinkedin />
                  </div>
                  <div>
                    <AiOutlineTwitter />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
