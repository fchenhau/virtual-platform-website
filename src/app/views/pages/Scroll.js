import React from 'react'
import Slider from "react-slick"
import "../../styles/carousel.css"

const Scroll = () => {

    const settings = {
        className: "slider center",
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
        ]
    };

    const videoSettings = {
        className: "slider center",
        lazyLoad: true,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
        ]
    };

    const imageCount = 12;
    const videoCount = 6;

    return (
        <>
            <div className="p-3">
                <h2>Image Horizontal Scroll</h2>

                <Slider {...settings}>
                    {
                        [...new Array(imageCount)].map((item, index) => {
                            return (
                                <div className="slider-content d-flex flex-column justify-content-center align-items-center p-5"
                                    key={index}>
                                    <img src="https://picsum.photos/200" width="200px" height="auto" />
                                    <h4>Image {index + 1}</h4>
                                </div>
                            )
                        })
                    }
                    
                </Slider>
            </div>

            <div className="p-3">
                <h2>Video Horizontal Scroll</h2>

                <Slider {...videoSettings}>
                    <div className="slider-content d-flex flex-column justify-content-center align-items-center p-5">
                        <iframe width="200" height="auto" frameborder="0" allowfullscreen="allowfullscreen"
                            src="https://www.youtube.com/embed/84znrPmOePc?list=RDtpmawc8gAjY">
                        </iframe>
                        <h4>Video {1}</h4>
                    </div>
                    <div className="slider-content d-flex flex-column justify-content-center align-items-center p-5">
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAirAsia%2Fvideos%2F983622875434059%2F&" 
                            width="200" height="auto" frameBorder="0" allowFullScreen="allowfullscreen">
                        </iframe>
                        <h4>Video {2}</h4>
                    </div>
                    <div className="slider-content d-flex flex-column justify-content-center align-items-center p-5">
                        <iframe width="200" height="auto" frameborder="0" allowfullscreen="allowfullscreen"
                            src="https://www.youtube.com/embed/84znrPmOePc?list=RDtpmawc8gAjY">
                        </iframe>
                        <h4>Video {3}</h4>
                    </div>
                    <div className="slider-content d-flex flex-column justify-content-center align-items-center p-5">
                        <iframe width="200" height="auto" frameborder="0" allowfullscreen="allowfullscreen"
                            src="https://www.youtube.com/embed/84znrPmOePc?list=RDtpmawc8gAjY">
                        </iframe>
                        <h4>Video {4}</h4>
                    </div>
                    <div className="slider-content d-flex flex-column justify-content-center align-items-center p-5">
                        <iframe width="200" height="auto" frameborder="0" allowfullscreen="allowfullscreen"
                            src="https://www.youtube.com/embed/84znrPmOePc?list=RDtpmawc8gAjY">
                        </iframe>
                        <h4>Video {5}</h4>
                    </div>
                    <div className="slider-content d-flex flex-column justify-content-center align-items-center p-5">
                        <iframe width="200" height="auto" frameborder="0" allowfullscreen="allowfullscreen"
                            src="https://www.youtube.com/embed/84znrPmOePc?list=RDtpmawc8gAjY">
                        </iframe>
                        <h4>Video {6}</h4>
                    </div>
                </Slider>
            </div>
        </>
      );
};

export default (Scroll);