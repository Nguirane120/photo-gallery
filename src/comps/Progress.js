import React from 'react'
import { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import './Progress.css'

const Progress = ({ file, setFile}) => {

    const { url, progress} = useStorage(file)
    console.log(url, progress)
  
    useEffect(() =>{
        if(url){
            setFile(null)
        }
    }, [url, setFile])

  return (
    <div className="progress-bar" style={{ width: progress + "%"}}></div>
  )
}

export default Progress