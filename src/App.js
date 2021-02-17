import React, { useEffect, useState } from 'react';
import { searchVideos } from './apis/youtube';
import NavBar from './components/NavBar';
import SearchResults from './components/SearchResults';
import VideoDetails from './components/VideoDetails';
import './styles/app.css';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [videos, setVideos] = useState('');
	const [videoId, setVideoId] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const fetchVideos = async (inputValue) => {
		try {
			setIsLoading(true);
			let request;

			if (inputValue) {
				request = await searchVideos(inputValue);
			}
			return setVideos(request.data);
		} catch (err) {
			setIsError(true);
			console.log(err);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm) {
				fetchVideos(searchTerm);
			}
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [searchTerm]);

	return (
		<div id="app" className="app">
			<header id="header" className="header container-fluid">
				<NavBar
					inputValue={searchTerm}
					changeValue={setSearchTerm}
					searchVideos={fetchVideos}
				/>
			</header>
			<main id="main" className="main container-fluid">
				<div className="video-container container-fluid">
					<div className="video-container-row row">
						<div className="video-container-col video-display">
							{videoId && (
								<VideoDetails
									videoId={videoId}
									isLoading={isLoading}
									setLoading={setIsLoading}
									isError={isError}
									setError={setIsError}
								/>
							)}
						</div>
						<div className="video-container-col video-list">
							<SearchResults
								videos={videos}
								isLoading={isLoading}
								isError={isError}
								selectVideo={setVideoId}
								playVideo={setVideoId}
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
