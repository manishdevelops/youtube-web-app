import React from 'react';

const Head = () => {
	return (
		<div className='grid grid-flow-col p-3 m-2 shadow-md'>
			<div className='flex col-span-1'>
				<img
					className='h-8 mx-2'
					alt='menu'
					src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fmost-useful-icons-4%2F50%2FHAMBURGER_MENU-512.png&f=1&nofb=1&ipt=f7956754755d9f927d81848c6d270b933399e7fc6dd515ed6faa7f005c81dc07&ipo=images'
				/>
				<img
					className='h-6 m-1'
					alt='youtube logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png'
				/>
			</div>
			<div className='col-span-10 text-center'>
				<input
					className='w-1/2 rounded-l-full border border-gray-400 p-2'
					type='text'
				/>
				<button className='border border-x-gray-400 rounded-r-full p-2 bg-gray-50'>
					<i class='bx bx-search'></i>
				</button>
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
