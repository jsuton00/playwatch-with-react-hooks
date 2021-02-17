import React, { useState, useEffect } from 'react';
import { fetchVideoDetails, playYoutubeVideo } from '../apis/youtube';
import VideoPlayer from './VideoPlayer';
import {
	CalendarToday,
	ThumbDown,
	ThumbUp,
	Visibility,
} from '@material-ui/icons';
import {
	formatDate,
	formatNumbersToK,
	formatThousandstoString,
} from '../utils/formatTexts';
import '../styles/components/videoDetails.css';

const VideoDetails = (props) => {
	const { videoId, isLoading, setLoading, isError, setError } = props;
	const [videoUrl, setVideoUrl] = useState('');
	const [videoDetails, setVideoDetails] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			if (videoId) {
				setVideoUrl(playYoutubeVideo(videoId));
			}
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [videoId]);

	useEffect(() => {
		const timer = setTimeout(() => {
			const fetchDetails = async () => {
				try {
					setLoading(true);
					let response;

					if (videoId) {
						response = await fetchVideoDetails(videoId);
						setVideoDetails(response.data.items[0]);
					}
				} catch (err) {
					console.log(err);
					setError(err);
				}
			};
			fetchDetails();
			return () => {
				clearTimeout(timer);
			};
		});
	}, [setError, setLoading, videoId]);

	return (
		<div
			id={`video-details-video-${videoId}`}
			className="video-details container-fluid"
		>
			<div className="video-details-content container-fluid card">
				<div className="video-player-container card-img-top">
					{videoUrl && <VideoPlayer videoUrl={videoUrl} />}
				</div>
				{videoDetails && (
					<>
						<div className="video-details-body card-body">
							<h5 className="video-details-title card-title">
								{videoDetails.snippet.title}
							</h5>
						</div>
						<div className="video-details-metadata card-footer row">
							<p className="video-details-stats card-text">
								<span className="video-views">
									<Visibility />
									{`${formatThousandstoString(
										videoDetails.statistics.viewCount,
									)} views`}
								</span>
								<span className="video-publishDate">
									<CalendarToday />
									{`${formatDate(videoDetails.snippet.publishedAt)}`}
								</span>
								<span className="video-likes">
									<ThumbUp />
									{`${formatNumbersToK(videoDetails.statistics.likeCount)}`}
								</span>
								<span className="video-dislikes">
									<ThumbDown />
									{`${formatNumbersToK(videoDetails.statistics.dislikeCount)}`}
								</span>
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default VideoDetails;
