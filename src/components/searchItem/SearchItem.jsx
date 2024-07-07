import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img 
        src="https://cf.bstatic.com/xdata/images/hotel/square600/557889554.webp?k=f7be070221dcb2c4733f5f14b6c6c3cc797b43bd5907166ea9a239c460c02e59&o=" 
        alt="" 
        className="siImg" 
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Appartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
            Entire studio . 1 bathroom . 42m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so look in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$25,900</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
