import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeEvent() {
    const [dataEvent, setDataEvent] = useState([])
    const [inputSearch, setInputSearch] = useState("")

    useEffect(() => {
        getApi ()
    },[])
    
    const getApi = async () => {
        try {
            const data = await fetch ("/api/event-data")
            const result = await data.json()

            console.log(result, "==> INI DATANYA YAA");
            setDataEvent(result.data)
        
        } catch (error) {
            console.log(error);
        }

    }

    const HandleonSubmit = async (e) => {
        e.preventDefault()

        let inputUser = {
            search: inputSearch
        }

        try {
        const requestData = await fetch(`/api/event-by-search?search=${inputSearch}`)
        const result = await requestData.json()
        console.log(result.data, "INI APA MAS AMJAD");
        setDataEvent(result.data)
        
            
        } catch (error) {
            console.log(error, "==> INI ERROR");
                       
        }

    }

    const handleInputText = (valueData) => {
        console.log(valueData, "==> REQUEST PAK FATTAH");
        setInputSearch(valueData)
    } 
    
    
    return (
        <>
            <h1>This is Home Event</h1>
            <form onSubmit={HandleonSubmit}>
                <label>Search:</label>
                <input
                    //value={inputSearch}
                    type="text"
                    onChange={e => setInputSearch(e.target.value)}
                />
                <input type="submit" value="search yaa"/>
            </form>
            {/* <ul>
                {
                    dataEvent.map(el => (
                        <>
                        <li key={el.id}>{el.title}</li>
                        <Link href={`/detail-event/${el.id}`}>Go To Detail</Link>
                        </>
                    ))
                }                
            </ul> */}

            <div className="row row-cols-1 row-cols-md-3 g-4">
        {dataEvent.length > 0 ? (
          dataEvent.map((el) => (
            <div className="col" key={el.id}>
              <div className="card h-100">
                {el.image && (
                  <img
                    src={el.image}
                    className="card-img-top"
                    alt={el.title}
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">
                    {el.description.length > 100
                      ? `${el.description.substring(0, 100)}...`
                      : el.description}
                  </p>
                  <Link href={`/detail-event/${el.id}`} className="btn btn-outline-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No events found.</p>
        )}
      </div>
        </>
    )

}