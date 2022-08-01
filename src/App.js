import React, { Component } from 'react';
import axios from 'axios';
import ListArticles from './components/ListArticles';
// import ArticlesByAuthor from './components/ArticlesByAuthor';
import Header from './components/Header';
// import DisplayArticleCard from './components/DisplayArticleCard';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			searchTerm: '',
			author: '',
			date: '',
			selection: 'searchTerm',
		};
	}

	componentDidMount() {
		axios
			.get('http://hn.algolia.com/api/v1/search?tags=front_page')
			.then((res) => {
				const articles = res.data.hits;
				console.log(articles);
				this.setState({ articles });
			});
	}

	handleSubmit = (e) => {
		console.log(e);
		e.preventDefault();

		if (this.state.selection === 'searchTerm') {
			axios
				.get(
					`http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=story
				`
				)
				.then((res) => {
					const articles = res.data.hits;
					console.log(articles);
					this.setState({ articles });
				});
			this.setState({ searchTerm: '' });
		}
		if (this.state.selection === 'author') {
			axios
				.get(
					`http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.author}`
				)
				.then((res) => {
					const articles = res.data.hits;
					console.log(articles);
					this.setState({ articles });
				});
			this.setState({ author: '' });
		}
		if (this.state.selection === 'date') {
			axios
				.get(
					`https://hn.algolia.com/api/v1/search_by_date?query=${this.state.date}&tags=story`
				)
				.then((res) => {
					const articles = res.data.hits;
					console.log(articles);
					this.setState({ articles });
				});
			this.setState({ date: '' });
		}
	};

	handleChange = (e) => {
		this.setState({ [e.target.title]: e.target.value });
	};

	handleSelection = (e) => {
		this.setState({ selection: e.target.value });
	};

	filterSearch = (term) => {
		return (item) => {
			return item.title.toLowerCase().includes(term.toLowerCase());
		};
	};

	render() {
		return (
			<div className="App">
				<div className="App-body">
					<Header
						searchTerm={this.state.searchTerm}
						author={this.state.author}
						date={this.state.date}
						selection={this.state.selection}
						handleSelection={this.handleSelection}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>

					{this.state.searchTerm || this.state.author || this.state.date ? (
						<ListArticles
							article={this.state.articles.filter(
								this.filterSearch(
									this.state.searchTerm || this.state.author || this.state.date
								)
							)}
						/>
					) : (
						<ListArticles article={this.state.articles} />
					)}
				</div>
			</div>
		);
	}
}

export default App;
