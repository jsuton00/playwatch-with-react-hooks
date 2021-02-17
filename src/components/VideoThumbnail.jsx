import { PlayArrow } from '@material-ui/icons';
import React from 'react';

const VideoThumbnail = (props) => {
	const { thumbnail } = props;
	return (
		<div className="video-thumbnail mr-3">
			<span className="video-play-icon">
				<PlayArrow />
			</span>
			<img
				src={thumbnail}
				alt="Video Thumbnail"
				className="video-thumbnail-img"
			/>
		</div>
	);
};

export default VideoThumbnail;
