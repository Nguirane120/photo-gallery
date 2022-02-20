import React from 'react';
import { useState } from 'react';
import ImagesGrid from './comps/ImagesGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selectedImg, setSlectedImg] = useState(null)
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImagesGrid setSlectedImg={ setSlectedImg}/>
      { selectedImg &&  <Modal selectedImg={selectedImg}
      setSlectedImg={setSlectedImg}/>}
    </div>
  );
}

export default App;
