import React from 'react';
import ImageGrid from './comps/imageGrid';
import Title from './comps/Title';
import UploadForm from './comps/uploadForms';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
