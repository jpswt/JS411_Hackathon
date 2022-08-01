import React from 'react';
import './Header.css';

const Header = (props) => {
	const { selection, value, handleChange, handleSubmit, handleSelection } =
		props;
	return (
		<div className="navbar">
			<div className="logo">
				<h2>H</h2>
				<h3>
					Search <br /> Hacker News
				</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					title={selection}
					onChange={handleChange}
					placeholder="Select search type first, then search term"
				></input>
				<select value={value} onChange={handleSelection}>
					<option className="option" value="searchTerm">
						Search by Articles
					</option>
					<option value="author">Search By Author</option>
					<option value="date">Search By Date</option>
				</select>

				<input className="button" type="submit"></input>
			</form>
		</div>
	);
};

export default Header;
