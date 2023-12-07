import React from 'react';
import './Contacts.css';
import stripe from "../../images/etnoSymbolsDetails/about_us_background_stripe_FernFlower.png";
import  { useState } from 'react';


function Contacts() {
    const [isFormValid, setIsFormValid] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();


        const form = event.target;
        if (form.checkValidity()) {
            setIsFormValid(true);

        } else {
            setIsFormValid(false);
        }
    };
    return (
        <div className='contacts-container'>
            <div id='background-img1'></div>
            <div className='contact-page'>
                <div className='header-text1'>
                    <p className='pre-body1'>Feel free to contact us and we will get back to you
                        as soon as we can</p>
                    <h1 className='header-body1'>Contact US</h1>
                    <div>
                        <p className='pre-body2'>SAY HI TO THE TEAM<br></br></p>

                    </div>

                </div>

                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <input type='text' id='name' name='name' placeholder='Your name' required/>
                        </div>
                        <div className='input-group'>
                            <input type='email' id='email' name='email' placeholder='Your email address' required
                                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />


                        </div>
                        <div className='input-group'>
                            <input type='tel' id='phone' name='phone' placeholder='Your phone number' required
                                   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        </div>
                        <div className='input-group'>
                  <textarea id='message' name='message' placeholder='How can we help?' required
                            minLength="10"></textarea>
                        </div>


                        <button type="submit" className='button-contact to-contact'>
                            <span className='to-contact-label'>SEND A MESSAGE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="225" height="57" viewBox="0 0 225 57"
                                 fill="none" id='to-services-background'>
                                <g filter="url(#filter0_d_26_336)">
                                    <path
                                        d="M186.5 23.9766L191.824 27.5M200.318 33.1205L198.1 23.9766M200.318 33.1205L190.775 34.6152M200.318 33.1205L191.824 27.5M191.824 27.5L189.5 30.5L194 24.5"
                                        stroke="#39ff14" strokeWidth="2" shapeRendering="crispEdges"/>
                                </g>
                                <path d="M1 15V1H223.5V55.5H1V43" stroke="#006432" strokeWidth="2"/>
                                <defs>
                                    <filter id="filter0_d_26_336" x="184.948" y="21.1426" width="21.5974"
                                            height="18.4606" filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"/>
                                        <feOffset dx="2" dy="1"/>
                                        <feGaussianBlur stdDeviation="1.5"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 0.00392157 0 0 0 0 0.611765 0 0 0 0 0.486275 0 0 0 0.74 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                 result="effect1_dropShadow_26_336"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_336"
                                                 result="shape"/>
                                    </filter>
                                </defs>
                                <rect width="225" height="57" fill="rgba(0, 20, 0, 0.8"/>
                                <g filter="url(#filter0_d_26_336)">
                                    <path
                                        d="M186.5 23.9766L191.824 27.5M200.318 33.1205L198.1 23.9766M200.318 33.1205L190.775 34.6152M200.318 33.1205L191.824 27.5M191.824 27.5L189.5 30.5L194 24.5"
                                        stroke="#006432" strokeWidth="2" shapeRendering="crispEdges"/>
                                </g>
                            </svg>
                        </button>
                    </form>
                    {isFormValid === false && <p className="error-message">Please fill in the form correctly.</p>}
                    {isFormValid === true && <p className="success-message">Form submitted successfully!</p>}
                </div>


            </div>
            <img src={stripe} className='background-right2'/>
        </div>

    );
}

export default Contacts;
