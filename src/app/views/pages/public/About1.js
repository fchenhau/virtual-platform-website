import React from 'react'
import RaisingDigitalHeroesImage from "../../../assets/images/About/about_1.png"
import RaisingDigitalHeroesMobileImage from "../../../assets/images/About/about_1_mobile.png"
import "../../../styles/about1.scss"

const About1 = () => {

    return (
        <div id="about_page_1">

            {/* Desktop View */}
            <div className="d-md-block d-none">
                <div className="about-page-1-text">
                    <h1 className="text-header">RAISING DIGITAL HEROES</h1>
                    <p className="text-default">
                        The #mydigitalmaker Virtual Fair 2020 is the flagship event of the #mydigitalmaker Movement since 2017. 
                        The Fair celebrates what the movement has accomplished throughout the year. 
                        It is also to encourage Malaysian youths to grow from digital users to digital innovators.
                    </p>
                    <p className="text-default">
                        The #mydigitalmaker Virtual Fair 2020 is the premier digital tech education exhibition in the region!
                    </p>
                </div>

                <div className="d-flex align-items-center h-100">
                    <img src={RaisingDigitalHeroesImage} alt="Raising Digital Heroes" 
                        className="img img-fluid" />
                </div>
            </div>

            {/* Mobile View */}
            <div className="d-block d-md-none h-100">
                <div className="d-flex flex-column justify-content-center h-100">
                    <img src={RaisingDigitalHeroesMobileImage} alt="Raising Digital Heroes" 
                        className="img img-fluid" />
                </div>

                <div className="about-page-1-text px-4 mx-auto">
                    <h3 className="text-header mb-0">RAISING DIGITAL HEROES</h3>
                    <p className="text-default text-justify">
                        The #mydigitalmaker Virtual Fair 2020 is the flagship event of the #mydigitalmaker Movement since 2017. 
                        The Fair celebrates what the movement has accomplished throughout the year. 
                        It is also to encourage Malaysian youths to grow from digital users to digital innovators.
                    </p>
                    <p className="text-default">
                        The #mydigitalmaker Virtual Fair 2020 is the premier digital tech education exhibition in the region!
                    </p>
                </div>
            </div>
        </div>
    )
};

export default (About1);