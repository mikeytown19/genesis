/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.svg'
import internachi from '../../img/tools.jpg'
import militarydiscount from '../../img/tools.jpg'



const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
        <div className='columns'>

          <div className='column has-text-centered'>
            <div>
              <p className='heading'><strong>SOCIAL MEDIA</strong></p>
                <a href='https://www.facebook.com/'>
                  <img src={facebook} alt='' className="social-media-icons" />
                </a>
                <a href='https://www.instagram.com/'>
                  <img src={instagram} alt='' className="social-media-icons" />
                </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
