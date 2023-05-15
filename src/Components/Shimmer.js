import React from 'react';

const Shimmer = () => {
	return (
		<div className='flex flex-wrap gap-4 rounded-md shadow-md'>
			{Array(10)
				.fill('')
				.map((e, index) => (
					<div key={index} className='w-64 h-64 bg-gray-100 m-4'></div>
				))}
		</div>
	);
};

export default Shimmer;
