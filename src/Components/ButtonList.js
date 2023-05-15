import React from 'react';
import Button from './Button';

const btnList = [
	'all',
	'Gaming',
	'Songs',
	'Live',
	'Soccer',
	'Cricket',
	'Cooking',
	'Valentine',
	'Shows',
];

const ButtonList = () => {
	return (
		<div className='flex'>
			{btnList.map((btn, i) => (
				<Button key={i} name={btn} />
			))}
		</div>
	);
};

export default ButtonList;
