import img1 from "./../img/Frame-dw.png";
import img2 from "./../img/Group-B.png";
import img3 from "./../img/ic_Chevron Down.svg"
import img4 from "./../img/Copy-Icon.svg"
import img5 from "./../img/Load-Icon.svg"
import img6 from "./../img/Link-Icon.svg"
import img7 from "./../img/Coin-Icon.svg"
import img8 from "./../img/right-arrow.svg"
import "./DeposittWithdraw.css";

const DeposittWithdraw = (props ) => {
  return (
    <div className='AB-DeposittWithdraw'>
      <div className='AB-title-Deposit'>
        <h2>{props.title}</h2>
        <button><img src={img1} alt="" /></button>
      </div>
      <div className='AB-Crypto-Fiat'>
        <button>Crypto</button>
        <button>Fiat</button>
      </div>
      <div className='AB-Coin'>
        <p>Coin :</p>
        <div className="AB-Select">
          <div className="AB-select-option">
            <div className="AB-img-crypto">
              <img src={img2} alt="" />
              <span>Bitcoin</span>
            </div>
            <p>BTC</p>
          </div>
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="AB-Balance">
        Total Balance : <span>0.0121285425 BTC</span>
        <button>
          <img src={img5} alt="" />
        </button>
      </div>
      {props.Address &&<div className="AB-Address">
        <h4>BTC Address</h4>
        <div className="AB-code">
          <p>bc1qXY2kGdygjrsqtzE2n0yrf2XY3</p>
          <button>
            Copy
            <img src={img4} alt="" />
          </button>
        </div>
      </div>}
      {props.WithdrawAddress &&<div className="AB-Withdraw-Address">
        <form>
          <div className="AB-The-input">
            <div>
              <label for="withdraw-address"><img src={img6} alt="" /></label>
              <button>Paste</button>
            </div>
            <input type="text" id="withdraw-address" name="withdraw-address" placeholder=" |  Withdraw Address" />
          </div>
          <div className="AB-The-input">
            <div>
              <label for="amount"><img src={img7} alt="" /></label>
              <button>Select All</button>
            </div>
            <input type="text" id="amount" name="amount" placeholder=" |  Amount" />
          </div>
          <div className="AB-Transaction-submit">
            <p>Transaction Fee : <span>0.0005 BTC</span></p>
            <button>Proced Withdrawal <img src={img8} alt="" /></button>
          </div>
        </form>
      </div>}
      <div className="AB-Tips">
        <h2>Tips</h2>
        <ul>
          <li>If you have deposited please pay attention to the text messagesm site letters and emails we send to you.</li>
          <li>Coins will be deposited after 1 nwtwork confrimations.</li>
          <li>Until 2 confrimations are mafe.an equivalent amount of y will be temporarily unavailable for witdrawals.</li>
          <li className="li-4">You could check the blockchain records and deposit status at Deposit Records.</li>
        </ul>
      </div>
    </div>
  );
}

export default DeposittWithdraw;