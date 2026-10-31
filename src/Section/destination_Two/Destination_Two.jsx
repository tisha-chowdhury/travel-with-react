import React from 'react'
import './Destination_Two.css'
import Destination2 from '../../assets/images/Destination2.png'
import destination2BG from '../../assets/images/destination2BG.png'

const Destination_Two = () => {
  return (
    <section id="destination_Two">
        <div className="container">
            <div className="destination_Two_wrapper">
                <div className="destination_Two_img">
                    <img src={Destination2} alt="destination2"/>
                </div>
                <div className="destination_Two_contant">
                    <h4 className="sec_subtittle">
                        FEATURED DESTINATION
                    </h4>
                    <h2 className="sec_tittle">
                        TAKE ONLY MEMORIES, LEAVe ONLY FOOTPRINTS.
                    </h2>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </div>
        <div className="destination_Two_shape">
            <img src={destination2BG} alt="destination2BG"/>
        </div>
    </section>
  )
}

export default Destination_Two