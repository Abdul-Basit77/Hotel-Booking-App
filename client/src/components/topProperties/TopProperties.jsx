import "./TopProperties.css"

const TopProperties = () => {
  return (
    <div className="tp">
        <div className="tpItem">
        <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" 
            alt="" 
            className="tpImg" />
            <span className="tpName">Aparthotel Stare Miasto</span>
            <span className="tpCity">Madrid</span>
            <span className="tpPrice">Starting from $120</span>
            <div className="tpRating">
                <button>9.6</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="tpItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" 
            alt="" 
            className="tpImg" />
            <span className="tpName">Cheval Three Tower of London</span>
            <span className="tpCity">London</span>
            <span className="tpPrice">Starting from $500</span>
            <div className="tpRating">
                <button>9.4</button>
                <span>Wonderful</span>
            </div>
        </div>
        <div className="tpItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=" 
            alt="" 
            className="tpImg" />
            <span className="tpName">numa Vita Apartements</span>
            <span className="tpCity">Italy</span>
            <span className="tpPrice">Starting from $420</span>
            <div className="tpRating">
                <button>9.3</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="tpItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/564164054.webp?k=4af0c1162a89e574f3e72972e984c3919aa6689556d25be78861a947237df255&o=" 
            alt="" 
            className="tpImg" />
            <span className="tpName">NERO Suites by NOMEE Group</span>
            <span className="tpCity">Greece</span>
            <span className="tpPrice">Starting from $600</span>
            <div className="tpRating">
                <button>9.5</button>
                <span>Exceptional</span>
            </div>
        </div>
    </div>
  )
}

export default TopProperties
