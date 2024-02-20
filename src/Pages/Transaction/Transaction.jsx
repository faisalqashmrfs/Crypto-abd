import img1 from "./../../components/ManScreen/img/ic_Chevron Down.svg"
import img2 from "./../../assets/img-SN/search-normal.svg"
import img5 from "./../../components/ManScreen/img/Filter-Icon.svg"
import Table from "./../../components/ManScreen/Table/Table"
import "./Transaction.css"

const Transaction = () => {
  return (
    <div className='AB-Transaction'>
      <div className='AB-First-Transaction'>
        <div className='AB-title-Transaction'>
          <h1>Trade History</h1>
        </div>
        <div className='AB-First-Transaction-end'>
          <div className='AB-SelectDay-Transaction'>
            <button>Last 30 Days<img src={img1} alt="" /></button>
          </div>
          <div className='AB-SelectDate-Transaction'>
            <button>Aug 2022<img src={img1} alt="" /></button>
          </div>
          <form className="AB-TheFormSearch">
            <input type="search" id="AB-searchInput-Transaction" placeholder="Search" />
            <input type="image" src={img2} alt="Search" className='AB-searchInput-Transaction-icon' />
            <div className="AB-Container-FilterIcon">
              <button><img src={img5} alt="" /></button>
            </div>
          </form>
        </div>
      </div>
      <Table div1={true} EndTable={true} />
    </div>
  )
}

export default Transaction