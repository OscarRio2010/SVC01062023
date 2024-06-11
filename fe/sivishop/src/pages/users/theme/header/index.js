import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";
const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);
  const [menus, setMenus] = useState([
    {
      name: "Home",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Shop",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Product",
      path: ROUTERS.USER.HOME,
      isShowSubmenu: false,
      child: [
        {
          name: "Meat",
          path: "",
        },
        {
          name: "Vegetable",
          path: "",
        },
        {
          name: "Fast Food",
          path: "",
        },
      ],
    },
    {
      name: "Posts",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Contact",
      path: ROUTERS.USER.HOME,
    },
  ]);

  return (
    <>
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
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>SiVi SHOP</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey} - ${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart_price">
                <span>{formatter(20000000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories_container">
          <div className="col-lg-3 hero__categories">
            <div
              className="hero__categories__all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu /> List Product
            </div>

            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to={"#"}>Fresh Meat</Link>
              </li>
              <li>
                <Link to={"#"}>Vegetable</Link>
              </li>
              <li>
                <Link to={"#"}>Fruit Juice</Link>
              </li>
              <li>
                <Link to={"#"}>Fruit</Link>
              </li>
              <li>
                <Link to={"#"}>seafood</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 hero__search_container">
            <div className="hero__search">
              <div className="hero__search_form">
                <form>
                  <input type="text" placeholder="Enter keywords.." />
                  <button type="submit" className="side-btn">
                    Search
                  </button>
                </form>
              </div>
              <div className="hero__search_phone">
                <div className="hero__search__phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero__search__phone_text">
                  <p>0867.898.090</p>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="hero__item">
              <div className="hero__text">
                <span>Fresh Fruit</span>
                <h2>
                  Vegetables
                  <br />
                  100% Clean
                </h2>
                <p>Free delivery</p>
                <Link to="" className="primary-btn">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
