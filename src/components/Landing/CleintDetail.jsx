import React from "react";
import { Container } from "semantic-ui-react";
import Slider from "react-slick";

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="cleint-detail">
        <h2 className="text-center">Some of Our Clients</h2>
        <div className="bgColor">
          <Container>
            <Slider {...settings}>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/ebench.png"
                  alt="slide"
                />
              </div>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/bhavna.png"
                  alt="slide"
                />
              </div>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/bavom.jpg"
                  alt="slide"
                />
              </div>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/hosoul.jpg"
                  alt="slide"
                />
              </div>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/expedite.png"
                  alt="slide"
                />
              </div>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/ulean.png"
                  alt="slide"
                />
              </div>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/qss.png"
                  alt="slide"
                />
              </div>
              <div>
                <img
                  src="https://www.shilshatech.com/assets/technologies_icons/aegis.png"
                  alt="slide"
                />
              </div>
            </Slider>
          </Container>
        </div>
      </div>
    </>
  );
};
