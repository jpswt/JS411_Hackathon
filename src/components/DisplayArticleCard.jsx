import React from 'react';
import './DisplayArticleCard.css';

const DisplayArticleCard = (props) => {
	const { title, author, points, url, comments, created_at } = props;

	return (
		<li>
			<a href={url} className="title" target="_blank" rel="noopener noreferrer">
				{title}
			</a>{' '}
			{/* <span>
				<a className="url" href={url} target="_blank" rel="noopener noreferrer">
					({url})
				</a>
			</span> */}
			<div className="stats">
				<p>
					{points} points |{' '}
					<a href="/#" className="url">
						{author}
					</a>{' '}
					|{' '}
					<a href="/#" className="url">
						{comments}
					</a>{' '}
					comments | {created_at}
				</p>
			</div>
		</li>
	);
};

export default DisplayArticleCard;
