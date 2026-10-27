import React from 'react'
import './Banner.css'
import bannerImg from '../../../assets/images/background_img.jpg'

const Banner = () => {
  return (
    <section id="banner" style={{backgroundImage: `url(${bannerImg})`}}>
        <div className="container">
            <div className="banner_wrapper">
                <h1>CHOOSE <br/> THE PERFECT DESTINATIONS.</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation.</p>
                <form>
                    <div className="banner_inner">
                        <div className="banner_search">
                            <input type="text" placeholder="Enter Your Location"/>
                            <i className="fa-solid fa-magnifying-glass"></i>

                        </div>
                        <div className="map_circle">
                            <img src="./images/location dot.png" alt="location dot"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Banner