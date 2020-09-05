import React, { useState } from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import ImagesList from './components/ImagesList';
import Modal from './components/Modal';
import SelectedImageContext from './contexts/SelectedImage';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const selectImage = (imgUrl)=> setSelectedImage(imgUrl);
  return (
		<div className='App'>
			<Header />
			<UploadForm />
			<SelectedImageContext.Provider value={{ selectImage, selectedImage }}>
				<ImagesList />
				{selectedImage && <Modal />}
			</SelectedImageContext.Provider>
		</div>
  );
};

export default App;