import axios from 'axios';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchVideos = async (searchTerm) => {
	return await axios.get(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${searchTerm}&type=video&videoDefinition=high&key=${API_KEY}`,
	);
};

export const fetchVideoDetails = async (videoId) => {
	return await axios.get(
		`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`,
	);
};

export const playYoutubeVideo = (videoId) => {
	return `https://www.youtube.com/watch?v=${videoId}`;
};
