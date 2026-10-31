import React from 'react'
import './NewsLatter.css'
import newsletter1 from '../../assets/images/newsletter1.png'
import newslatter2 from '../../assets/images/newslatter2.png'
import newslatterBox_img from '../../assets/images/newslatterBox_img.png'

const NewsLatter = () => {
  return (
    <section id="newsletter">
        <div class="container">
            <div class="newslatter_gal">
                <div class="newslatter_gal_item">
                    <img src={newsletter1} alt="newsletter1"/>
                </div>
                <div class="newslatter_gal_item">
                    <img src={newslatter2} alt="newslatter2"/>
                </div>
            </div>
            <div class="newslatter_box">
                <div class="newslatter_box_img">
                    <img src={newslatterBox_img} alt="newslatterBox_img"/>
                </div>
                <div class="newslatter_box_form">
                    <h4 class="sec_subtittle">
                        SUBSCRIBE FOR OFFERS
                    </h4>
                    <h2 class="sec_tittle">
                        TO GET ALL NEWS SUBSCRIBE OUR NEWSLETTER
                    </h2>
                    <form class="newslatter_form">
                        <div class="form_group">
                            <i class="fa-regular fa-envelope"></i>
                            <input type="email" placeholder="Enter Your Email"/>
                        </div>
                        <button type="submit">
                            Let's Go
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLatter