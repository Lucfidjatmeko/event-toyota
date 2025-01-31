// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Link from "next/link";


// export default function DetailEvent() {
//   const [dataById, setDataById] = useState({})
//   const router = useRouter()
//   const {id} = router.query

//   useEffect(() => {
//     console.log(id, "=== APA SIH");
//     getById()
//   }, [id])

//   const getById = async () => {
//     try {
//         const data = await fetch (`/api/event-id/${id}`)
//         const result = await data.json()
//         setDataById(result.data)
//     } catch (error) {
//         console.log(error," ===> P2");
        
//     }
//   }
//     return(
//         <>
//         <h1> This is Detail Event {id} </h1>
//         <p>{JSON.stringify(dataById)}</p>
//         <Link href="/home-event">Back to Home Event</Link>
       
//         <div className="container mt-4">
//         <h1 className="mb-4">Detail Event: {dataById.title}</h1>
//         {dataById.image && (
//         <img
//           src={dataById.image}
//           alt={dataById.title}
//           className="img-fluid rounded mb-4"
//           style={{ maxHeight: '300px', objectFit: 'cover' }}
//         />
//         </>
//     )
// }
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function DetailEvent() {
//   const [dataById, setDataById] = useState({});
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       getById();
//     }
//   }, [id]);

//   const getById = async () => {
//     try {
//       const data = await fetch(`/api/event-id/${id}`);
//       const result = await data.json();
//       setDataById(result.data);
//     } catch (error) {
//       console.log("Error fetching event data:", error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">This is Detail Event {id}</h1>
//       <p>{JSON.stringify(dataById)}</p>

//       <Link href="/home-event" className="btn btn-primary mt-3">
//         Back to Home Event
//       </Link>

//       {dataById.title && (
//         <div className="mt-4">
//           <h2>{dataById.title}</h2>
//         </div>
//       )}

//       {dataById.image && (
//         <img
//           src={dataById.image}
//           alt={dataById.title}
//           className="img-fluid rounded mb-4"
//           style={{ maxHeight: '300px', objectFit: 'cover' }}
//         />
//       )}
//     </div>
//   );
// }

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function DetailEvent() {
  const [dataById, setDataById] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getById();
    }
  }, [id]);

  const getById = async () => {
    try {
      const data = await fetch(`/api/event-id/${id}`);
      const result = await data.json();
      setDataById(result.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="container mt-5">
      <Link href="/home-event" className="btn btn-primary mb-4">
        Back to Home Event
      </Link>

      {dataById.title ? (
        <div className="card shadow-lg p-4 rounded">
          <h1 className="card-title text-center mb-4">{dataById.title}</h1>

          {dataById.image && (
            <img
              src={dataById.image}
              alt={dataById.title}
              className="card-img-top rounded mb-4"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          )}

          <div className="card-body">
            <p className="text-muted">
              <strong>Date:</strong> {dataById.date}
            </p>
            <p className="text-muted">
              <strong>Location:</strong> {dataById.location}
            </p>
            <p className="mt-3">{dataById.description}</p>

            <div className="badge bg-info mt-2">{dataById.category}</div>
          </div>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
}
