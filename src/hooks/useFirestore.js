import { useState } from "react";
import { useEffect } from "react";
import { db } from "../comps/firebase";


const useFirestore = (collection) =>{

    const [docs, setDocs] = useState([])

    useEffect(() =>{
        db.collection(collection)
        .orderBy("createdAt", 'desc')
        .onSnapshot( snapshot =>{
            let documents = []
            snapshot.forEach( doc =>{
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })
    }, [collection])
    return { docs}
}


export default useFirestore