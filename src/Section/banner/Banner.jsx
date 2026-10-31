import React from 'react'
import './Banner.css'
import bannerImg from '../../assets/images/background_img.jpg'
import location from '../../assets/images/location_dot.png'
import { IoMdSearch } from "react-icons/io";


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
                            <IoMdSearch />
                        </div>
                        <div className="map_circle">
                            <img src={location} alt="location"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Banner