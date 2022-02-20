import Aos from 'aos'
import React from 'react'
import { useEffect } from 'react'
// import { motion } from 'framer-motion'
import useFirestore from '../hooks/useFirestore'
import './images.css'

const ImagesGrid = ({ setSlectedImg }) => {
    const { docs } = useFirestore("images")
   useEffect(() =>{
       Aos.init({ duration: 2000})
   }, [])
   
  return (
    <div className='img-grid'>
        {
           docs && docs.map((doc) =>(
                <div className="img-wrap"  key={doc.id} onClick={ () => setSlectedImg(doc.url)}>
                        <img data-aos="flip-left" src={ doc.url} alt="uploaded imagages"  />
                    
                </div>
            ))
        }
    </div>
  )
}

export default ImagesGrid