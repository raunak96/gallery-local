import React, { useState, Fragment } from "react";
import ProgressBar from "./ProgressBar";

const types = /image\/\w+/;

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const uploadedFile = e.target.files[0];
		if (uploadedFile && uploadedFile.type.match(types)) {
			setFile(uploadedFile);
			setError(null);
		}else{
			setFile(null);
			setError("Please select an image file (png or jpg or other image types)");
		}
	};
	return (
		<div className="container">
			<label>
				<input type='file' onChange={handleChange} accept="image/*" />
				<span><strong>+</strong> Upload Image</span>
			</label>
			<div className='output'>
				{error && <div className='error'>{error}</div>}
				{file && (
					<Fragment>
						<div>{file.name}</div>
						<ProgressBar file={file} setFile={setFile} />
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default UploadForm;
