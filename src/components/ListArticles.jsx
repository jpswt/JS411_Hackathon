import React from 'react';
import DisplayArticleCard from './DisplayArticleCard';

import './ListArticles.css';

function ListArticles(props) {
	return (
		<ol>
			{props.article.map((article, index) => (
				<DisplayArticleCard
					key={index}
					hide={props.hide}
					title={article.title}
					url={article.url}
					points={article.points}
					author={article.author}
					comments={article.num_comments}
					created_at={article.created_at}
				/>
			))}
		</ol>
	);
}

export default ListArticles;
