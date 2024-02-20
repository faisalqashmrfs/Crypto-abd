import React, { useState } from 'react';
import './PopUpMenu.css';
import img1 from "./../img/iconM1.png"
import img2 from "./../img/iconM2.png"
import img3 from "./../img/iconM3.png"
import img4 from "./../img/iconM4.png"
import img5 from "./../img/iconM5.png"
import img6 from "./../img/iconM6.png"
import img7 from "./../img/app-store.png"
import img8 from "./../img/google-play.png"
import MarginTrading from "./../img/Margin-Trading.png"
import MobileApp from "./../img/Mobile-App.png"


const PopUpMenu = () => {
  const [isPopupOpen] = useState(true);

  return (
    <div>
      {isPopupOpen && (
        <div className='BA-BlurBackground'>
          <div className='PopUp'>
            <div className='AB-ContainerPopUp'>
              <div className='AB-ContainerPopUpChild'>
                <div className='AB-ContainerPopUpChildCard'>
                  <div className='AB-Image-Card'>
                    <img src={img1} alt="" />
                    <img src={MarginTrading} alt="" className='image-icon' />
                  </div>
                  <div className='AB-title-Card'>
                    <h5>Margin Trading</h5>
                    <p>Trade digi with leverage on Whlae.IO Broker.</p>
                  </div>
                </div>
                <div className='AB-ContainerPopUpChildCard'>
                  <div className="AB-Image-Card">
                    <img src={img2} alt="" />
                    <img src={MobileApp} alt="" className='image-icon' />
                  </div>
                  <div className='AB-title-Card'>
                    <h5>Mobile App</h5>
                    <p>Buy, Sell, Earn and exchange crypto anywhere and anytime.</p>
                  </div>
                </div>
                <div className='AB-ContainerPopUpChildCard'>
                  <div className='AB-Image-Card'>
                    <img src={img3} alt="" />
                  </div>
                  <div className='AB-title-Card'>
                    <h5>Trading API</h5>
                    <p>Automate your cryptocurrency trading with reliable and stable API.</p>
                  </div>
                </div>
              </div>
              <div className='AB-ContainerPopUpChild'>
                <div className='AB-ContainerPopUpChildCard'>
                  <div className=''>
                    <img src={img4} alt="" />
                  </div>
                  <div className='AB-title-Card'>
                    <h5>News</h5>
                    <p>Read the latest crypto news & make beter investing decions.</p>
                  </div>
                </div>
                <div className='AB-ContainerPopUpChildCard'>
                  <div className=''>
                    <img src={img5} alt="" />
                  </div>
                  <div className='AB-title-Card'>
                    <h5>Wedgets</h5>
                    <p>Set up and our widgets to your website and attracr visitors.</p>
                  </div>
                </div>
                <div className='AB-ContainerPopUpChildCard'>
                  <div className='AB-Image-Card'>
                    <img src={img6} alt="" />
                  </div>
                  <div className='AB-title-Card'>
                    <h5>Walet</h5>
                    <p>Buy crypto with your card, trade, and earn on your holdings from our Defi wallet.</p>
                  </div>
                </div>
              </div>
              <div className='AB-ContainerPopUpChild'>
                <div className='AB-GropMenuP'>
                  <p>Other</p>
                  <p>24h Report</p>
                  <p>Press Kilt</p>
                  <p>API Docs</p>
                </div>
                <div className='AB-app-goople'>
                  <div className='AB-app-goople-Box'>
                    <div className='AB-Image-box'>
                      <img src={img7} alt="" />
                    </div>
                    <div className='AB-app-goople-Box-Title'>
                      <span>Download on the</span>
                      <p>App Store</p>
                    </div>
                  </div>
                  <div className='AB-app-goople-Box'>
                    <div className='AB-Image-box'>
                      <img src={img8} alt="" />
                    </div>
                    <div className='AB-app-goople-Box-Title'>
                      <span>Get in on</span>
                      <p>Google Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpMenu;