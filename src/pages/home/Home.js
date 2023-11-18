import React from 'react'
import './Home-header.css'
import './Home-main.css'
import ownerImage from '../../images/Baba_Yaga.jpg'
import etnoStripeBackground from '../../images/etnoSymbolsDetails/about_us_background_stripe_FernFlower.png'

function Home() {
  return (
    <>
        <div id='background-img'></div>
        <header className='landing-page'>
            <p className='header-text'>
                <span className='pre-body'>Beauty salon in the dense Dark Forest Kingdom</span>
                <br></br>
                <span className='header-body'>A place where every shade of beauty is felt in the dark</span>
            </p>
            <button className='button-clear-style scroll-down'>
                <span className='label'>SEE THE ROOTS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none" id='arrow-down'>
                    <g filter="url(#filter0_d_17_37)">
                        <path d="M3 2L7.5 8.5H33.5L38 2" stroke="white" stroke-width="2"/>
                        <path d="M32 14.5H9.5L21 33.5L32 14.5Z" stroke="white" stroke-width="2"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_17_37" x="0.177807" y="0.430786" width="40.6444" height="38.032" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_37"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_37" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </button>
        </header>

        <main className='main-content'>
            <h1 id='about-us-header'>Abou<span className='etno-letters'>t</span> us</h1>
            <section className='about-us'>
                <img src={etnoStripeBackground} className='etno-background-left' />
                <figure>
                    <div id='image-container'>
                        <img src={ownerImage} id='owner-image' />
                        <div className='outline' />                    
                    </div>
                    <figcaption>Baba Yaga, the founder</figcaption>
                </figure>

                <div className='right-section'>
                    <div className='description'>
                        <p>
                            Step into our enchanting beauty salon, founded by the legendary Baba Yaga, where evil mythical creatures find solace and metamorphosis. 
                        </p>

                        <p>
                            Nestled in a Dark Forest Kingdom, our salon blends ancient charm with modern expertise. Our expert team of stylists and therapists, trained in the arcane arts, offers specialized services tailored to the unique needs of all wicked creatures, embracing their unique beauty.
                        </p>

                        <p>
                            Join us for a magical experience where traditional beauty rituals meets transformation, experiencing the mystical touch of our skilled practitioners, guided by the wisdom of Baba Yaga herself.
                        </p>
                    </div>

                    <button className='button-clear-style to-services'>
                        <span className='to-services-label'>SPARK THE AFTERLIFE</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="225" height="57" viewBox="0 0 225 57" fill="none" id='to-services-background'>
                            <g filter="url(#filter0_d_26_336)">
                                <path d="M186.5 23.9766L191.824 27.5M200.318 33.1205L198.1 23.9766M200.318 33.1205L190.775 34.6152M200.318 33.1205L191.824 27.5M191.824 27.5L189.5 30.5L194 24.5" stroke="#006432" stroke-width="2" shape-rendering="crispEdges"/>
                            </g>
                            <path d="M1 15V1H223.5V55.5H1V43" stroke="#006432" stroke-width="2"/>
                            <defs>
                                <filter id="filter0_d_26_336" x="184.948" y="21.1426" width="21.5974" height="18.4606" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="2" dy="1"/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0.611765 0 0 0 0 0.486275 0 0 0 0.74 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_336"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_336" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </button>
                </div>
                <img src={etnoStripeBackground} className='etno-background-right' />
            </section>
        </main>
    </>
  )
}

export default Home