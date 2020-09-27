import React, { useState } from 'react';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/uploadForms';


function App() {
  const [selectedImg, SetSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid SetSelectedImg={SetSelectedImg}/>
      <Modal selectedImg={selectedImg}/>
    </div>
  );
}

export default App;
