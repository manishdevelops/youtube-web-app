const VideoCard = ({ info }) => {
	console.log(info);
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className=' m-2 w-72 shadow-lg rounded-md'>
			<img
				alt='thumbnail'
				className='rounded-t-md w-full'
				src={thumbnails.medium.url}
			/>
			<ul className='p-2'>
				<li className='py-2 font-bold'>{title}</li>
				<li>{channelTitle}</li>
				<li>{statistics.viewCount}</li>
			</ul>
		</div>
	);
};

export default VideoCard;
