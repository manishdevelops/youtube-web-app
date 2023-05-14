import 'boxicons';

import React from 'react';

const Sidebar = () => {
	return (
		<div className='p-5 shadow-lg w-52'>
			<h1 className='font-bold pt-5'>Subscriptions</h1>
			<ul>
				<li className='my-1 py-1.5'>
					<i class='bx bx-music'></i> <span className='mx-3'>Music</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bxs-medal'></i> <span className='mx-3'>Sports</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-game'></i>
					<span className='mx-3'>Gaming</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-film'></i>
					<span className='mx-3'>Movies</span>
				</li>
			</ul>
			<hr />
			<h1 className='font-bold pt-5'>Explore</h1>
			<ul>
				<li className='my-1 py-1.5'>
					<i class='bx bxs-hot'></i> <span className='mx-3'>Trending</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-shopping-bag'></i>{' '}
					<span className='mx-3'>Shopping</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-music'></i> <span className='mx-3'> Music</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-film'></i>{' '}
					<span className='mx-3'>Movies & Shows</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-wifi'></i> <span className='mx-3'>Live</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-game'></i>
					<span className='mx-3'>Gaming</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-news'></i> <span className='mx-3'>News</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bxs-medal'></i> <span className='mx-3'>Sports</span>
				</li>
				<li className='my-1 py-1.5'>
					<i class='bx bx-bulb'></i> <span className='mx-3'>Learning</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
