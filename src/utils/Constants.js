const GOOGLE_API_KEY = 'AIzaSyAh_PYk9J3gI3Qm2bH6YFzevblEyZ1rK3k';

export const YOUTUBE_VIDEOS_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
	GOOGLE_API_KEY;