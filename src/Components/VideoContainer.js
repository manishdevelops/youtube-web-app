import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/Constants';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const VideoContainer = (a = '') => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getVideos = async () => {
			try {
				const response = await fetch(YOUTUBE_VIDEOS_API);
				if (response.ok) {
					const data = await response.json();
					setVideos(data.items);
				} else {
					console.error('Failed to fetch videos:', response.status);
				}
			} catch (error) {
				console.error('Error while fetching videos:', error);
			}
		};

		getVideos();
	}, []);

	return videos.length === 0 ? (
		<Shimmer />
	) : (
		<div className='flex flex-wrap justify-evenly'>
			{videos.map((video) => (
				<Link to={'/watch?v=' + video.id} key={video.id}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
