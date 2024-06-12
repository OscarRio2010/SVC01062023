import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.jpg";
import cat5Img from "assets/users/images/categories/cat-5.jpg";
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Fresh Oranges",
    },
    {
      bgImg: cat2Img,
      name: "Canned Milk",
    },
    {
      bgImg: cat3Img,
      name: "Fresh Vegetables",
    },
    {
      bgImg: cat4Img,
      name: "Beef",
    },
    {
      bgImg: cat5Img,
      name: "Dried Fruit",
    },
  ];
  return (
    <div className="container container__categories_slider">
      <Carousel responsive={responsive} className="categories_slider">
        {sliderItems.map((item, key) => (
          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(${item.bgImg})` }}
            key={key}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(HomePage);
