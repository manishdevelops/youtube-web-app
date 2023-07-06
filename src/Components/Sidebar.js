import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	if (!isMenuOpen) return null;

	return (
		<div className='p-3 shadow-lg w-52'>
			<ul>
				<Link to='/'>
					<li className='my-1 py-1.5 px-3 rounded-lg  hover:bg-slate-400 cursor-pointer'>
						<i className='bx bx-home'></i> <span className='ml-3'>Home</span>
					</li>
				</Link>

				<li className='my-1 py-1.5 px-3 rounded-lg  hover:bg-slate-400 cursor-pointer'>
					<i className='bx bx-camera-movie'></i>{' '}
					<span className='ml-3'>Shorts</span>
				</li>

				<li className='my-1 py-1.5 px-3 rounded-lg  hover:bg-slate-400 cursor-pointer'>
					<i className='bx bxs-videos'></i>{' '}
					<span className='ml-3'>Subscriptions</span>
				</li>
			</ul>
			<hr />

			<h1 className='font-bold pt-5 '>Subscriptions</h1>
			<ul>
				<li className='my-1 py-1.5 px-3 rounded-lg  hover:bg-slate-400 cursor-pointer'>
					<i className='bx bx-music'></i> <span className='ml-3'>Music</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bxs-medal'></i> <span className='ml-3'>Sports</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-game'></i>
					<span className='ml-3'>Gaming</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-film'></i>
					<span className='ml-3'>Movies</span>
				</li>
			</ul>
			<hr />
			<h1 className='font-bold pt-5 px-3'>Explore</h1>
			<ul>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bxs-hot'></i> <span className='ml-3'>Trending</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-shopping-bag'></i>
					<span className='ml-3'>Shopping</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-music'></i> <span className='ml-3'> Music</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-film'></i>
					<span className='ml-3'>Movies & Shows</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-wifi'></i> <span className='ml-3'>Live</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-game'></i>
					<span className='ml-3'>Gaming</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-news'></i> <span className='ml-3'>News</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bxs-medal'></i> <span className='ml-3'>Sports</span>
				</li>
				<li className='my-1 py-1.5 px-3 hover:bg-slate-400 rounded-lg cursor-pointer'>
					<i className='bx bx-bulb'></i> <span className='ml-3'>Learning</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
