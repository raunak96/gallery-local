import React, { useEffect } from "react";
import useStorage from "../custom-hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
	const { progress, url } = useStorage(file);
	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<div className='progress-bar' style={{ width: `${progress}%` }}>{progress.toFixed(0)}%</div>
	);
};

export default ProgressBar;
