import React from 'react'
import './Destination_One.css'
import destinationImg from '../../assets/images/destination.jpg'
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const Destination_One = () => {
  return (
    <section id="destination_One">
        <div className="container">
            <div className="destination_One_wrapper">
                <div className="destination_contant">
                    <h4 className="sec_subtittle">
                        FEATURED DESTINATION
                    </h4>
                    <h2 className="sec_tittle">
                        CHOOSE <br/> THE PERFECT ACCOMMODATION.
                    </h2>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>
                <div className="destination_video">
                    <img src={destinationImg} alt="destination.jpg"/>
                    <a href="#" className="destination_video_icon">
                        <FaPlay />
                    </a>
                </div>
            </div>
            <div className="book_now">
                <div className="location_price">
                    <div className="location">
                        <h4>TRAVEL LOCATION</h4>

                        <div className="star_wrapper">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className="price">
                        <p className="paragraph">
                            Tour Price
                        </p>
                        <span>$125,99</span>
                    </div>
                </div>
                <a href="#" className="common_btn">book now</a>
            </div>
        </div>
    </section>
  )
}

export default Destination_One