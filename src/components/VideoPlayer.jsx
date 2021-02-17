import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = (props) => {
	const { videoUrl } = props;
	return (
		<>
			<ReactPlayer
				className="video-player"
				url={videoUrl}
				width="100%"
				playing={true}
				controls={true}
			/>
		</>
	);
};

export default VideoPlayer;
