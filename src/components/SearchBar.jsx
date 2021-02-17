import { Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useState, useRef } from 'react';
import '../styles/components/searchBar.css';

const SearchBar = (props) => {
	const { inputValue, changeValue, searchVideos } = props;
	const [debouncedTerm] = useState(inputValue);

	const inputRef = useRef();

	const handleChange = (e) => {
		if (e.target.value === inputRef.current.value) {
			return changeValue(e.target.value);
		}
	};

	const handleSearch = async (e) => {
		e.preventDefault();

		if (debouncedTerm === inputRef.current.value) {
			return await searchVideos(debouncedTerm);
		}
	};

	return (
		<div id="search-bar" className="search-bar row">
			<div className="search-bar-input">
				<input
					ref={inputRef}
					id="search-input"
					name="search-input"
					type="text"
					placeholder="Search..."
					onChange={handleChange}
					value={inputValue}
				/>
			</div>
			<div className="search-bar-submit">
				<Button
					id="btnSearch"
					name="btnSearch"
					type="button"
					className="btn-search"
					variant="contained"
					onClick={handleSearch}
					startIcon={<Search />}
				>
					Search
				</Button>
			</div>
		</div>
	);
};

export default SearchBar;
