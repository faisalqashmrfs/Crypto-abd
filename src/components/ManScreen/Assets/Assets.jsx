import "./Assets.css"
import Table from "../Table/Table"
import img1 from "./../img/Background.png"
import img2 from "./../img/chartcercil.png"
import img3 from "./../img/Vector-oring.png"
import img4 from "./../img/Vector-blue.png"
import img5 from "./../img/Vector-red.png"
import img6 from "./../img/Vector-blue2.png"
import Bero from "../ChartS/ChartS"

const Assets = () => {
  return (
    <div className="AB-Assets">
      <div className="AB-FirstAssets">
          <div className="AB-CurrentBalance">
            <img src={img1} alt="" />
            <div className="AB-text-CurrentBalance">
              <span className="AB-Span">Current Balance</span>
              <p className="AB-P1">$5,750,20</p>
              <p className="AB-P2">0.27894652 (BTC)</p>
            </div>
          </div>
          <Bero />
          <div className="AB-CericlBalance">
            <img src={img2} alt="" />
            <ul>
              <li><img src={img3} alt="" />Bitcoin <span>20%</span></li>
              <li><img src={img4} alt="" />Tether <span>20%</span></li>
              <li><img src={img5} alt="" />Uniswap <span>20%</span></li>
              <li><img src={img6} alt="" />Matic <span>20%</span></li>
            </ul>
          </div>
      </div>
      <div className="AB-SecondAssets">
        <div className="AB-RangAccount">
          <p>1,077.3 USD</p>
          <div className="AB-RangAccount-img-p">
            <img src="" alt="" />
            <p>Main Account</p>
          </div>
          <div class="AB-custom-line"></div>
        </div>
        <div className="AB-RangAccount">
          <p>1,077.3 USD</p>
          <div className="AB-RangAccount-img-p">
            <img src="" alt="" />
            <p>Trading Account</p>
          </div>
          <div class="AB-custom-line1"></div>
        </div>
        <div className="AB-RangAccount">
          <p>1,077.3 USD</p>
          <div className="AB-RangAccount-img-p">
            <img src="" alt="" />
            <p>Margin Account</p>
          </div>
          <div class="AB-custom-line2"></div>
        </div>
        <div className="AB-RangAccount">
          <p>1,077.3 USD</p>
          <div className="AB-RangAccount-img-p">
            <img src="" alt="" />
            <p>Futures Account</p>
          </div>
          <div class="AB-custom-line3"></div>
        </div>
      </div>
      <Table div3={true} EndTable={false} />
    </div>
  )
}

export default Assets