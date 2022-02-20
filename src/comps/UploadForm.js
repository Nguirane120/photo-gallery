import React from 'react'
import { useState } from 'react'
import Progress from './Progress'
import './upload.css'

const UploadForm = () => {

    const [ file, setFile] = useState(null)
    const [ error, setError] = useState(null)
    
    const typeImages = ['image/png', 'image/jpeg']

    const handleChange = e =>{
        let selected = e.target.files[0]
        if( selected && typeImages.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setError("Please selected an image file (png or jpeg)")
        }
    }


  return (
    <form action="">
       <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
       <div className="output">
       {
            error && <div className="err">{ error }</div>
        }
        {
            file && <div>{file.name}</div>
        }
        { file && <Progress file={ file} setFile={setFile}/>}
       </div>
    </form>
  )
}

export default UploadForm