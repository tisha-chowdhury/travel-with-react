import React from 'react'
import './Brand.css'
import Group106 from '../../assets/images/Group106.png'
import Group107 from '../../assets/images/Group107.png'
import Group108 from '../../assets/images/Group108.png'
import Group109 from '../../assets/images/Group109.png'

const Brand = () => {
  return (
    <section id="brand">
        <div class="container">
            <div class="brand_wrapper">
                <div class="brand_item one">
                    <img src={Group106} alt="Group106 image"/>
                </div>
                <div class="brand_item two">
                    <img src={Group107} alt="Group107 image"/>
                </div>
                <div class="brand_item three">
                    <img src={Group108} alt="Group108 image"/>
                </div>
                <div class="brand_item four">
                    <img src={Group109} alt="Group109 image"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brand