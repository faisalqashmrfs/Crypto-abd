import Table from '../Table/Table'
import img1 from "./../img/ic_Chevron Down.svg"
import img2 from "./../../../assets/img-SN/search-normal.svg"
import img3 from "./../img/List-Icon.svg"
import img4 from "./../img/Heatmap-Icon.svg"
import img5 from "./../img/Buble-Icon.svg"
import "./PricList.css"

const Tran = () => {
  return (
    <div className='AB-PricList'>
      <div className='AB-First-PricList'>
        <div className='AB-title-PricList'>
          <h1>Cryptocurrency Prices</h1>
          <span>Updated 1 minute ago</span>
        </div>
        <div className='AB-First-PricList-end'>
          <div className='AB-SelectRows-PricList'>
            <button>Show rows : 10 <img src={img1} alt="" /></button>
          </div>
          <form className="AB-TheFormSearch">
            <input type="search" id="AB-searchInput-PricList" placeholder="Search" />
            <input type="image" src={img2} alt="Search" className='AB-searchInput-PricList-icon' />
          </form>
          <div className='AB-PBH'>
            <button><img src={img3} alt="" /></button>
            <button><img src={img4} alt="" /></button>
            <button><img src={img5} alt="" /></button>
          </div>
        </div>
      </div>
      <Table div2={true} EndTable={true} />
    </div>
  )
}

export default Tran