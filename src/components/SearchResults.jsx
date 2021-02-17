import React from 'react';
import '../styles/components/searchResults.css';
import VideoItem from './VideoItem';

const SearchResults = (props) => {
	const { videos, selectVideo, playVideo, isLoading, isError } = props;

	return (
		<div id="video-results-list" className="video-results-list list-group">
			{videos.items &&
				videos.items.length > 0 &&
				videos.items.map((video, index) => {
					return (
						<VideoItem
							key={index}
							videoId={video.id.videoId}
							videos={video.snippet}
							thumbnails={video.snippet.thumbnails}
							selectVideo={() => selectVideo(video.id.videoId)}
							playVideo={() => playVideo(video.id.videoId)}
						/>
					);
				})}
		</div>
	);
};

export default SearchResults;
