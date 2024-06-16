import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.jpg";
import cat5Img from "assets/users/images/categories/cat-5.jpg";
import feature1Img from "assets/users/images/featured/featured-1.jpg";
import feature2Img from "assets/users/images/featured/featured-2.jpg";
import feature3Img from "assets/users/images/featured/featured-3.jpg";
import feature4Img from "assets/users/images/featured/featured-4.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import feature5Img from "assets/users/images/featured/featured-5.jpg";

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

  const featproducts = {
    all: {
      title: "All",
      products: [
        {
          img: feature1Img,
          name: "Lean Beef",
          price: 50,
        },
        {
          img: feature1Img,
          name: "Banana",
          price: 50,
        },
      ],
    },
    freshMeat: {
      title: "Fresh Meat",
      products: [
        {
          img: feature1Img,
          name: "Lean Beef",
          price: 50,
        },
      ],
    },
  };

  const renderfeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];
    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(<div key={j}>{item.name}</div>);
      });
      tabPanels.push(tabPanels);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <>
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
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Outstanding Products</h2>
          </div>
          {renderfeaturedProducts(featproducts)}
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
