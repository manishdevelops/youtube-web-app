import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';

const Head = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => getSearchSuggestions(), 200);
		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchSuggestions = async function () {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		console.log(json[1]);
		setSuggestions(json[1]);
	};

	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className='grid grid-flow-col p-3 m-2 shadow-md'>
			<div className='flex col-span-1'>
				<img
					onClick={() => toggleMenuHandler()}
					className='h-8 mx-2 cursor-pointer'
					alt='menu'
					src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fmost-useful-icons-4%2F50%2FHAMBURGER_MENU-512.png&f=1&nofb=1&ipt=f7956754755d9f927d81848c6d270b933399e7fc6dd515ed6faa7f005c81dc07&ipo=images'
				/>
				<a href='/'>
					<img
						className='h-6 m-1'
						alt='youtube logo'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png'
					/>
				</a>
			</div>
			<div className='col-span-10 text-center'>
				<div>
					<input
						className='w-1/2 rounded-l-full border border-gray-400 p-2 focus:outline-none focus:border-blue-500'
						type='text'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button className='border border-gray-300  rounded-r-full py-2 px-6 bg-gray-50'>
						<i class='bx bx-search'></i>
					</button>
				</div>
				{showSuggestions && (
					<div className='rounded-lg border border-gray-50 fixed bg-white w-2/6 ml-64   shadow-md'>
						<ul className='text-left'>
							{suggestions.map((suggest) => (
								<li
									key={suggest}
									className='py-2 px-3 shadow-sm hover:bg-gray-100'
								>
									🔍 {suggest}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className='col-span-1'>
				<img
					className='h-8'
					alt='user-logo'
					src='https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png'
				/>
			</div>
		</div>
	);
};

export default Head;
