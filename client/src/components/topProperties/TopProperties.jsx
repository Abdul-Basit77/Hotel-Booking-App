import useFetch from "../../hooks/useFetch";
import "./TopProperties.css"

const TopProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true");

    return (
    <div className="tp">
        { loading ? (
            "Loading, please wait..."
        ) : error ? (
            "Something went wrong, please try again."
        ) : ( <>
        { data.map((item) => (
            <div className="tpItem" key={item._id}>
            <img 
                src= {item.photos[0]}
                alt=""  
                className="tpImg" />
                <span className="tpName">{item.name}</span>
                <span className="tpCity">{item.city}</span>
                <span className="tpPrice">Starting from {item.cheapestPrice}</span>
                { item.rating && <div className="tpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div>
        ))}
        </>)
        }
    </div>
    )
}

export default TopProperties
