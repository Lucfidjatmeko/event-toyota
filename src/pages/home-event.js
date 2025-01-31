// import { useEffect, useState } from "react";
// import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function HomeEvent() {
//     const [dataEvent, setDataEvent] = useState([])
//     const [inputSearch, setInputSearch] = useState("")

//     useEffect(() => {
//         getApi()
//     },[])

//     const getApi = async() => {
       
//         try {
//             const data = await fetch ("/api/event-data")
//             const result = await data.json()

//             console.log(result, "===> INI DATANYA");
//             setDataEvent(result.data)

//         } catch (error) {
//             console.log(error); 
//         }
            
//     }

//     const handleOnSubmit = async (e) => {
//         e.preventDefault()
//         let inputUser = {
//             search: inputSearch
//         }
//         try {
//             const requestData = await fetch(`api/event-by-search?search=${inputSearch}`, {
//                 method: "POST",
//                 body: JSON.stringify(inputUser)
//             })
             
//             const result = await requestData.json()
//             console.log(result.data, "===> INI APA MAS AMJAD");
            
//             setDataEvent(result.data)

//         } catch (error) {
//             console.log(result.data, " ===> INI ERROR");
//         }
//     }

//     const handleInputText = (valueData) => {
//         console.log(valueData," ===> RERQUESt PAK FATTAH");
//         setInputSearch(valueData)
//     }
//     return(
//         <>
//         <h1>This is HomeEvent</h1>
//         <form onSubmit={handleOnSubmit}>
//             <label>Search</label>
//             <input
//             value={inputSearch}
//             type="text"
//             onChange={e => handleInputText(e.target.value)}/>
    
//             <input type="submit" value="Seacrh Ya"/>

//         </form>
//         <ul>
//             {
//                 dataEvent.map(el => (
//                 <>
//                 <li key={(el.id)}>{el.title}</li>
//                 <Link href={`/detail-event/${el.id}`}> this is detail</Link>                
//                 </>     
//                 ))
//             }
//         </ul>
//         </>
//     )
// }

import { useEffect, useState } from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeEvent() {
  const [dataEvent, setDataEvent] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const data = await fetch("/api/event-data");
      const result = await data.json();
      setDataEvent(result.data);
    } catch (error) {
      console.log("Error fetching event data:", error);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = await fetch(`/api/event-by-search?search=${inputSearch}`, {
        method: "POST",
        body: JSON.stringify({ search: inputSearch })
      });

      const result = await requestData.json();
      setDataEvent(result.data);
    } catch (error) {
      console.log("Error on search request:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Event Showcase</h1>

      {/* Form Pencarian */}
      <form onSubmit={handleOnSubmit} className="d-flex justify-content-center mb-4">
        <input
          className="form-control me-2 w-50"
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search events..."
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>

      {/* Daftar Event */}
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
    </div>
  );
}
