import React from 'react'
import stripe
  from "../../../images/witchingHairRituals/etno/stripe.png";

import './WitchingHairRituals.css';
import image1 from "../../../images/witchingHairRituals/image1.webp";
import image2 from "../../../images/witchingHairRituals/image2.png";
import image3 from "../../../images/witchingHairRituals/image3.png";
import image4 from "../../../images/witchingHairRituals/image4.png";
import image5 from "../../../images/witchingHairRituals/image5.png";
import image6 from "../../../images/witchingHairRituals/image6.png";
import image7 from "../../../images/witchingHairRituals/image7.png";
import image8 from "../../../images/witchingHairRituals/image8.png";
import image9 from "../../../images/witchingHairRituals/image9.png";


function WitchingHairRituals() {
  const bubbleAmount = 70;
  const minBubbleValue = 10;
  const maxBubbleValue = 40;
  const randInRange = (min, max) => min + Math.random() * (max - min);
  const randBubbleDelay = () => Math.random() % 5 + 's';

  return (
      <>
        <main className='main-content2'>



          <div className="header-with-background2">
            <h1 id='hair-header'>Witching Hair Rituals</h1>

          </div>

          <img src={stripe} className='etno-stripe2' alt="Decorative Stripe"/>
          <div className='description2'>
            <p>
              Embark on a journey to enchanting beauty with our Witching Hair Rituals, guided by the mystical
              Rusalka, the water
              nymph renowned for her captivating charm. This transcendent experience draws on the potent
              powers of natural
              essences and the whispered secrets of the deep.
            </p>
          </div>


          <div className='anim'>
            <div className='bubble-effect'>
              {[...Array(bubbleAmount)].map(
                  (e, i) => 
                  <span key={i} style={{ 
                    '--i': randInRange(minBubbleValue, maxBubbleValue),
                    'animationDelay': randBubbleDelay()
                  }}  />
              )}
            </div>
          </div>

          <div className="header-with-background2">
            <h2 id='hair-header2'>Rusalka's Witching Hair Rituals</h2>

          </div>


          <section className='hair'>
            <div id='image-container1'>
            <figure2>
              <div id='image-container1'>
                <img src={image1} id='image' class="custom-image"/>
                <div className='outline2'/>
              </div>

            </figure2>
            </div>
            <div className='right-section2'>
              <div className='description1'>
                <p>
                  Unveil the secret to divine tresses with Rusalka's Witching Hair Rituals. Immerse
                  yourself in an otherworldly session where Rusalka harnesses the elemental force of water
                  to infuse your hair with vitality and luster. Our water nymph doesn't just treat your
                  hair; she transforms it with an alchemy of magical potions and enchanting techniques.
                </p>


              </div>
            </div>
          </section>



          <div className="sections-container">


            <section className='what-to-expect'>
              <h2 id='hair-header2'>What to Expect:</h2>
              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image2} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='first-section'>

                  <div className='text-description'>
                    <p>
                      <b>Potion Preparation:</b> Begin with<br/>
                      a personalized consultation<br/>
                      where Rusalka selects a blend<br/>
                      of magical infusions tailored to<br/>
                      your hair's needs.
                    </p>


                  </div>
                </div>
              </div>

              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image3} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='first-section'>

                  <div className='text-description'>
                    <p>
                      <b>Enchanting Wash:</b> A soothing<br/>
                      scalp massage under<br/>
                      cascading water prepares your<br/>
                      locks for the <br/>
                      transformation.
                    </p>


                  </div>
                </div>
              </div>


              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image4} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='first-section'>

                  <div className='text-description'>
                    <p>
                      <b>Spellbinding Treatment:</b> <br/>
                      Experience our signature hair<br/>
                      mask, a concoction of<br/>
                      nourishing ingredients that<br/>
                      penetrates deeply to revitalize<br/>
                      every strand.
                    </p>


                  </div>
                </div>
              </div>

              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image5} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='first-section'>

                  <div className='text-description'>
                    <p>
                      <b>Celestial Styling:</b> Emerge with<br/>
                      a hairstyle crafted to reflect<br/>
                      your inner goddess, whether<br/>
                      you seek the waves of a siren<br/>
                      or the braids of a queen.
                    </p>


                  </div>
                </div>
              </div>


            </section>

            <section className='benefits'>
              <h2 id='hair-header2'>Benefits of the Ritual:</h2>
              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image6} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='second-section'>

                  <div className='text-description'>
                    <p>
                      <b>Lustrous Shine:</b> Unlock a<br/>
                      sheen that rivals the<br/>
                      glimmering surface of<br/>
                      Rusalka's aquatic realm.
                    </p>


                  </div>
                </div>

              </div>

              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image7} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='second-section'>

                  <div className='text-description'>
                    <p>
                      <b>Silken Touch:</b> Your hair will<br/>
                      feel as soft as the finest silk<br/>
                      spun by mythical creatures.
                    </p>


                  </div>
                </div>
              </div>

              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image8} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='second-section'>

                  <div className='text-description'>
                    <p>
                      <b>Strength and Resilience:</b> Like<br/>
                      the enduring spirits of the<br/>
                      water, your locks will gain<br/>
                      newfound strength to resist the<br/>
                      trials of the elements.
                    </p>


                  </div>
                </div>
              </div>

              <div className="image-text-container">
                <figure>
                  <div id='image-container2'>
                    <img src={image9} id='image' class="custom-image"/>
                    <div className='outline2'/>
                  </div>

                </figure>
                <div className='second-section'>

                  <div className='text-description'>
                    <p>
                      <b>Vibrant Vitality:</b> Watch as<br/>
                      your hair is imbued with life,<br/>
                      swaying with the grace and<br/>
                      vitality of water plants in a<br/>
                      serene pond.
                    </p>


                  </div>
                </div>
              </div>

            </section>


          </div>

          <div className='description2'>
            <p>
              Book your appointment with Rusalka today and let the magic begin. Your journey towards hair that
              is as<br/>
              enchanting as the deepest waters and as radiant as the moonlit paths of old awaits.
            </p>
          </div>

          <img src={stripe} className='etno-stripe2' alt="Decorative Stripe"/>

          <div className="header-with-background2">
            <h2 id='hair-header2'>Price List</h2>

          </div>

          <div className="container">
            <div className='price-description'>
              <p>Rusalka's Enchantment Package:</p>
              <ul>
                <li>Consultation & Potion Preparation: $30</li>
                <li>Enchanting Wash & Scalp Massage: $45</li>
                <li>Spellbinding Treatment & Hair Mask: $60</li>
                <li>Celestial Styling & Finish: $50</li>
              </ul>
              <p>Total Package: $185</p>

              <br/>
              <br/>

              <p>Additional Services:</p>
              <ul>
                <li>Enchanted Color Enhancements: Starting at $85</li>
                <li>Mystic Strength Hair Fortifying Treatment: $55</li>
                <li>Goddess Glow Hair Shine Treatment: $40</li>
              </ul>

            </div>

            <div className='price-description'>
              <p>A la Carte Services:</p>
              <ul>
                <li>Magical Elixir Hair Mask (add-on): $25</li>
                <li>Siren's Waves Styling: $40</li>
                <li>Queen's Braids Styling: $50</li>
                <li>Nymph's Touch Updo: $65</li>
              </ul>
              <br/>
              <br/>
              <br/>

              <p>Monthly Membership:</p>
              <ul>
                <li>Includes one full package service and one a la<br/> carte service per month: $150/month
                </li>

              </ul>

            </div>


          </div>


          <div className='description2'>
            <p>
              Please note that prices are subject to change based on the length and texture of hair, as well
              as any additional<br/>
              personalized treatments that may be recommended. For the most accurate pricing, we invite you to
              schedule a<br/>
              consultation with our mystical stylist, Rusalka.
            </p>
          </div>


        </main>
      </>
  )
}

export default WitchingHairRituals