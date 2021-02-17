import React, { useRef } from 'react';
import { decodeCharCodes, formatDateToString } from '../utils/formatTexts';
import VideoThumbnail from './VideoThumbnail';

const VideoItem = (props) => {
	const { videoId, videos, thumbnails, selectVideo, playVideo } = props;

	const videoItemRef = useRef();

	const handleSelectVideo = (e) => {
		if (e.target.value === videoItemRef.current.value) {
			selectVideo(e.target.value);
			playVideo(e.target.value);
		}
	};
	return (
		<div
			ref={videoItemRef}
			className="video-list-item media row"
			value={videoId}
			onClick={handleSelectVideo}
		>
			{thumbnails.default && (
				<VideoThumbnail thumbnail={thumbnails.default.url} />
			)}
			<div className="video-list-item-body media-body">
				<h5
					ref={videoItemRef}
					className="video-list-item-title row"
					value={videoId}
					onClick={handleSelectVideo}
				>
					{decodeCharCodes(videos.title)}
				</h5>
				<p className="video-list-item-channel row">{videos.channelTitle}</p>
				<p className="video-list-item-date row">
					{formatDateToString(videos.publishTime)}
				</p>
			</div>
		</div>
	);
};

export default VideoItem;
