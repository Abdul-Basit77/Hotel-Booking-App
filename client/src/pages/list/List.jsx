import "./List.css"
import {useLocation} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
import useFetch from "../../hooks/useFetch"

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
    );

  const handleClick = ()=>{
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange 
                onChange={(item) => setDate([item.selection])} 
                minDate={new Date()} 
                ranges={date}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionsItem">
                  <span className="lsOptoinText">Min price <small>per night</small></span>
                  <input type="number" onClick={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptoinText">Max price <small>per night</small></span>
                  <input type="number" onClick={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptoinText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptoinText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptoinText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button onClick={handleClick} >Search</button>
          </div>
          <div className="listResult">
            { loading ? (
              "Loading, please wait..."
            ) : error ? (
              "Something went wrong, please try again."
            ) : (<>
                  { data.map(item => 
                  (<SearchItem item={item} key={item._id}/>
                  ))}
              </>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
