import { memo } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
const Header = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-6 header__top_left">
            <ul>
              <li>
                <AiOutlineMail />
                leanhtuyenvta@gmai.com
              </li>
              <li>Free shipping for orders from {formatter(300)} </li>
            </ul>
          </div>
          <div className="col-6 header__top_right">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineUser />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
