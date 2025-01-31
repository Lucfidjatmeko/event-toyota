import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
 
export default function DetailEvent(){
    const [dataById, setDataById] = useState({})
    const router = useRouter()
    const {id} = router.query
 
    useEffect(()=>{
        console.log(id,"Pak Lucfi kece");
        
        getById()
    },[id])
 
    const getById = async() =>{
        try {
            const data = await fetch(`/api/event-id/${id}`)
            const result = await data.json()
 
            // console.log(result.data, "ini datanya");
            setDataById(result.data)
        } catch (error) {
            console.log(error);
           
        }
    }
 
    return(
        <>
            <h1>
                ini detail Event {id}
            </h1>
            <p>
                {JSON.stringify(dataById)}
            </p>
            <p><Link href="/home-event"> Back</Link></p>
        </>
    )  
}