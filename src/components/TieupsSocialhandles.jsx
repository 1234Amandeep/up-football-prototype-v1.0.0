import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TieupsSocialhandles() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} id="carousel-next-btn" onClick={onClick} />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick} id="carousel-prev-btn" />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="partners-socail-media-snap mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <h4 className="text-center mb-5">Our Partner</h4>
              <Slider {...settings} className="me-lg-0 me-5 ms-5 mb-5">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2019/12/16.png"
                    // 16
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/AOSM.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/aquagri.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/Axis-Bank.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/BUNKERHILL.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/Genius.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/Khelo-India.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/KINGFISHER.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/PSPB.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.footballdelhi.com/wp-content/uploads/2023/06/SAI.png"
                    className="d-block w-30"
                    alt="..."
                  />
                </div>
              </Slider>
            </div>

            <div className="col-lg-4 d-flex justify-content-center">
              <div className="fb-embed">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFootballDelhi&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                  width="340"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
            {/* <div className="row">
            <a
              className="twitter-timeline"
              href="https://twitter.com/FootballDelhi?ref_src=twsrc%5Etfw"
            >
              Tweets by FootballDelhi
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div> */}
            {/* make it col-lg-8 */}
          </div>
        </div>
      </section>
    </>
  );
}
