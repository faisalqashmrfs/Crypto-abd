import "./Table.css";
import { TableData } from "./TableData";
import { TableDataTransaction } from "./TableDataTransaction"
import { TableDataAssets } from "./TableDataAssets"
import img1 from "./../img/Group 47984Arrow.svg"
import img2 from "./../img/FramePlas.svg"
import img3 from "./../img/the-starinassets.svg"
import img4 from "./../img/more-square.svg"
import img5 from "./../img/Load-Icon.svg"
import { TableOrderBock } from "./TableOrderBock";
import { TableOrderBock1 } from "./TableOrderBock1";
import { TableTheOrders } from "./TableTheOrders";
import { Link } from "react-router-dom";

const Table = (props) => {
    return (
        <div>
            {props.div2 && <div>
                <table className="AB-div2">
                    <thead>
                        <td>#</td>
                        <td>Coin<img src={img1} alt="" /></td>
                        <td>Price<img src={img1} alt="" /></td>
                        <td>24h %<img src={img1} alt="" /></td>
                        <td>7d %<img src={img1} alt="" /></td>
                        <td>Market Cap<img src={img1} alt="" /></td>
                        <td>Volume(24h)<img src={img1} alt="" /></td>
                        <td>Circulating Supply<img src={img1} alt="" /></td>
                        <td>Last 90 Days<img src={img1} alt="" /></td>
                        <td>Action<img src={img1} alt="" /></td>
                        <td><img src={img2} alt="" className="AB-Img2-Plas" /></td>
                    </thead>
                    <tbody>
                        {TableData.map((item, index) => {
                            return (
                                <tr className={item.cpriclist} key={index}>
                                    <td>{item.number}</td>
                                    <td className={item.ImgAndName}>
                                        <img src={item.imgCrypto} alt="" />
                                        <div className={item.cNameCrypto}>
                                            <p>{item.nameCrypto}</p>
                                            <span>{item.logoName}</span>
                                        </div>
                                    </td>
                                    <td>{item.Price}</td>
                                    <td>
                                        <div className={item.cNameContainer}>
                                            <img src={item.imgPercentageArrow} alt="" />
                                            <p>{item.FirstPercentage}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={item.cNameContainer}>
                                            <img src={item.imgPercentageArrow} alt="" />
                                            <p>{item.SecondPercentage}</p>
                                        </div>
                                    </td>
                                    <td>{item.MarketCap}</td>
                                    <td>{item.Volume}</td>
                                    <td className={item.cNameLine}>{item.CirculatingSupply}</td>
                                    <td><img src={item.Last90Days} alt="" /></td>
                                    <td className={item.CBtnTradePricList}><button>{item.Action}</button></td>
                                    <td><img src={item.imgStar} alt="" /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}
            {props.div1 && <div>
                <table className="AB-div1">
                    <thead>
                        <td>Coin <img src={img1} alt="" /> </td>
                        <td>Transaction <img src={img1} alt="" /></td>
                        <td>Type <img src={img1} alt="" /></td>
                        <td>ID <img src={img1} alt="" /></td>
                        <td>Date/Time <img src={img1} alt="" /></td>
                        <td>IP <img src={img1} alt="" /></td>
                        <td>Status <img src={img1} alt="" /></td>
                        <td>Fees <img src={img1} alt="" /></td>
                    </thead>
                    <tbody>
                        {TableDataTransaction.map((item1, index1) => {
                            return (
                                <tr key={index1}>
                                    <td>
                                        <img src={item1.imgCoin} alt="" />
                                    </td>
                                    <td className={item1.CTransaction}>
                                        <p>{item1.TransactionPrice}</p>
                                        <span>{item1.TransactionPriceSpan}</span>
                                    </td>
                                    <td>
                                        <div className={item1.CType}>
                                            <img src={item1.TypeImg} alt="" />
                                            <p>{item1.TypeP}</p>
                                        </div>
                                    </td>
                                    <td>{item1.ID}</td>
                                    <td>{item1.DateTime}</td>
                                    <td>{item1.IP}</td>
                                    <td>
                                        <div className={item1.CStatus}>
                                            {item1.Status}
                                        </div>
                                    </td>
                                    <td>{item1.Fees}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}
            {props.div3 && <div>
                <table className="AB-div3">
                    <thead>
                        <td>Asset <img src={img1} alt="" /> </td>
                        <td>Earn <img src={img1} alt="" /></td>
                        <td>On orders <img src={img1} alt="" /></td>
                        <td>Available balance <img src={img1} alt="" /></td>
                        <td>Profit/Loss<img src={img1} alt="" /></td>
                        <td>Operation <img src={img1} alt="" /></td>
                        <td><img src={img3} alt="" /><img src={img1} alt="" /></td>
                    </thead>
                    <tbody>
                        {TableDataAssets.map((item2, index2) => {
                            return (
                                <tr key={index2}>
                                    <td className={item2.ImgAndName}>
                                        <img src={item2.imgCrypto} alt="" />
                                        <div className={item2.cNameCrypto}>
                                            <p>{item2.nameCrypto}</p>
                                            <span>{item2.logoName}</span>
                                        </div>
                                    </td>
                                    <td>{item2.Earn}</td>
                                    <td>{item2.OnOrders}</td>
                                    <td>
                                        <div className={item2.CAvailableBalance}>
                                            {item2.AvailableBalance} <span>{item2.SpanAvailableBalance}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={item2.cNameContainer}>
                                            <img src={item2.imgPercentageArrow} alt="" />
                                            <p>{item2.ProfitLoss}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={item2.CGropBtn}>
                                            <button ><Link to={item2.deposit}>{item2.GropBtnDeposit}</Link></button>
                                            <button><Link to={item2.Withdraw}>{item2.GropBtnWithdraw}</Link></button>
                                            <button><Link to={item2.Trade}>{item2.GropBtnTrade}</Link></button>
                                        </div>
                                    </td>
                                    <td><img src={item2.TheStar} alt="" /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}
            {props.div4 && <div className="AB-TableOrderBock">
                <h1>Order Book</h1>
                <table className="AB-div4">
                    <thead>
                        <td>Price(USDT)</td>
                        <td>Amount</td>
                        <td>Total</td>
                    </thead>
                    <tbody>
                        {TableOrderBock.map((item3, index3) => {
                            return (
                                <tr key={index3}>
                                    <td className={item3.CPriceUSDT}>{item3.PriceUSDT}</td>
                                    <td>{item3.Amount}</td>
                                    <td>{item3.Total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}
            {props.div5 && <div>
                <table className="AB-div5">
                    <tbody>
                        {TableOrderBock1.map((item4, index4) => {
                            return (
                                <tr key={index4}>
                                    <td className={item4.CPriceUSDT1}>{item4.PriceUSDT1}</td>
                                    <td>{item4.Amount1}</td>
                                    <td>{item4.Total1}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}
            {props.div6 && <div>
                <table className="AB-div6">
                    <thead>
                        <td>Time <img src={img1} alt="" /> </td>
                        <td>All Pairs  <img src={img1} alt="" /></td>
                        <td>All Types <img src={img1} alt="" /></td>
                        <td>Buy/Sell  <img src={img1} alt="" /></td>
                        <td>Price(USDT)<img src={img1} alt="" /></td>
                        <td>Amount (BTC) <img src={img1} alt="" /></td>
                        <td>Filled<img src={img1} alt="" /></td>
                        <td>Unfilled <img src={img1} alt="" /></td>
                        <td>Action<img src={img1} alt="" /></td>
                    </thead>
                    <tbody>
                        {TableTheOrders.map((item4, index4) => {
                            return (
                                <tr key={index4}>
                                    <td>{item4.Time}</td>
                                    <td>
                                        <div className={item4.CAllPairs}>
                                            <img src={item4.ImgAllPairs} alt="" />
                                            {item4.AllPairs}
                                        </div>
                                    </td>
                                    <td>{item4.AllTypes}</td>
                                    <td>{item4.BuySell}</td>
                                    <td>{item4.PriceUSDT}</td>
                                    <td>{item4.AmountBTC}</td>
                                    <td>{item4.Filled}</td>
                                    <td>{item4.Unfilled}</td>
                                    <td>
                                        <div className={item4.CAction}>
                                            {item4.Action}
                                            <img src={item4.ImgAction} alt="" />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>}
            {props.EndTable && <div className='AB-End-PAT'>
                <div className='AB-Slider'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>...</button>
                    <button>4</button>
                </div>
                <button className='AB-LoadMorePAT'><img src={img4} alt="" />Load More</button>
                <button className='AB-itemPAT'><img src={img5} alt="" /><p>474<span>Item</span></p></button>
            </div>}
        </div>
    )
}
export default Table