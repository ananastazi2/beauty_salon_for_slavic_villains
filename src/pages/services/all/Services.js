import React from 'react'
import './Services.css'
import useWindowSize from '../../../components/WindowsSize.js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import witchingHairRituals from '../../../images/services/hair service.jpg'
import skinCare from '../../../images/services/skin care.jpg'
import pedicure from '../../../images/services/pedicure.jpg'
import massage from '../../../images/services/massage.jpg'
import makeup from '../../../images/services/makeup.png'
import manicure from '../../../images/services/manicure.jpg'
import { routes } from "../../../consts/RouteConsts.js";

function Services() {
  let currentWidth;
  const tabletWidth = 800;

  const services = [
      {
        image: witchingHairRituals,
        caption: 'Witching Hair Rituals',
        pageLink: `${routes.services.base}${routes.services.witchingHairRituals}`
      },
      {
        image: skinCare,
        caption: 'Ethereal Enchantments Facial',
        pageLink: ''
      },
      {
        image: pedicure,
        caption: 'Moonlit Potion Pedicure',
        pageLink: ''
      },
      {
        image: massage,
        caption: 'Sorcerers Stone Massage',
        pageLink: ''
      },
      {
        image: makeup,
        caption: 'Forest Nymph Manicure',
        pageLink: ''
      },
      {
        image: manicure,
        caption: 'Mythical Creature Glamour',
        pageLink: ''
      }
  ];

  function getIndex(i) {
    if (width < tabletWidth) {
      if (i % 3 === 1) 
        return i + 1;
      if (i % 3 === 2)
        return i - 1;
      return i;
    }
  }

  const [width] = useWindowSize();
  useEffect(() => {
    currentWidth = width;
  }, [width]);

  return (
    <main>
      <h1 className='page-header services-header'>Our serv<span className='etno-letters'>i</span>ces</h1>

      <section className='all-services-section'>
        {services.map((el, i) => (
            <Link to={el.pageLink}>
              <figure className='service-item' key={i} style={{ order: getIndex(i) }}> 
                <img className='picture' src={el.image} />
                <figcaption className='name'>
                  {el.caption}
                </figcaption>
              </figure>
            </Link>
          )
        )}
      </section>

    </main>
  )
}

export default Services