import React from 'react'
import './Gallary.css'
import GI1 from '../../assets/images/GI1.png'
import GI2 from '../../assets/images/GI2.png'
import GI3 from '../../assets/images/GI3.png'
import GI4 from '../../assets/images/GI4.png'
import GI5 from '../../assets/images/GI5.png'
import GI6 from '../../assets/images/GI6.png'
import GI7 from '../../assets/images/GI7.png'
import GI8 from '../../assets/images/GI8.png'
import packageBG from '../../assets/images/packageBG.png'


const Gallary = () => {
  return (
    <section id="gallary">
        <div className="gal_shape">
            <img src={packageBG} alt="galBG"/>
        </div>
        <div className="container">
            <div className="title_wrapper">
                <h2 className="sec_tittle">
                    Most Destinations
                </h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div className="gal_wrapper">
                <div className="gal_item">
                    <div className="gal_item_inner large">
                        <img src={GI1} alt="GI1"/>
                        <div className="overlay">
                            <h3>North America</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner small">
                        <img src={GI2} alt="GI2"/>
                        <div className="overlay">
                            <h3>Cambodia</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>

                </div>
                <div className="gal_item">
                    <div className="gal_item_inner small">
                        <img src={GI3} alt="GI3"/>
                        <div className="overlay">
                            <h3>South America</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner large">
                        <img src={GI4} alt="GI4"/>
                        <div className="overlay">
                            <h3>Cape Town</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                </div>
                <div className="gal_item">
                    <div className="gal_item_inner large">
                        <img src={GI5} alt="GI5"/>
                        <div className="overlay">
                            <h3>Europe</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner small">
                        <img src={GI6} alt="GI6"/>
                        <div className="overlay">
                            <h3>South Africa</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                </div>
                <div className="gal_item">
                    <div className="gal_item_inner small">
                        <img src={GI7} alt="GI7"/>
                        <div className="overlay">
                            <h3>New York</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner large">
                        <img src={GI8} alt="GI8"/>
                        <div className="overlay">
                            <h3>Australia</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallary