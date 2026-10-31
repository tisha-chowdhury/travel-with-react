import React from 'react'
import './Package.css'
import packageBG from '../../assets/images/packageBG.png'

const Package = () => {
  return (
    <section id="package">
        <div className="package_shape">
            <img src={packageBG} alt="packageBG"/>
        </div>
        <div className="container">
            <div className="title_wrapper">
                <h2 className="sec_tittle">
                    Special Package
                </h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div className="package_wrapper">
                <div className="package_item">
                    <div className="package_item_inner">
                        <h3>STARTER</h3>
                        <h3 className="price">$9</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check disable"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check disable"></i>
                                <span>International Air Ticket.</span>
                            </li>
                        </ul>
                        <a href="#" className="package_btn">GET STARTEd</a>
                    </div>
                    <p className="trial">4 Days Trial Available</p>
                </div>
                <div className="package_item">
                    <div className="package_item_inner">
                        <h3>STARTER</h3>
                        <h3 className="price">$9</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check disable"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check disable"></i>
                                <span>International Air Ticket.</span>
                            </li>
                        </ul>
                        <a href="#" className="package_btn">GET STARTEd</a>
                    </div>
                    <p className="trial">4 Days Trial Available</p>
                </div>
                <div className="package_item">
                    <div className="package_item_inner">
                        <h3>STARTER</h3>
                        <h3 className="price">$9</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check disable"></i>
                                <span>International Air Ticket.</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-circle-check disable"></i>
                                <span>International Air Ticket.</span>
                            </li>
                        </ul>
                        <a href="#" className="package_btn">GET STARTEd</a>
                    </div>
                    <p className="trial">4 Days Trial Available</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Package