import React from 'react';

const ChatMessage = ({ name, message }) => {
	return (
		<div className=' flex items-center shadow-sm p-2'>
			<img
				className='w-6'
				alt='user'
				src='https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png'
			/>
			<span className='font-bold px-2'>{name}</span>
			<span className=''>{message}</span>
		</div>
	);
};

export default ChatMessage;
