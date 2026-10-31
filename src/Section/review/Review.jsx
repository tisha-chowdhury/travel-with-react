import React from 'react'
import './Review.css'
import packageBG from '../../assets/images/packageBG.png'

const Review = () => {
  return (
    <section id="review">
        <div class="review_shape">
            <img src={packageBG} alt="shape"/>
        </div>
        <div class="container">
            <div class="title_wrapper">
                <h2 class="sec_tittle">
                    CUSTOMER WORDS
                </h2>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div class="review_wrapper">
                <div class="review_item">
                    <div class="review_img">
                        <img src="./images/review1.jpg" alt="img"/>
                    </div>
                    <div class="review_ditails">
                        <h4>Victoria Wotton</h4>
                        <h5>Traveler, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src="./images/review2.jpg" alt="img"/>
                    </div>
                    <div class="review_ditails">
                        <h4>Sonia Marmeladova</h4>
                        <h5>Traveler, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src="./images/review3.jpg" alt="img"/>
                    </div>
                    <div class="review_ditails">
                        <h4>Hindley Earnshaw</h4>
                        <h5>Traveler, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src="./images/review4.jpg" alt="img"/>
                    </div>
                    <div class="review_ditails">
                        <h4>Catherine Earnshaw</h4>
                        <h5>Traveler, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src="./images/review5.jpg" alt="img"/>
                    </div>
                    <div class="review_ditails">
                        <h4>Isabella Linton</h4>
                        <h5>Traveler, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div class="review_item">
                    <div class="review_img">
                        <img src="./images/review6.jpg" alt="img"/>
                    </div>
                    <div class="review_ditails">
                        <h4>Jennifer Williams</h4>
                        <h5>Traveler, Guide</h5>
                        <div class="review_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review